---
name: Komorebi Play
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad6ff'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2ff'
  surface-container: '#efebff'
  surface-container-high: '#e9e5ff'
  surface-container-highest: '#e3dfff'
  on-surface: '#181445'
  on-surface-variant: '#464555'
  inverse-surface: '#2d2a5b'
  inverse-on-surface: '#f3eeff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#684000'
  on-tertiary: '#ffffff'
  tertiary-container: '#885500'
  on-tertiary-container: '#ffd4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fcf8ff'
  on-background: '#181445'
  surface-variant: '#e3dfff'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
  kanji-hero:
    fontFamily: Noto Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
  kanji-hero-mobile:
    fontFamily: Noto Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  japanese-phrase:
    fontFamily: Noto Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 38px
  ruby-furigana:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-prominent:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts an engaging, encouraging, and friction-free learning environment for Vietnamese speakers mastering Japanese. The visual tone sits at the intersection of contemporary educational gaming and editorial clarity: tactile, playful, and rewarding without descending into visual clutter or childish chaos. 

The aesthetic is characterized by:
- **Playful Tactility:** Interactive elements carry physical, pushable affordances (subtle 3D extrusions via bottom borders) that give immediate tactile feedback upon interaction, evoking dopamine hits akin to physical tokens and tactile buttons.
- **Linguistic Clarity:** Structural layouts accommodate complex East Asian script hierarchies (Kanji, Kana, and Furigana ruby annotations) alongside tone-marked Vietnamese typography with zero glyph collision.
- **Calm Warmth:** A clean, paper-tinted neutral surface that reduces eye fatigue over prolonged 30-to-60-minute study sessions, elevated by vibrant reward accents for streaks, experience points, and progression mastery.

## Colors

The palette balances energetic focus with immediate pedagogical feedback. Color is strictly tied to cognitive state and achievement tracking:

- **Primary (`#4F46E5` - Royal Indigo):** The core driver for primary progress paths, active lesson modules, and decisive action triggers. Paired with a darker shade (`#3730A3`) for tactile bottom edges.
- **Secondary (`#10B981` - Emerald Success):** Reserved exclusively for positive reinforcement, correct exercise checks, streak continuation modals, and mastered review nodes. Bottom-edge anchor: `#059669`.
- **Tertiary (`#F59E0B` - Solar Amber):** Denotes currency, XP multipliers, daily streaks, and energy counters. Bottom-edge anchor: `#D97706`.
- **Destructive/Error (`#F43F5E` - Vivid Rose):** Signals incorrect answers, lost hearts, or critical reset alerts. Softened with a low-opacity tint (`#FFF1F2`) for background alerts to avoid punitive anxiety. Bottom-edge anchor: `#E11D48`.
- **Surfaces & Neutrals:**
  - Base Canvas: `#F8FAFC` (Cool crisp porcelain).
  - Surface Card: `#FFFFFF`.
  - Stroke / Border: `#E2E8F0` for resting cards, `#CBD5E1` for interactive containers.
  - Text Primary: `#0F172A` (Ink slate for sharp contrast across small diacritics and complex Kanji).
  - Text Secondary: `#64748B` (Muted slate for furigana and secondary metadata).

## Typography

The type system addresses two distinct linguistic requirements:
1. **Vietnamese Language UI & Prompts:** Utilizes **Plus Jakarta Sans**, chosen for its generous x-height, open apertures, and balanced handling of stacked tone marks (dấu hỏi, ngã, nặng, sắc, huyền) without vertical clipping.
2. **Japanese Orthography:** Falls back to **Noto Sans JP** / system Japanese fonts with prioritized line-height allowance for `<ruby>` and `<rt>` tags. Japanese prompt typography must enforce explicit line heights (minimum 1.6 to 1.8x) to ensure furigana never overlaps adjacent sentences.

### Hierarchy & Script Pairing Rules
- When Kanji is displayed for quiz interaction, it retains a distinct font weight (Bold 700) and optical isolation from Vietnamese translations.
- Vietnamese prompts are rendered in Medium (500) to SemiBold (600) to keep cognitive focus balanced between source and target languages.
- Furigana text uses `ruby-furigana` centered directly over its base kanji token, colored with `#64748B` to keep it visually subordinate until specifically referenced by the learner.

## Layout & Spacing

The layout is architected around an interactive centralized path (lesson map or quiz frame) constrained for ergonomics:

- **Desktop (>= 1024px):** Fixed max-width workspace centered at `640px` for lesson flows, or a 12-column responsive grid with a sticky `280px` navigation sidebar for the main dashboard. Inner gutters scale to `2rem`.
- **Tablet (768px - 1023px):** Fluid layout flanked by `2rem` outer margins. Interactive panels stretch symmetrically within an `8-column` structure.
- **Mobile (< 768px):** Single-column vertical stack with `1rem` edge margins and sticky bottom navigation / confirmation bars. Interactive options span full available width with a minimum touch height of `52px`.

