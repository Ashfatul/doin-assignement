<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions: Figma to HTML/Next.js

## 1. Project Overview
- **Type**: Figma-to-HTML implementation using **Next.js** (App Router), **React**, **TypeScript**, and **Tailwind CSS**.
- **Source of Truth**: Public Figma link provided by the user.
- **Goal**: Deliver a production-ready, clean, pixel-perfect, and fully responsive web application directly reflecting the design.

---

## 2. Design Fidelity & Pixel Perfection
- **Pixel-Perfect Accuracy**:
  - Replicate the Figma design precisely down to exact margins, paddings, dimensions, border radii, shadows, and opacities.
- **Design Tokens**:
  - **Colors**: Maintain every exact color (hex, rgb, hsl, gradients). Never approximate or substitute color palettes.
  - **Typography**: Strictly follow specified font families, font weights, font sizes, line heights, and letter spacing.
  - **Floating Elements**: Carefully position all floating elements, tooltips, sticky navbars, badges, dropdowns, and modal dialogs with proper stacking contexts (`z-index`) and relative/absolute positioning.
- **Responsiveness from Day One**:
  - Build responsive layouts from the very start across all screen viewports (mobile, tablet, desktop, large displays).
  - Ensure zero layout breaks, no awkward wrapping, and eliminate any unwanted horizontal scrollbars (`overflow-x`).

---

## 3. Architecture & Code Structure (DRY & Modular)
- **Component-Driven Architecture**:
  - Break down the UI into small, modular, single-responsibility components.
  - Separate primitive UI building blocks (e.g., `components/ui/`) from composite section components (e.g., `components/sections/`).
- **DRY (Don't Repeat Yourself)**:
  - Reusable buttons, cards, typography components, inputs, and section layouts must be extracted into reusable components.
  - Centralize constants, navigation items, mock data, and configuration in dedicated utility or config files.
- **TypeScript Strictness**:
  - Ensure strict typing for all component props, data models, and event handlers.
  - Never use `any`.

---

## 4. Engineering Standards & Next.js Conventions
- **Server vs. Client Components**:
  - Default to React Server Components (RSC). Only mark components with `"use client"` when state, interactivity, or browser APIs are required.
- **Assets & Media**:
  - Use `next/image` for image optimization, setting explicit width/height or layout properties to avoid Cumulative Layout Shift (CLS).
  - Use SVGs for icons and logos to guarantee sharp rendering on all screen densities.
- **Code Cleanliness & Verification**:
  - Keep the codebase free of unnecessary boilerplate, unused imports, or unused template files.
  - Verify every change by ensuring `npm run build` and `npm run lint` compile without errors or warnings.

---

## 5. Collaboration & Process Guidelines
- **Ask First**:
  - If any design requirement, asset, interactive behavior, responsive breakpoint, or specification is ambiguous, **always ask the user first** before making assumptions.
- **Use Skills**:
  - Find and use specialized skills and tools whenever appropriate (e.g., UI inspection, web research, asset processing).
