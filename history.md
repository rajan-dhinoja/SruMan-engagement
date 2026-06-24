# Project History

## Prompt 1 (2026-06-24)
- Translated English/transliterated words in the Gujarati localization dictionary (`src/data/translations.ts`):
  - Changed "Ring Ceremony" to "રિંગ સેરેમની"
  - Changed "Aman" to "અમન"
  - Changed "Srushti" to "સૃષ્ટિ"
  - Transliterated "aap", "sahit", "amari" to "આપ", "સહિત", "અમારી" (and joined "સહપરિવાર").

## Prompt 2 (2026-06-24)
- Fixed hydration mismatch error (`cz-shortcut-listen="true"`) caused by browser extensions injecting attributes into the `<body>`/`<html>` elements by adding the `suppressHydrationWarning` attribute to the `<html>` tag in [layout.tsx](file:///d:/SruMan/SruMan-engagement/src/app/layout.tsx).

## Prompt 3 (2026-06-24)
- Redesigned the main invitation section (`Couple.tsx`) into a clean, text-focused traditional kankotri layout (similar to printed cards).
- Created a new, dedicated `MeetCouple.tsx` section to display the couple's modern profile cards (photos, descriptions, taglines, and interactive likes) so the text in the invitation section remains clearly readable.
- Updated `src/app/page.tsx` to include `MeetCouple` in the scrolling navigation.
- Added translation keys `meetCouple` and `meetCoupleTitle` for English, Gujarati, and Hindi dictionaries in `src/data/translations.ts`.

## Prompt 4 (2026-06-24)
- Fixed hydration mismatch error on `<body>` element by adding `suppressHydrationWarning` to the `<body>` tag in [layout.tsx](file:///d:/SruMan/SruMan-engagement/src/app/layout.tsx), as browser extensions inject attributes like `cz-shortcut-listen` directly to it.

## Prompt 5 (2026-06-24)
- Removed snap-scrolling layout to allow the website to scroll normally.
- Updated main layout component wrapper heights in `page.tsx` from `h-full` to `min-h-screen` and removed `h-[100dvh]` overflow restrictions.
- Modified scrolling functions (`handleScroll`, `scrollToSection`, and `handleOpenInvitation`) to use global window scroll events and native `scrollIntoView()` targeting specific element IDs.

## Prompt 6 (2026-06-24)
- Reverted the Gujarati translation of `ringCeremony` back to English (`"Ring Ceremony"`) in `src/data/translations.ts` as requested.

## Prompt 7 (2026-06-24)
- Created the tasks file [tasks.md](file:///d:/SruMan/SruMan-engagement/tasks.md) containing empty tasks as specified by the global rule.

## Prompt 8 (2026-06-24)
- Updated the empty tasks format in [tasks.md](file:///d:/SruMan/SruMan-engagement/tasks.md) to use the format `[ ] 1`, `[ ] 2`, `[ ] 3`, `[ ] 4` according to the updated global rule.

## Prompt 9 (2026-06-24)
- Implemented Task 1: Applied alternating soft purple (`bg-gradient-to-br from-[#fbf8fd] via-[#f6edfa] to-[#eddff7]`) and champagne-gold (`bg-gradient-to-br from-[#fdfbf6] via-[#fcf6e8] to-[#f3ebd8]`) gradients for page sections in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx).
- Modified components ([Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx), [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx), and [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx)) to use transparent backgrounds.
- Implemented Task 2: Upgraded transitions in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx) with custom 3D perspective and Framer Motion variants (`slide`, `zoom`, `flip`, `cube`) to trigger smooth viewport animations when scrolling.
- Implemented Task 3: Moved the mantras panel higher in [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) by reducing top spacer size and Lord Ganesha card margins.

## Prompt 10 (2026-06-24)
- Rolled back Task 1 changes. Restored original, individual background colors for all section components ([Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx), [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx), and [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx)) and removed alternating background styles from [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx).

## Prompt 11 (2026-06-24)
- Redesigned and updated the traditional invitation card in [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx):
  - Widened the card width container (`max-w-4xl` -> `max-w-6xl`) and padding.
  - Increased font sizes across all headings, family details, couple names, and greetings for better visibility and impact.
  - Removed the narrow inner text constraints (`max-w-2xl` -> `max-w-5xl`) to prevent the last sentence and description lines from wrapping prematurely or unnecessarily across all languages.

## Prompt 12 (2026-06-24)
- Added language-specific responsive card and text layout spacing to prevent early text-wrapping issues on longer English translations:
  - Dynamically set the card max-width to `max-w-7xl` and text details max-width to `max-w-6xl` when the language is English (`en`).
  - Added `whitespace-nowrap` to the couple's names (`Chi. Srushti` & `Chi. Aman`) to prevent them from splitting/wrapping into two lines on all device screens.

## Prompt 13 (2026-06-24)
- Removed the third card (Dress Code) from the grid in [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx).
- Adjusted the remaining grid layout (`grid-cols-2` and `max-w-3xl`) to keep the two remaining cards perfectly centered and balanced.

## Prompt 14 (2026-06-24)
- Increased the size of the rotating ring image in [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx) from `w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24` to `w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40` to make it prominent and clearly visible.

## Prompt 15 (2026-06-24)
- Fixed horizontal layout overflow / right-side whitespace issue in mobile view:
  - Made the deity image sizes in the mobile header of [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) responsive (`w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28`) instead of using a fixed `w-28` width which exceeded mobile column sizes.
  - Added `overflow-x-hidden` to the global `<main>` container in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx) to safeguard against any animation or decoration overflows.

## Prompt 16 (2026-06-24)
- Resolved the scrolling chaining/hijack issue where scrolling would get stuck or stopped by removing the redundant `overflow-y-auto` and `no-scrollbar` classes from all section files: [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx), [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx), and [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx).
- This consolidates all vertical scrolling directly on the root window scroll context, removing nested scrollbars per section.

## Prompt 17 (2026-06-24)
- Simplified Framer Motion section transitions in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx):
  - Replaced the randomized 3D perspective animations (`cube`, `flip`, `zoom`, `slide`) with a uniform, elegant 2D fade-in-up transition.
  - Removed `perspective` inline styling from section containers.
  - This prevents dynamic layout recalculation lag during scroll events (which caused scrolling to stop/hiccup at section boundaries) and eliminates individual section overflow scrollbars.