### Spacing Rhythm
- **Component Padding:** Standard cards utilize `space-lg` (`1.5rem`) on desktop and `space-md` (`1rem`) on mobile.
- **Vertical Chunking:** Spacing between Japanese study cards, ruby annotation blocks, and multiple-choice options follows strict multiples of `8px` (`0.5rem`, `1rem`, `1.5rem`).

## Elevation & Depth

This design system avoids blurry, floating ambient drop-shadows in favor of **isometric tactile extrusion**. Depth is communicated through structural lines and solid bottom-stroke offsets:

- **Level 0 (Flat / Canvas):** Surface color `#F8FAFC`, zero shadow, flush with background. Used for progress tracks and inactive review tiles.
- **Level 1 (Card & Quiz Tile Resting):** `#FFFFFF` background, solid border `2px solid #E2E8F0`, with a solid bottom-border extrusion of `4px solid #CBD5E1`. No Gaussian blur.
- **Level 2 (Chunky Interactive / Primary Buttons):** Filled with solid color, bordered with a darker tone shifted `4px` straight down (`0px 4px 0px 0px [dark-tint]`).
- **Level 2 Pressed (Active State):** Translates `2px` downwards on the Y-axis; bottom border reduces from `4px` to `2px`. Provides immediate mechanical feedback.
- **Level 3 (Feedback Modals & Sheets):** Slides over content with a high-contrast boundary (`2px solid #0F172A`) accompanied by an ultra-crisp offset shadow: `0px 10px 25px -5px rgba(15, 23, 42, 0.08)`.

## Shapes

The form language is organic and approachable. Rounded corners soften dense Kanji strokes and make UI elements invite physical touch:

- Standard structural cards, option buttons, and quiz blocks use `rounded-lg` (`1rem` / `16px`).
- Minor interactive components (chips, badges, furigana hover containers) utilize `rounded` (`0.5rem` / `8px`).
- Streak indicators, coin counters, and status tags utilize full pill configurations (`9999px`).
- Borders are consistently set to `2px` across all card surfaces and interaction states to maintain crisp geometric definition on high-density mobile screens.

## Components

### Buttons
- **Primary 3D Action:** Height `52px`, radius `16px`, background `#4F46E5`, bottom border `4px solid #3730A3`, text `#FFFFFF` in `label-prominent`. On hover, slightly brightens. On `:active`, transforms `translateY(2px)` with bottom border `2px solid #3730A3`.
- **Success Action (Submit/Continue):** Background `#10B981` with bottom border `#059669`.
- **Secondary / Outline:** Background `#FFFFFF`, border `2px solid #E2E8F0`, bottom border `4px solid #CBD5E1`, text `#0F172A`.

### Quiz Option Tiles & Flashcards
- **Resting:** Multi-line vertical stack with `1rem` padding, background `#FFFFFF`, border `2px solid #E2E8F0`, bottom edge `4px solid #CBD5E1`. Kanji centered in `kanji-hero` or `japanese-phrase`.
- **Selected:** Border `#4F46E5`, bottom edge `4px solid #3730A3`, background `#EEF2FF`.
- **Validated Correct:** Border `#10B981`, bottom edge `4px solid #059669`, background `#ECFDF5`.
- **Validated Incorrect:** Border `#F43F5E`, bottom edge `4px solid #E11D48`, background `#FFF1F2`.

### Japanese Ruby / Furigana Group
- Container element wrapping base kanji tokens.
- Furigana sits comfortably above Kanji with `line-height: 1.2` and text-align `center`.
- Supports toggleable "Hint Mode": Furigana opacity defaults to `0` (or `0.2` watermarked) and transitions to `1` on card hover or tap.

### Badges & Pill Chips
- Height `28px` to `32px`, pill radius (`9999px`), internal horizontal padding `12px`.
- **Streak Pill:** Background `#FEF3C7`, text `#D97706`, accompanied by solid mini flame icon.
- **JLPT Level Tag:** Background `#F1F5F9`, border `1.5px solid #CBD5E1`, text `#475569`, font size `12px`, uppercase bold.

### Input Fields (Romaji & Meaning Entry)
- Generous text field with height `56px`, corner radius `16px`, background `#F8FAFC`, border `2px solid #E2E8F0`. Focus state shifts background to `#FFFFFF`, border color to `#4F46E5`, with zero default browser outline glow.
- Includes clear phonetic placeholder indicators tailored for Vietnamese Telex/VNI inputs.

### Bottom Feedback Drawer
- Fixed-bottom result modal that anchors dynamically after verification.
- **Success variant:** Background `#ECFDF5`, top border `2px solid #A7F3D0`, containing prompt feedback icon, celebration microcopy in Vietnamese ("Chính xác!"), and primary emerald continue button.
- **Incorrect variant:** Background `#FFF1F2`, top border `2px solid #FECDD3`, displaying correct answer breakdown with furigana breakdowns.