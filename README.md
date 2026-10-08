## Design Decisions
**Why Express + Handlebars and an Angular SPA?** The Express site delivers server-rendered pages with full reloads, while the Angular SPA uses component-based architecture and client-side routing for a more responsive admin experience.

**Why MongoDB?** Its document model matches the JSON exchanged between client and server, and it allows flexible schemas for evolving data like trips.

**Reusable components:** Repeated UI such as trip cards and the navigation bar are Angular components, which reduces duplication and keeps the UI consistent.

## Status and Limitations
This version covers the trip API and admin UI. Server-side authentication endpoints and route protection are not implemented in this snapshot, and the API does not yet support deleting trips.

## What I Learned
Building a full-stack application end to end: structuring an MVC backend, designing a REST API, connecting Angular to it through services, and managing client-side authentication state.
