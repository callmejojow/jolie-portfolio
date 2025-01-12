# Personal Portfolio Website

This repository contains the source code for my personal portfolio website built with Next.js using TypeScript. The project showcases my professional background, hobbies, and creative work. It fulfills the requirements of my term project for CS601 Web Application Development.

## Features

### General Features
- **Responsive Design:** Fully responsive layout, optimized for both desktop and mobile devices.
- **HTML5 API Usage:** Includes Canvas API for a typewriter effect on the home page.
- **Dynamic Content Integration:** Fetches live illustrations from Dribbble using its API.
- **Modern Frameworks:** Built with Next.js for server-side rendering and React for component-based architecture.
- **Interactive Elements:** Includes a dynamic hobbies page with scatter-effect keywords and engaging polaroid-style sections.

### Pages
1. **Home Page:**
   - Features a typewriter effect created using the Canvas API.
   - Includes an introduction section with scrolling text and a background image.

2. **About Page:**
   - Displays a profile avatar alongside a textual introduction.
   - Clean and professional design using responsive CSS.

3. **Projects Page:**
   - Showcases a "What I Do" section with three key areas of expertise:
     - ERP Solutions and Custom Integrations
     - Community Engagement and Technology for Nonprofits
     - Art X Tech
   - Displays project cards in a 3x3 grid with hover effects.

4. **Contact Page:**
   - Allows users to send messages via Formspree.
   - Displays contact links (LinkedIn, GitHub, and Email) with hover animations.
   - Includes a subtle background image for aesthetics.

5. **Hobbies Page:**
   - Features keywords scattered dynamically using random rotation and placement.
   - Clicking a keyword scrolls to a polaroid-style section with a photo and description for each hobby.
   - Hobbies include Piano, Digital Art, Gardening, Reading, Musicals, and Journaling.

6. **Illustrations Page:**
   - Fetches and displays illustrations dynamically from Dribbble using its API.
   - Uses Next.js Image component for optimized rendering.

## Technologies Used

### Frontend
- **Next.js 15:** Server-side rendering and dynamic routing.
- **React 19:** Component-based architecture.
- **TypeScript:** Ensures type safety and reduces bugs.
- **CSS Modules:** Modular and scoped styling.
- **Canvas API:** Used for the typewriter effect on the home page.

### Backend
- **Dribbble API Integration:** Fetches live data for the Illustrations page.
- **Node.js (API Routes):** Handles server-side requests and data fetching for Dribbble shots.

### Deployment
- **Vercel:** Deployed for both development and production environments.

## Iterations

### Initial Setup
- Basic scaffolding with Next.js and initial routing.
- Designed the layout with a header, sidebar, and footer.

### Enhancements
- Added a typewriter effect using Canvas API.
- Styled the "What I Do" section and hobbies page for better visual engagement.
- Integrated Formspree for contact form submission.
- Configured the Dribbble API for dynamic fetching of illustrations.

### Final Improvements
- Optimized image rendering with Next.js Image component.
- Implemented error handling and loading skeletons for API requests.
- Added responsive and accessible design throughout the site.

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file and add the following environment variables:
   ```env
   DRIBBBLE_CLIENT_ID=your-client-id
   DRIBBBLE_CLIENT_SECRET=your-client-secret
   DRIBBBLE_ACCESS_TOKEN=your-access-token
   NEXT_PUBLIC_DRIBBBLE_ACCESS_TOKEN=your-access-token
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Deployment
The portfolio is deployed on Vercel. The production site is available at:
https://jolie-portfolio.vercel.app

## Known Limitations
- **Dribbble API Rate Limits:** Excessive requests may lead to temporary unavailability of the Illustrations page.
- **Formspree Free Tier:** Limited number of submissions per month.

## Future Improvements
- Implement lazy loading for project and illustration sections.
- Add user authentication to enable personalized content.
- Explore additional HTML5 APIs, such as Web Workers or Geolocation, for advanced interactivity.

---
Feel free to explore, send me a message via the site, or provide feedback!

