# Addis Eats 🍽️

Addis Eats is a full-stack food ordering web application built with Next.js. The project allows users to browse Ethiopian dishes, search and filter the menu, add items to a shopping cart, and place an order by providing their delivery information.

## Features

- 🏠 Home page
- 🍽️ Ethiopian food menu
- 🔍 Search dishes by name or description
- 🏷️ Filter dishes by category
- 💰 Sort dishes by price
- 🛒 Add dishes to the shopping cart
- ➕ Increase or decrease item quantities
- 🗑️ Remove items from the cart
- 💵 Automatic cart total calculation
- 💾 Cart persistence using browser local storage
- 📦 Checkout and order placement
- 📱 Responsive design for different screen sizes
- ✅ Form validation for customer information
- 🔐 Server-side order validation

## Technologies Used

- **Next.js**
- **React**
- **JavaScript**
- **CSS**
- **Local Storage**
- **Next.js Server Actions**
- **Next.js API Routes**

## Project Structure

```text
addis-eats-next-day-35-40/
│
├── app/
│   ├── api/
│   │   └── orders/
│   ├── cart/
│   ├── checkout/
│   ├── components/
│   ├── menu/
│   ├── lib/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── public/
├── package.json
├── package-lock.json
├── next.config.mjs
└── README.md