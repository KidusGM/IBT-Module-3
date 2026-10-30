# Addis Eats

A Next.js food ordering application built as part of the **IBT College Canada CodeOps Full Stack Software Development** program.

Addis Eats brings together the major concepts covered throughout Module 3, including Next.js routing, Server Components, Client Components, API routes, authentication, protected pages, cart functionality, order management, optimization, and SEO.

## Project Overview

Addis Eats allows users to:

- Browse Ethiopian dishes
- View individual dish details
- Add dishes to a shopping cart
- Sign in and sign out
- Complete checkout
- Place orders
- View their orders
- View order status
- Access the kitchen area when authorized as staff

The project was developed progressively across Days 36–45, with Day 45 focusing on bringing the previous work together into one complete application.

## Main Application Flow

```text
Home
  ↓
Menu
  ↓
Dish Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Sign In
  ↓
Checkout
  ↓
Place Order
  ↓
Orders
  ↓
Order Status
```

Staff users can additionally access:

```text
Kitchen
  ↓
View Orders
  ↓
Update Order Status
```

## Features

### Menu

- Browse available Ethiopian dishes
- View dish categories, descriptions, prices, and images
- Open individual dish detail pages

### Shopping Cart

- Add dishes to the cart
- View cart contents
- Manage the cart using client-side functionality
- Display the current cart count

### Authentication

- Sign in and sign out
- Session-based authentication
- Protected checkout and order routes
- Server-side session checks
- Staff-only access for kitchen functionality

### Orders

- Place orders through checkout
- View orders
- View order information and status
- Protect order data based on the authenticated user

### Kitchen

Staff users can access the kitchen area to work with orders and update order status.

### Error and Loading Handling

The application includes:

- Loading UI
- Error handling
- Not-found handling
- Protected route handling

## SEO and Metadata

The application includes Next.js metadata and SEO features:

- Page titles
- Page descriptions
- Dynamic metadata for dish pages
- Canonical URLs
- Open Graph metadata
- Dynamic Open Graph images
- Structured data using JSON-LD
- Sitemap
- Robots.txt

## Main Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/menu` | Browse the menu |
| `/menu/[id]` | View a dish |
| `/cart` | Shopping cart |
| `/signin` | Sign-in page |
| `/checkout` | Checkout |
| `/orders` | User orders |
| `/kitchen` | Staff kitchen |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots rules |

## Project Structure

```text
addis-eats-next-day-45/
│
├── app/
│   ├── api/
│   │   ├── orders/
│   │   ├── signin/
│   │   └── signout/
│   │
│   ├── cart/
│   ├── checkout/
│   ├── components/
│   ├── kitchen/
│   ├── menu/
│   │   └── [id]/
│   ├── orders/
│   ├── signin/
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   ├── robots.js
│   └── sitemap.js
│
├── public/
├── package.json
└── README.md
```

## Technologies

- Next.js
- React
- JavaScript
- CSS
- Next.js App Router
- Server Components
- Client Components
- Route Handlers
- Server Actions
- Session-based authentication
- Next.js Metadata API
- JSON-LD structured data

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

Then start the production application:

```bash
npm run start
```

## SEO Verification

The following endpoints are available:

```text
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

Individual dish pages also generate their own Open Graph image.

## Day 45 Integration

Day 45 represents the integration and completion stage of the Addis Eats project.

The application brings together the work covered in the previous days:

- Routing and layouts
- Server-rendered data
- Client-side interaction
- API integration
- Authentication
- Authorization
- Protected routes
- Cart functionality
- Orders
- Performance and optimization
- Metadata and SEO
- Sitemap and robots configuration
- Structured data
- Error and loading handling

The goal is to present Addis Eats as one complete working application rather than a collection of separate daily exercises.

## Final Checklist

- [x] Home page
- [x] Menu
- [x] Dish details
- [x] Shopping cart
- [x] Sign-in
- [x] Sign-out
- [x] Checkout
- [x] Orders
- [x] Kitchen
- [x] Protected routes
- [x] Authentication
- [x] Authorization
- [x] Metadata
- [x] Open Graph
- [x] Structured data
- [x] Sitemap
- [x] Robots.txt
- [x] Loading and error handling
- [ ] Production build verification
- [ ] Final GitHub submission

## Course

**CodeOps · Full Stack Software Development**  
**IBT College Canada**

Project: **Addis Eats**  
Module: **Module 3 · Frontend: React & Next.js**  
Final Integration: **Day 45**