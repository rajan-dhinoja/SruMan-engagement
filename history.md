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

## Prompt 24 (2026-06-24)
- Redesigned [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx) for proper photo and text visibility:
  - **Photos**: Increased image container to `h-[26rem] sm:h-[28rem]`, `object-contain object-bottom` so figures fill the frame. Themed gradient photo backdrops — lavender for Srushti, warm champagne for Aman.
  - **Fade**: Soft `from-white` gradient overlay at image bottom blends into card info area.
  - **Card**: Changed to solid `bg-white` (was semi-transparent). Stronger border `border-[#d4af37]/30` and shadow.
  - **Text**: Description increased from `text-xs` to `text-sm`, `text-stone-600` → `text-stone-700`. Fixed role label from invalid `text-purple-650` to `text-purple-700`. Tagline set to `text-[#5e1f70]`.
  - **Layout**: Gold divider between role and tagline. Cards slide in from sides instead of bottom.

## Prompt 25 (2026-06-24)
- Removed the romance tagline (featuring translation keys `couple.foreverBeginning` and `couple.gettingEngagedDate`) from [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) and added the SruMan logo image (`/logos/sruman-logo.png`) in its place.

## Prompt 26 (2026-06-24)
- Removed large scroll buffer top/bottom spacers and reduced padding in all sections to transition the layout from slides/presentation view to a naturally flowing website style:
  - Modified [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx): Removed top & bottom spacer divs, changed padding to `py-8 px-4`.
  - Modified [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx): Removed top spacer div, changed padding to `py-8 px-4`.
  - Modified [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx): Removed top & helper spacer divs, changed padding to `py-8 px-4`.
  - Modified [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx): Removed top spacer div, changed padding to `py-8 px-4`.
  - Modified [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx): Removed top spacer div, changed padding to `py-8 px-4`.
  - Modified [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx): Removed top spacer div, changed padding to `py-8 px-4`.
  - Modified [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx): Removed top spacer div, changed padding to `py-8 px-4`.
  - Modified [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx): Reduced `CreditsSection` padding to `py-10 md:py-16`.

## Prompt 27 (2026-06-24)
- Redesigned and enlarged [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx):
  - Increased card maximum width container from `max-w-3xl` to `max-w-5xl` and padding.
  - Increased font sizes for Nimantrak title, grandparents, parents, uncle/aunts, relatives, and ending greeting texts.
  - Increased font sizes and spacing for the "Nivas Sthan" (Residence) section (title, Girikandra name, address, and mobile number) to match the prominent kankotri style.
  - Removed remaining bottom spacer div from the component.

## Prompt 28 (2026-06-24)
- Removed vertical space between the section header title ("Nimantrak") and the traditional separator line by changing `mb-2` to `mb-0` on the title and changing the line's margin to `mt-1 mb-6` in [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx).

## Prompt 29 (2026-06-24)
- Removed remaining bottom spacer divs (e.g., `<div className="h-20 sm:h-28 flex-shrink-0 w-full pointer-events-none" />`) from the remaining sections: [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx), and [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx). This completely cleans up any trailing empty gaps at the bottom of the section flows.

## Prompt 30 (2026-06-24)
- Merged the 6th section (Venue & Direction) into the 5th section ([EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx)) and redesigned the layout to make it highly attractive, interactive, and cohesive:
  - Rebuilt [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx) to feature the Countdown Card (with custom glassmorphism and gold ornaments) followed by a 12-column grid.
  - Placed the Date & Time card on the left (5/12 columns) with Calendar actions.
  - Placed the Venue details card on the right (7/12 columns) featuring copy-address, view-maps navigation buttons, and an embedded interactive Google Map frame at the bottom.
  - Removed [Venue.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Venue.tsx) and cleaned up `Venue` imports and sections references in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx).
  - Changed [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx) background color to Tone B (`bg-[#fffdf7]`) so section backgrounds alternate perfectly.

## Prompt 31 (2026-06-24)
- Added the venue hall image showcase (`/images/venue_hall.jpg`) into the Venue details card in [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx).

## Prompt 32 (2026-06-24)
- Redesigned and aligned all main section titles and separator lines to match the kankotri-themed screenshot style (`:: Title ::` above a horizontal diamond line `— ♦ —`):
  - Modified [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx): Replaced the gold bar with the purple diamond separator line, increased the title font size to `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`, added `::` wrapping, and updated color to `#5e1f70`.
  - Modified [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx): Replaced the gold bar with the purple diamond separator line, increased the title font size to `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`, added `::` wrapping, and updated color to `#5e1f70`.
  - Modified [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx): Replaced the gold bar with the purple diamond separator line, increased the title font size to `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`, added `::` wrapping, and updated color to `#5e1f70`.

