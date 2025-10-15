---
description: AI rules derived by SpecStory from the project AI interaction history
globs: *
---

## &lt;headers/&gt;

## TECH STACK

*   React
*   react-dom
*   react-icons
*   @types/react
*   @types/react-dom

## PROJECT DOCUMENTATION & CONTEXT SYSTEM

*   Plugins from `https://claudecodeplugins.net/` are instructions/prompts to be manually added to the project, not installable plugins. Store plugin content in `.claude/plugins.md` or system instructions.

## CODING STANDARDS

*   **Buttons**: All buttons must have a `type` attribute explicitly set (e.g., `type="button"`, `type="submit"`, `type="reset"`).
*   **Accessibility**: All buttons must have discernible text. When text is not directly present, provide an `aria-label` attribute to describe the button's purpose.
*   `'use client'` directive must be placed at the top of each client component file, before any other expressions or imports.
*   Ensure components are separated into distinct files to avoid build errors related to the `"use client"` directive.
*   Components must be separated into distinct files. Avoid mixing multiple components in a single file. Every component must be in its own distinct file.

## WORKFLOW & RELEASE RULES

## DEBUGGING

## ERROR HANDLING