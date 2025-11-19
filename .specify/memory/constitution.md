<!--
SYNC IMPACT REPORT
- Version: none -> v1.0.0
- Change: Initial constitution established.
- Added Sections:
  - Principle I: Modern React 18 Patterns
  - Principle II: Strict Firebase v9+ Modular SDK
  - Principle III: Pure & Themed Tailwind CSS
  - Principle IV: Headless Admin CMS
  - Principle V: Visual Regression Testing
  - Development Workflow
  - Governance
- Templates Requiring Updates:
  - [ ] `.specify/templates/plan-template.md` (Review for alignment)
  - [ ] `.specify/templates/spec-template.md` (Review for alignment)
  - [ ] `.specify/templates/tasks-template.md` (Review for alignment)
- Follow-up TODOs: None
-->
# Developer Portfolio Constitution

## Core Principles

### I. Modern React 18 Patterns
**Rule:** All frontend code MUST use React 18 functional components with Hooks. Class components are forbidden.
**Rationale:** To maintain a modern, performant, and consistent codebase that leverages the latest React features for better state management, lifecycle control, and performance through concurrency.
**Implementation:**
- Utilize `React.lazy` and `<Suspense>` for code-splitting and displaying loading states to improve initial page load.
- Employ the `useTransition` hook to prevent heavy, non-urgent UI updates from blocking user input, ensuring the interface remains responsive.
- Application entry point MUST use `createRoot` to enable concurrent rendering features.

### II. Strict Firebase v9+ Modular SDK
**Rule:** All interactions with Firebase services (Auth, Firestore, Storage) MUST use the v9+ modular (functional) API.
**Rationale:** The v9 SDK enables tree-shaking, which dramatically reduces the application's bundle size. Its functional style is more explicit and aligns with modern JavaScript practices. The `compat` library is strictly forbidden for new development.
**Implementation:**
- **DO:** `import { getDoc, doc } from 'firebase/firestore';`
- **DO NOT:** `import firebase from 'firebase/app';` or `db.collection(...)`.
- All Firebase initialization and service retrieval must follow the modular pattern.

### III. Pure & Themed Tailwind CSS
**Rule:** All styling MUST be implemented using Tailwind CSS utility classes directly in the JSX. Custom CSS files are forbidden except for global base styles or complex animations.
**Rationale:** To maintain a single source of truth for styling, maximize reusability, and prevent the proliferation of disconnected CSS files. This ensures consistency and simplifies maintenance.
**Implementation:**
- Dark mode is a core feature and MUST be implemented using Tailwind's `dark:` variant with the `selector` strategy.
- A manual toggle control MUST be implemented to switch between light and dark themes, with the user's preference persisted in `localStorage`.
- All colors, fonts, and spacing should be defined as part of the theme in `tailwind.config.js` to ensure design consistency.

### IV. Headless Admin CMS
**Rule:** A dedicated, secure admin dashboard MUST be available at the `/admin` route for content management.
**Rationale:** To provide a clear separation of concerns between the public-facing portfolio/blog and the backend content management interface. This improves security and developer experience.
**Implementation:**
- The `/admin` route and its children must be protected and require Firebase Authentication.
- The admin dashboard will serve as a custom Content Management System (CMS) for managing blog posts, project entries, and contact form submissions.

### V. Visual Regression Testing
**Rule:** All visual components and page layouts MUST be covered by Playwright snapshot tests.
**Rationale:** To prevent unintended visual regressions and ensure a consistent, high-quality user experience across code changes. Automated visual verification is non-negotiable for UI stability.
**Implementation:**
- Playwright tests MUST be integrated into the CI/CD pipeline.
- Any pull request modifying a UI component must include corresponding updates to the Playwright snapshots.
- Snapshots should be captured for both light and dark themes to verify theme-specific styling.

## Development Workflow

All new features or significant changes must follow a structured development process:
1.  **Specification:** A clear specification must be defined, outlining the feature's scope, requirements, and technical approach.
2.  **Implementation:** Code must adhere strictly to the principles defined in this constitution.
3.  **Testing:** Besides Playwright tests, unit and integration tests should be written for critical business logic.
4.  **Review:** All code must be reviewed by at least one other team member before merging.

## Governance

This Constitution is the supreme source of truth for all engineering and design decisions on this project. It supersedes any other practice or convention.
- **Compliance:** All code reviews MUST verify compliance with these principles. Deviations are not permitted without a formal amendment.
- **Amendments:** Changes to this constitution require a documented proposal, discussion, and formal approval. Approved amendments must increment the version number according to Semantic Versioning.
  - **MAJOR:** Incompatible changes or removal of a core principle.
  - **MINOR:** Adding a new principle or a non-breaking expansion of an existing one.
  - **PATCH:** Clarifications, typo fixes, or minor wording changes.

**Version**: 1.0.0 | **Ratified**: 2025-11-19 | **Last Amended**: 2025-11-19