## Prompt 33 (2026-06-24)
- Redesigned the "Nivas Sthan" (Residence) sub-section header and separator line in [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx) to match the main sections title style:
  - Increased font size to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold` with red color (`#b02a3a`).
  - Swapped the multi-diamond line with the new matching single diamond gradient line separator in red (`#b02a3a`).

## Prompt 34 (2026-06-24)
- Implemented Task 1: Redesigned the Welcome (first) section title and logo in [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) for enhanced aesthetics:
  - Upgraded the "Ring Ceremony" heading with a beautiful purple-gold linear gradient (`bg-gradient-to-r from-[#5e1f70] via-[#a3449c] to-[#d4af37]`) and drop shadow.
  - Wrapped the "(શ્રીફળ વિધિ)" sub-heading with thin decorative gold lines on both sides.
  - Enclosed the SruMan Logo inside a floating, glassmorphic circular monogram crest featuring a slowly rotating dashed gold ring border, a pulsating inner gradient light, and interactive tap/hover scale animations.

## Prompt 35 (2026-06-24)
- Redesigned the merged Event Details & Venue section layout in [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx) to clearly and beautifully structure the timeline, date/time details, venue name, address, and interactive map:
  - **Date & Time Card**: Restructured into a clean vertical timeline/schedule list (displaying Auspicious Day, Date, and Time rows) complete with distinctive icons and clear labels, followed by the Calendar button.
  - **Venue Card**: Clearly structured with venue hall image, explicit label headings for Venue Name and Location Address, and integrated navigation and copy buttons.
  - **Interactive Map**: Displayed in its own dedicated, explicitly-labeled sub-header block directly below the venue details for maximum clarity and ease of use.

## Prompt 36 (2026-06-24)
- Optimized [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx) based on user feedback:
  - Added a clear subtitle to the countdown card explaining exactly when the auspicious event begins (Tuesday, August 18, 2026 at 9:00 AM).
  - Modified the main layout grid to use `items-start` instead of `items-stretch` so the Date & Time card is no longer vertically stretched (preventing it from looking "too long and weird").
  - Dynamically configured all text labels (Auspicious Day, Date, Time, Venue Name, Address, Map, Buttons) in a localized dictionary (`labels`) to prevent mixing English and Gujarati translated words inside brackets.

## Prompt 37 (2026-06-24)
- Relocated the interactive Google Map in [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx) to be side-by-side (on the right) of the Venue Details card on desktop viewports.
- Changed Card 1 (Date & Time) column span from `lg:col-span-5` to `lg:col-span-4` and Card 2 (Venue & Map) from `lg:col-span-7` to `lg:col-span-8` to optimize spacing.
- Converted Card 2 into a nested grid layout (`grid grid-cols-1 md:grid-cols-2`) where venue details are positioned in the left column (with a custom border separating them) and the map iframe is embedded inside the right column.

