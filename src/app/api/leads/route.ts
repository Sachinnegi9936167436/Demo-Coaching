import { NextResponse } from 'next/server';
import { z } from 'zod';

// ==============================================================================
// SACHIN 'S DEMO COACHING — PRODUCTION LEAD INTAKE API ROUTE
// ==============================================================================
// POST /api/leads
// ==============================================================================

const leadIntakeSchema = z.object({
  name: z.string().trim().min(2, 'Full candidate name must be at least 2 characters'),
  phone: z.string().trim().min(10, 'A valid 10-digit phone number is required')
    .regex(/^[+0-9\s-()]{10,16}$/, 'Invalid phone number format'),
  email: z.string().trim().email('A valid email address is required'),
  interestedCourse: z.string().min(2, 'Please select or specify an academic program'),
  message: z.string().optional(),
  consent: z.literal(true, {
    message: 'You must consent to receive academic guidance and examination updates',
  }),
  formType: z.enum(['counselling', 'demo', 'callback', 'course_enquiry', 'admission']),
  
  // Anti-Spam Security Fields
  hp_field: z.string().optional(), // Honeypot: must be empty
  formLoadedAt: z.number().optional(), // Bot submission velocity check
});

export type LeadIntakePayload = z.infer<typeof leadIntakeSchema>;

// Server-side sliding cache for duplicate submission prevention (5-minute window)
const recentSubmissionsCache = new Map<string, number>();

function cleanRecentSubmissionsCache() {
  const now = Date.now();
  const FIVE_MINUTES_MS = 5 * 60 * 1000;
  for (const [key, timestamp] of recentSubmissionsCache.entries()) {
    if (now - timestamp > FIVE_MINUTES_MS) {
      recentSubmissionsCache.delete(key);
    }
  }
}

export async function POST(request: Request) {
  try {
    cleanRecentSubmissionsCache();

    // 1. Parse JSON body
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed JSON payload' },
        { status: 400 }
      );
    }

    // 2. Anti-Spam Honeypot Verification
    if (body.hp_field && body.hp_field.trim() !== '') {
      // Bot trapped in honeypot
      return NextResponse.json(
        { success: false, error: 'Automated submission rejected' },
        { status: 400 }
      );
    }

    // 3. Bot Velocity Check (Submission in under 1 second indicates automated bot)
    if (body.formLoadedAt && Date.now() - body.formLoadedAt < 1000) {
      return NextResponse.json(
        { success: false, error: 'Submission submitted suspiciously fast. Please retry.' },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = leadIntakeSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 5. Duplicate Submission Protection (Key = phone + course)
    const duplicateKey = `${validData.phone.replace(/[^0-9]/g, '')}-${validData.interestedCourse.toLowerCase()}`;
    if (recentSubmissionsCache.has(duplicateKey)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'An inquiry for this candidate and course was received moments ago. An admissions dean is already reviewing your file.' 
        },
        { status: 429 }
      );
    }

    // Record submission in sliding window cache
    recentSubmissionsCache.set(duplicateKey, Date.now());

    // 6. Generate Unique Lead Identification Code
    const leadId = `SDC-LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const formattedLeadRecord = {
      leadId,
      timestamp,
      candidate: {
        name: validData.name,
        phone: validData.phone,
        email: validData.email,
      },
      academicTarget: {
        program: validData.interestedCourse,
        inquiryType: validData.formType,
        scholarNote: validData.message || 'No additional message provided',
      },
      intakeMetadata: {
        status: 'PENDING_FACULTY_REVIEW',
        sanctuaryCampus: 'Pinnacle Tower, New Delhi',
        consentLogged: true,
      },
    };

    // 7. CRM / Webhook Integration Interface
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    let webhookStatus = 'NOT_CONFIGURED';

    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedLeadRecord),
        });
        webhookStatus = webhookResponse.ok ? 'DELIVERED' : `FAILED_${webhookResponse.status}`;
      } catch (err: any) {
        webhookStatus = `DELIVERY_ERROR: ${err.message}`;
      }
    }

    // Server-Side Diagnostic Logging
    console.log(`[SDC Lead Intake] ✦ ID: ${leadId} • ${validData.name} • ${validData.phone} • Webhook: ${webhookStatus}`);

    // Return Real Confirmed Success
    return NextResponse.json({
      success: true,
      leadId,
      timestamp,
      message: 'Inquiry successfully registered in the SDC Admissions Vault.',
      webhookStatus,
    });

  } catch (error: any) {
    console.error('[SDC Lead Intake Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing academic lead.' },
      { status: 500 }
    );
  }
}
