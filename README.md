# Velvety - Eco-Friendly Skincare Website

**Velvety** is a modern e-commerce web application built with **Vite**, **React**, and **Redux Toolkit Query**, featuring a local database (`db.json`) for product storage. The website includes essential e-commerce functionalities such as filtering products, adding/removing items from the cart, and a checkout process with a dummy Stripe payment integration.

## Features

- **Home Page** – Showcases eco-friendly skincare products and highlights sustainable skincare benefits.
- **Shop Page** – Displays a list of products with filtering options.
- **Cart Page** – Allows users to view and manage their cart items.
- **Checkout Page** – Simulates a payment process using **Stripe (dummy integration)**.
- **Add to Cart / Remove from Cart** – Users can add or remove products.
- **Filter Functionality** – Users can filter products based on categories.
- **State Management** – Powered by **Redux Toolkit Query** for efficient data fetching and caching.

## 🛠️ Technologies Used

- **Vite** – Build tool for fast development
- **React** – Frontend framework
- **Redux Toolkit Query** – State management and API calls
- **JSON Server (`db.json`)** – Local database for product storage (Must be started manually)
- **Stripe** – Dummy payment integration
- **React Router** – Page navigation
- **CSS / Styled Components** – Styling

## 📂 Project Structure

```
📦 velvety
├── 📂 public
│   ├── 📂 data
│   ├── 📂 images
│   ├── 📂 video
├── 📂 src
│   ├── 📂 app          # Redux store
│   │   ├── store.jsx
│   ├── 📂 assets       # Static assets like images and icons
│   ├── 📂 components   # Reusable UI components
│   │   ├── 📂 Featured
│   │   │   ├── Featured.jsx
│   │   │   ├── Featured.module.css
│   │   ├── 📂 Footer
│   │   ├── 📂 Header
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   ├── 📂 HomeProducts
│   │   │   ├── HomeProducts.jsx
│   │   │   ├── HomeProducts.module.css
│   │   ├── 📂 ImageSlider
│   │   │   ├── ImageSlider.jsx
│   │   │   ├── ImageSlider.module.css
│   │   ├── 📂 Testimonials
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Testimonials.module.css
│   ├── 📂 Features     # E-commerce features (Cart, Checkout, etc.)
│   │   ├── Cart
│   │   ├── Checkout
│   │   ├── Products
│   │   ├── Reviews
│   ├── 📂 pages        # Main application pages
│   │   ├── Home
│   │   ├── Login
│   │   ├── SelectedProduct
│   │   ├── Shop
│   ├── 📜 App.jsx      # Main application component
│   ├── 📜 App.css      # Global styles
│   ├── 📜 main.jsx     # Entry point
│   ├── 📜 index.css    # Global styles
├── 📜 db.json          # Local database for products
├── 📜 package.json     # Dependencies and scripts
├── 📜 package-lock.json
├── 📜 .gitignore
├── 📜 index.html
└── 📜 eslint.config.js
```

## Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/velvety.git
   cd velvety
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the local database (`db.json`)**

   ```sh
   npx json-server --watch db.json --port 5000
   ```
   > Note: The API endpoints below are only available when JSON Server is running locally.

4. **Run the development server**

   ```sh
   npm run dev
   ```

5. **Visit the application**

   - Open your browser and go to: `http://localhost:5173`

## 🛒 How It Works

1. **Browse Products** on the Shop Page.
2. **Filter** products by category.
3. **Add items** to the cart.
4. **Review and update** the cart.
5. **Proceed to checkout** and simulate a payment with Stripe.

##  API Endpoints (Local JSON Server)

- **GET** `/products` – Fetch all products
- **GET** `/products/:id` – Fetch a single product
- **POST** `/cart` – Add an item to the cart
- **DELETE** `/cart/:id` – Remove an item from the cart

> Note: These endpoints are accessible only when `json-server` is running locally.

## Future Improvements

- Implement real-time payment integration with Stripe.
- Add user authentication and profile management.
- Optimize performance and enhance UI/UX.

## License

This project is licensed under the **MIT License**.

---



