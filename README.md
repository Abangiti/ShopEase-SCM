# ShopEase-SCM
# ShopEase - Online Shopping Application

A simple online shopping application built with HTML, Tailwind CSS, JavaScript, and JSON for authentication.

## Features

- **Login Page**: User authentication using JSON file
- **Products Page**: Browse products with search functionality
- **Shopping Cart**: Add/remove items, update quantities, checkout

## Files Structure

```
online_shopping/
├── index.html      # Login page
├── products.html   # Product listing page
├── cart.html       # Shopping cart page
├── app.js          # Main JavaScript file
├── users.json      # User credentials database
├── products.json   # Products database
└── README.md       # Documentation
```

## Demo Credentials

- **Username**: admin
- **Password**: admin123

Or:
- **Username**: user
- **Password**: user123

## How to Run

1. Open the project folder
2. Start a local server (required for JSON fetch):
   - Using Python: `python -m http.server 8000`
   - Using Node.js: `npx serve`
   - Using VS Code: Live Server extension
3. Open `http://localhost:8000` in your browser

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- JSON for data storage

