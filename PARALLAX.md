# Homepage parallax

The homepage uses the existing GSAP, ScrollTrigger and Lenis dependencies. No additional packages are required.

- **Hero:** the campus photograph, foreground copy, circular outlines and oversized lettering move on independent scroll planes.
- **Introduction:** the library crop opens to full width while the photograph and background lettering drift independently.
- **Courses and scholar journey:** desktop scenes pin while chapters change with image wipes, crossfades and text entrances. Course selectors scroll to the corresponding chapter.
- **Campus gallery:** vertical scrolling travels across large landscape panels; each photograph moves against the track.
- **Learning experience and final call to action:** photographs and copy move at different speeds.

## Tune the motion

`src/components/animations/ParallaxImage.tsx` controls reusable image movement. Its `travel` prop defaults to 12 and is capped at 14 to keep the oversized photograph inside its crop. Touch and small screens use 40% of that movement.

`src/components/HeroSection.tsx` contains the hero timeline. Adjust the `yPercent`, `y` and `rotation` values there to tune its depth.

`PINNED_SCENE_QUERY` in `src/lib/animations/gsapUtils.ts` enables pinning only for fine pointers, windows at least 1024px wide and 760px high, and users without reduced motion enabled. Keep the matching visibility query in `src/app/globals.css` synchronized. Other viewports display every chapter in normal page flow. Media-query changes clean up and recreate the relevant scenes.

## Check locally

Run `npm run dev`, then visit `http://localhost:3000`. On Windows PowerShell with script execution restricted, use `npm.cmd run dev`.

Scroll from top to bottom on desktop, resize to a narrow or short window, and enable the operating system's reduced-motion setting. The course and story content should remain available in each layout.

The original section files and stylesheet are backed up in `scratch/before-parallax.zip`.