- Removed custom page scrollbar styling and set scrollbars to be hidden globally in [globals.css](file:///d:/SruMan/SruMan-engagement/src/app/globals.css) using `scrollbar-width: none` and `::-webkit-scrollbar { display: none; }`. This removes the visible scrollbar on desktop views while keeping the page fully scrollable, achieving a clean edge-to-edge layout.

## Prompt 19 (2026-06-24)
- Optimized React rendering and scroll performance in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx):
  - Memoized the `sections` component list using `useMemo` so sections aren't recreated on every scroll-triggered component update.
  - Replaced dynamic scroll listener re-binding (which listened to `activeSection`) with a stable event listener using an `activeSectionRef` inside `handleScroll`.
  - Removed the unused `isOpen` dead state which caused secondary state update delays.
  - This eliminates rendering bottlenecks, frame drops, and layout lag at the boundaries of the sections, enabling a fluid, continuous single-page scrolling experience.

## Prompt 20 (2026-06-24)
- Fixed scroll interception issues during gate entrance in [PalaceGateEntry.tsx](file:///d:/SruMan/SruMan-engagement/src/components/PalaceGateEntry.tsx) and [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx):
  - Added `pointer-events-none` conditionally to the Gate entry overlay as soon as `isEntering` begins, allowing users to scroll immediately without the fading gate intercepting mouse or touch events.
  - Removed `select-none` from the main component's active classes when the gate is opened, preventing mobile browsers from locking touch scroll inputs.

## Prompt 21 (2026-06-24)
- Removed full-viewport screen height constraints (`min-h-screen`) and replaced slide-based alignments (`justify-between`) with standard flow vertical spacing (`gap-10 py-16`) in:
  - Section layout wrappers in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx) (for all sections).
  - [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx)
  - [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx)
  - [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx)
  - [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx)
  - `CreditsSection` inside [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx)
- This turns the presentation-slide layout into a standard, naturally flowing, continuous website document.

## Prompt 22 (2026-06-24)
- Fixed first-scroll pause/stop issue in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx):
  - Removed the `motion.div` `whileInView` animation wrappers (with `initial={{ opacity: 0, y: 30 }}`) from all section render blocks.
  - These wrappers started sections as invisible/shifted down and fired IntersectionObserver events on first scroll entry, causing React to re-calculate layout and producing a momentary stutter/pause before becoming smooth.
  - Sections now render immediately as part of normal document flow — no first-scroll jank.
  - Removed unused `motion` from the `framer-motion` import (only `AnimatePresence` remains, used for the gate entrance).


## Prompt 23 (2026-06-24)
- Added alternating soft background colors to all sections to visually distinguish section boundaries:
  - **Tone A** — soft lavender-purple `#f7f0fb` (from project's primary theme color `#5e1f70`): applied to [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx), [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx).
  - **Tone B** — soft champagne-gold `#fdf8ed` (from project's accent color `#d4af37`): applied to [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx), [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx).
  - Credits section retains its dark royal gradient (intentional footer styling).
  - Updated main `<main>` container in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx) background to `white` so section colors are cleanly visible.
