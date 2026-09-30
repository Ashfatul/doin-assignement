# ByteSpace

A frontend implementation of the ByteSpace e-learning platform design from Figma. Built with Next.js App Router and Tailwind CSS.

## Overview
This project is a pixel-perfect conversion of the provided Figma designs. It includes the main landing page, authentication pages (login/register), and a custom 404 page.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## Available Pages
- **Home** (`/`): The main landing page.
- **Register** (`/register`): The user registration page.
- **Login** (`/login`): The user login page.
- **404 Not Found**: A custom error page for undefined routes.

## Project Structure
```text
.
├── app/                  # Next.js App Router setup
│   ├── globals.css       # Tailwind v4 configuration & global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   ├── not-found.tsx     # Custom 404
│   ├── login/            # Login route
│   └── register/         # Register route
├── components/           
│   ├── layout/           # Shared layouts (like AuthLayout)
│   ├── sections/         # Main page sections (Hero, Courses, Footer, etc.)
│   └── ui/               # Smaller reusable components
├── public/               
│   └── images/           # Static image assets
└── package.json          
```

## Setup & Development

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it.

## Build
```bash
npm run build
npm run start
```
