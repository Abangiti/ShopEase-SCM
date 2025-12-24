# ShopEase - Online Shopping Application

A simple, lightweight online shopping front-end demo built with HTML, Tailwind CSS, Vanilla JavaScript and JSON files for data and simple authentication. This repository demonstrates basic e-commerce flows (login, browse products, add to cart, and checkout) and serves as a learning / demo project.

---

## Table of Contents

- [Features](#features)
- [Demo Credentials](#demo-credentials)
- [Prerequisites & Installation](#prerequisites--installation)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Releases](#releases)

---

## Features

- **Login Page**: Simple user authentication using `users.json` (demo-only)
- **Products Page**: Browse products with a search/filter UI
- **Shopping Cart**: Add/remove items, update quantities, and checkout flow
- **Lightweight**: No backend required — JSON files act as sample data

## Demo Credentials

- **Username**: admin
- **Password**: admin123

Or:
- **Username**: user
- **Password**: user123

## Prerequisites & Installation

- A modern web browser
- A simple static server is required to allow `fetch` requests for JSON files:
  - Python: `python -m http.server 8000`
  - Node.js: `npx serve` (install `serve` if needed)
  - Or use the **Live Server** extension in VS Code

## How to Run

1. Open a terminal at the project root (this repository folder).
2. Start a local static server (see Prerequisites above).
3. Open `http://localhost:8000/src/` (or `http://localhost:8000` depending on server root) in your browser.
4. Use the demo credentials to log in and try the shopping flow.

## Project Structure

```
ShopEase-SCM/
├── README.md            # Project documentation
├── docs/                # Project documentation and design notes
├── releases/            # Release notes (v1.0, v1.1, ...)
├── src/                 # Source files (frontend)
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── app.js
│   ├── products.json
│   └── users.json
└── tests/
    └── test_cases.txt   # Manual test cases and instructions
```

## Usage

- Open the site, log in with demo credentials, browse products, add items to cart, and go through checkout to test cart calculations and simple UI behaviors.
- The app is intended as a learning/demo project and does not include a production-ready backend.

## Testing

- Manual test cases and scenarios are listed in `tests/test_cases.txt` — open the file and follow the steps to verify functionality.

## Releases

See the `releases/` folder for release notes:
- `releases/v1.0.md`
- `releases/v1.1.md`

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- JSON for data storage
 
 

