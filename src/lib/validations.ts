import { z } from 'zod';

export const demoBookingSchema = z.object({
  fullName: z.string().min(2, { message: 'Candidate name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please provide a valid 10-digit contact number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional().or(z.literal('')),
  courseId: z.string().min(1, { message: 'Please select a program track.' }),
  preferredSlot: z.string().min(1, { message: 'Please select a preferred slot.' }),
  role: z.string(),
  notes: z.string().optional().or(z.literal('')),
});

export type DemoBookingValues = z.infer<typeof demoBookingSchema>;

export const counsellingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  phone: z.string().min(10, { message: 'Valid contact phone is required.' }),
  email: z.string().email({ message: 'Valid email required.' }).optional().or(z.literal('')),
  targetExam: z.string().min(1, { message: 'Please specify target exam.' }),
  currentGrade: z.string(),
  discussionTopic: z.string().optional().or(z.literal('')),
});

export type CounsellingValues = z.infer<typeof counsellingSchema>;

export const admissionsSchema = z.object({
  applicantName: z.string().min(2, { message: 'Aspirant name is required.' }),
  phone: z.string().min(10, { message: '10-digit phone number is required.' }),
  email: z.string().email({ message: 'Valid email address is required.' }),
  targetCourse: z.string().min(1, { message: 'Select your fellowship track.' }),
  intakeRound: z.string(),
  academicBackground: z.string().optional().or(z.literal('')),
});

export type AdmissionsValues = z.infer<typeof admissionsSchema>;

export const contactInquirySchema = z.object({
  fullName: z.string().min(2, { message: 'Name is required.' }),
  phone: z.string().min(10, { message: 'Phone number is required.' }),
  email: z.string().email({ message: 'Valid email is required.' }).optional().or(z.literal('')),
  subject: z.string().min(1, { message: 'Select nature of inquiry.' }),
  message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),
});

export type ContactInquiryValues = z.infer<typeof contactInquirySchema>;
