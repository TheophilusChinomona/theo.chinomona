# Feature Specification: Public-Facing Frontend

**Feature Branch**: `1-public-frontend`
**Created**: 2025-11-19
**Status**: Draft
**Input**: User description: "Create a detailed Spec file for the Public Frontend (Phase 1). **Context:** - Use `context7` to look up "React Router v6 data loading" to ensure our routing strategy is current. **Requirements:** 1. **Hero Section:** Modern typography, bento-grid layout for social links. 2. **Projects Grid:** Cards fetching data from Firestore `projects` collection. 3. **Contact Form:** Standard inputs. 4. **Verification Strategy (Playwright):** - Include a section in the Spec called "Verification Plan". - List 3 critical User Flows that we will test using Playwright MCP later (e.g., "User fills out contact form -> Toast appears")."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Homepage (Priority: P1)
As a visitor (e.g., recruiter, potential client), I want to see a visually appealing landing page with a brief introduction and links to social profiles, so I can quickly understand who the owner is and where to find more information.

**Why this priority**: This is the first impression of the portfolio and serves as the main entry point for all other interactions.

**Independent Test**: The homepage can be loaded and visually verified. The hero section content and social links are present and correct.

**Acceptance Scenarios**:
1.  **Given** a user navigates to the root URL, **When** the page loads, **Then** the Hero Section is prominently displayed.
2.  **Given** the Hero Section is visible, **When** the user inspects it, **Then** it contains a professional heading, a brief bio, and a bento-grid layout of social media links (e.g., GitHub, LinkedIn).

---

### User Story 2 - Browse Projects (Priority: P1)
As a potential client or hiring manager, I want to browse a grid of completed projects, so I can evaluate the quality and scope of the owner's work.

**Why this priority**: The project showcase is the most critical component for demonstrating skills and experience.

**Independent Test**: The project grid can be viewed, and it correctly displays project information. The underlying data fetching can be mocked and verified.

**Acceptance Scenarios**:
1.  **Given** a user is on the homepage, **When** they view the projects section, **Then** a grid of project cards is displayed.
2.  **Given** the project grid is visible, **When** the data is loaded, **Then** each card displays a project's title, a brief description, and a thumbnail image.
3.  **Given** a user hovers over a project card, **When** they do so, **Then** links to the live site and/or source code repository become visible.

---

### User Story 3 - Make Contact (Priority: P2)
As a recruiter or potential collaborator, I want to send a message through a contact form, so I can initiate a conversation without having to open my own email client.

**Why this priority**: Provides a direct line of communication, which is a primary goal of a portfolio.

**Independent Test**: The contact form can be filled out and submitted. A successful submission can be verified by observing a confirmation message.

**Acceptance Scenarios**:
1.  **Given** a user is on the site, **When** they navigate to the contact section, **Then** a form with fields for "Name", "Email", and "Message" is displayed.
2.  **Given** the user has filled out the form with valid data, **When** they click the "Submit" button, **Then** a success message (e.g., a toast notification) appears, and the form is cleared.
3.  **Given** the user submits the form with invalid or missing data, **When** they do so, **Then** clear, inline error messages are displayed next to the respective fields.

### Edge Cases
- What happens if the Firestore `projects` collection is empty or fails to load? The system should display a user-friendly message like "Could not load projects at this time." instead of crashing.
- What happens if the contact form submission fails on the backend? The system should show a user-friendly error message, like "Sorry, your message could not be sent. Please try again later."

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: The system MUST display a Hero Section with modern typography and a bento-grid of social media links.
- **FR-002**: The system MUST display a grid of project cards.
- **FR-003**: The project data for the grid MUST be loaded from the `projects` collection in Firestore using the React Router v6 `loader` pattern to ensure data is available before the component renders.
- **FR-004**: The system MUST provide a contact form with "Name" (text), "Email" (email), and "Message" (textarea) inputs.
- **FR-005**: The system MUST validate the contact form inputs (e.g., name and message are not empty, email is a valid format).
- **FR-006**: The system MUST provide clear visual feedback to the user upon successful or failed contact form submission.

### Key Entities *(include if feature involves data)*
- **Project**: Represents a single portfolio item.
  - Attributes: `title` (string), `description` (string), `imageUrl` (URL), `repoUrl` (URL, optional), `liveUrl` (URL, optional), `tags` (array of strings).
- **ContactSubmission**: Represents a single message submitted via the contact form.
  - Attributes: `name` (string), `email` (string), `message` (string), `submittedAt` (timestamp).

## Verification Plan *(mandatory)*
This section outlines the critical user flows that will be tested using Playwright to ensure end-to-end functionality and prevent visual regressions.

1.  **Critical Flow 1: Project Data Loading and Display**
    - **Test:** Navigate to the homepage and verify that the project grid populates with the expected number of cards from a mocked Firestore response. Assert that the content within the cards (title, description) is correct.
2.  **Critical Flow 2: Contact Form Submission**
    - **Test:** Fill out the contact form fields, click submit, and assert that the success toast notification appears. The test should also verify that the form fields are cleared after successful submission.
3.  **Critical Flow 3: Responsive Design Check**
    - **Test:** Load the homepage across multiple viewport sizes (mobile, tablet, desktop). For each size, take a Playwright snapshot and verify that the main layout components (Hero, Projects Grid) render correctly and without visual overlap or broken elements.

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: First Contentful Paint (FCP) for the homepage must be under 1.8 seconds on a simulated mobile device with a 4G connection.
- **SC-002**: 98% of users who attempt to submit the contact form can do so successfully without encountering a backend error.
- **SC-003**: The visual design must pass automated Playwright snapshot tests for key pages across mobile (390px), tablet (768px), and desktop (1440px) viewports with zero regressions.