## Prompt 38 (2026-06-24)
- Replaced the word "શોધખોળ" (explore/exploration) with "આમંત્રણ પત્રિકા જોવા" (to view invitation card) inside [translations.ts](file:///d:/SruMan/SruMan-engagement/src/data/translations.ts) and [Hero.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Hero.tsx) to provide a proper, traditional Gujarati scroll instruction.

## Prompt 39 (2026-06-24)
- Repositioned the DOTR company credit card from the absolute bottom of the gate page viewport (`absolute bottom-6`) to a centered position directly below the "Open Gate" button in [PalaceGateEntry.tsx](file:///d:/SruMan/SruMan-engagement/src/components/PalaceGateEntry.tsx).
- Redesigned the card with a clean, premium white background container for the logo, gold borders, and higher-contrast typography to ensure excellent readability and visibility across all mobile and desktop screens.

## Prompt 40 (2026-06-24)
- Changed the "Auspicious Day" / "શુભ પ્રસંગ" / "शुभ प्रसंग" label keys to "Tithi" / "તિથિ" / "तिथि" respectively within the labels config in [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx) to align with the Shravan Sud-6 value.

## Prompt 41 (2026-06-24)
- Repositioned the DOTR company credit card to `top: "66.5%"` relative to the palace container in [PalaceGateEntry.tsx](file:///d:/SruMan/SruMan-engagement/src/components/PalaceGateEntry.tsx). This aligns the card directly above the first stair at the bottom end of the decorative royal doors.

## Prompt 42 (2026-06-24)
- Changed the section header title, subtitle, and separator colors from purple (`#5e1f70`) to a traditional deep kankotri maroon-red (`#8a1525`) on all sections sitting on the warm yellow/off-white background (`bg-[#fffdf7]`), namely [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx) and [Blessings.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Blessings.tsx).
- Increased the size of the SruMan logo inside the floating monogram crest in [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) by changing its container inset from `inset-4` to `inset-2.5` and using a standard `<img>` wrapper with `w-[82%] h-[82%] object-contain` for precise dimension scaling.

## Prompt 43 (2026-06-24)
- Zoomed in and enlarged the visible monogram logo in [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) using `scale-[1.35]` (and `hover:scale-[1.42]`) CSS transform to crop out the empty transparent margins built into the image file.
- Scaled down the "Ring Ceremony" heading text dynamically on mobile viewports (changed from `text-7xl` to `text-5xl xs:text-6xl sm:text-8xl md:text-9xl`) in [Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx) to prevent it from clipping or wrapping awkwardly.
- Added `whitespace-nowrap` to the DOTR credit links (including website, email, and the phone number `+91 8200965524`) in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx) to prevent numbers and text strings from breaking into a new line on smaller mobile screens.

## Prompt 44 (2026-06-24)
- Localized the static text blocks in the Credits / Footer section (`CreditsSection` inside [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx)) using the `useLanguage` translation hook keys.
- Added localized translations for "Thank You For Visiting", "Digital Invitation Crafted By", and "INSHORT (NICKNAME):" for English, Gujarati, and Hindi dictionaries in [translations.ts](file:///d:/SruMan/SruMan-engagement/src/data/translations.ts).
- Checked off the localization task in [tasks.md](file:///d:/SruMan/SruMan-engagement/tasks.md).

## Prompt 45 (2026-06-24)
- Fixed logo clipping/cutting issues across the application ([Welcome.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Welcome.tsx), [PalaceGateEntry.tsx](file:///d:/SruMan/SruMan-engagement/src/components/PalaceGateEntry.tsx), and `CreditsSection` in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx)):
  - Removed `overflow-hidden` from the circular logo container elements to allow the transparent PNG edges (like butterfly wings and leaves) to overlay cleanly instead of being cut off by the border.
  - Adjusted logo image scales to `scale-[1.18]` (with a smooth hover transition to `scale-[1.26]`) so that the logo contents fit perfectly within the circles.
- Marked all pending tasks as completed in [tasks.md](file:///d:/SruMan/SruMan-engagement/tasks.md).

## Prompt 46 (2026-06-24)
- Redesigned the Date, Time & Tithi Card (Card 1) inside [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx): Replaced the top-clumped layout structure by distributing the timeline items vertically using `flex-grow` and `justify-evenly`. This utilizes the stretched card height evenly and removes the empty white gap at the bottom of Card 1.
- Removed scroll animations (`whileInView` and initial offset delays) across major page sections ([Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx), [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx), [EventDetails.tsx](file:///d:/SruMan/SruMan-engagement/src/components/EventDetails.tsx), [Couple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Couple.tsx), and `CreditsSection` in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx)) so that all invitation and event details render directly and instantly upon scrolling.
- Disabled music and audio components: Removed the Floating Audio Controller button and synthesizer loops from [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx), and disabled the door chime sound effect in [PalaceGateEntry.tsx](file:///d:/SruMan/SruMan-engagement/src/components/PalaceGateEntry.tsx).
- Removed the bride and groom role labels ("Bride-to-be" / "કન્યા" / "कन्या" and "Groom-to-be" / "વરરાજ" / "वरराज") from the profiles card inside [MeetCouple.tsx](file:///d:/SruMan/SruMan-engagement/src/components/MeetCouple.tsx).
- Localized the developer credits phone number link using the `formatNumber()` translator function in [page.tsx](file:///d:/SruMan/SruMan-engagement/src/app/page.tsx).
- Changed grandparents' name text and ending message text colors from purple to standard stone-dark styling (`text-stone-850`/`text-stone-800`) in [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx) to match the other content cards.
- Marked all new tasks as completed in [tasks.md](file:///d:/SruMan/SruMan-engagement/tasks.md).

## Prompt 47 (2026-06-24)
- Removed `font-bold` from the grandparents name row in [Nimantrak.tsx](file:///d:/SruMan/SruMan-engagement/src/components/Nimantrak.tsx). The grandparents' names now render at normal (`font-semibold` inherited from the parent container) weight, matching the visual style of the rest of the invitation card.
