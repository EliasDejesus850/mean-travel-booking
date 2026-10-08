# MEAN Travel Booking Platform (Travlr)

A full-stack travel booking app built with the MEAN stack. A customer-facing site (Express + Handlebars) lists trips, and an Angular single-page admin app lets an administrator add and edit them through a RESTful API backed by MongoDB.

## Tech Stack
MongoDB · Express · Angular · Node.js · Mongoose · Handlebars (HBS) · JWT (client-side) · Postman

## Project Structure
| Folder | Purpose |
|---|---|
| `app_server/` | Customer-facing site: Express routes, controllers, and Handlebars views (MVC) |
| `app_api/` | REST API: Mongoose trip model, controllers, routes, and database seeding |
| `app_admin/` | Angular admin SPA: trip listing, add/edit forms, login flow, auth service, JWT HTTP interceptor |
| `data/` | Seed data (`trips.json`) |

## Features
- Browse trips on a server-rendered site built from JSON data
- REST API for trips: `GET /api/trips`, `GET /api/trips/:tripCode`, `POST /api/trips`, `PUT /api/trips/:tripCode`
- Angular admin app with reusable components (trip cards, navbar), add/edit trip forms, and a login flow
- HTTP interceptor that attaches a JWT bearer token to API requests

## Running Locally
1. Start MongoDB locally. The app connects to `mongodb://127.0.0.1/travlr` (set `DB_HOST` to override).
2. Install dependencies and seed the database:
```
   npm install
   node app_api/models/seed.js
```
3. Start the Express server at http://localhost:3000:
```
   npm start
```
4. In a second terminal, start the admin app at http://localhost:4200:
```
   cd app_admin
   npm install
   npm start
```
## Design Decisions
**Why Express + Handlebars and an Angular SPA?** The Express site delivers server-rendered pages with full reloads, while the Angular SPA uses component-based architecture and client-side routing for a more responsive admin experience.

**Why MongoDB?** Its document model matches the JSON exchanged between client and server, and it allows flexible schemas for evolving data like trips.

**Reusable components:** Repeated UI such as trip cards and the navigation bar are Angular components, which reduces duplication and keeps the UI consistent.

## Status and Limitations
This version covers the trip API and admin UI. Server-side authentication endpoints and route protection are not implemented in this snapshot, and the API does not yet support deleting trips.

## What I Learned
Building a full-stack application end to end: structuring an MVC backend, designing a REST API, connecting Angular to it through services, and managing client-side authentication state.
