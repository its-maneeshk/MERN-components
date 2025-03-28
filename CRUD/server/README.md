#!/bin/bash
# 📚 MERN API for Product, Customer & Feedback Management

# 🚀 Project Overview
# This is a simple Node.js + Express + MongoDB API to manage:
# - 🛒 Products: Add, view, and delete products.
# - 👥 Customers: Store customer details along with their IP addresses.
# - ⭐️ Feedback: Collect and manage customer feedback.

# 📂 Project Structure
# mern-api/
# ├── config/
# │   └── db.js                 # MongoDB connection
# ├── controllers/
# │   ├── customerController.js # CRUD for customers
# │   ├── feedbackController.js # CRUD for feedback
# │   └── productController.js  # CRUD for products
# ├── models/
# │   ├── CustomerSchema.js     # Customer schema
# │   ├── FeedbackSchema.js     # Feedback schema
# │   └── ProductSchema.js      # Product schema
# ├── routes/
# │   ├── customerRoutes.js     # Routes for customers
# │   ├── feedbackRoutes.js     # Routes for feedback
# │   └── productRoutes.js      # Routes for products
# ├── public/
# │   └── index.html            # Basic frontend for testing
# ├── .env                      # Environment variables
# ├── package.json              # Dependencies
# ├── server.js                 # Main entry point
# └── README.md                 # Project documentation

# ⚙️ Setup Instructions
# 1. Clone the Repository
# git clone <URL>
# cd <FOLDER>

# 2. Install Dependencies
# npm install

# 3. Run the Server
# nodemon
# API will be running at:
# http://localhost:4040

# 📢 API Endpoints
# 🛒 Products API
# GET /api/products - Get all products
# GET /api/products/:id - Get product by ID
# POST /api/products - Create a new product
# DELETE /api/products/:id - Delete product by ID

# 👥 Customers API
# GET /api/customers - Get all customers
# GET /api/customers/:id - Get customer by ID
# POST /api/customers - Add a new customer
# DELETE /api/customers/:id - Delete customer by ID

# ⭐️ Feedback API
# GET /api/feedbacks - Get all feedbacks
# GET /api/feedbacks/:id - Get feedback by ID
# POST /api/feedbacks - Submit feedback
# DELETE /api/feedbacks/:id - Delete feedback by ID

# 🧪 Testing APIs with Postman
# 1. Start the server:
# npm start

# 2. Use Postman or Thunder Client to test the following APIs:

# Get All Products:
# GET → http://localhost:4040/api/products

# Create New Product:
# POST → http://localhost:4040/api/products
# Body:
# {
#   "name": "iPhone 15",
#   "price": 1200,
#   "description": "Latest iPhone with A17 Bionic chip",
#   "stock": 50,
#   "isAvailable": true
# }

# Get Product by ID:
# GET → http://localhost:4040/api/products/{productId}

# Delete Product by ID:
# DELETE → http://localhost:4040/api/products/{productId}


# 🎉 Done! Ready to Build on Top of This 🚀
# - Test all routes using Postman.
# - Integrate with a frontend if needed.
# - Use environment variables to secure database connections.

# 🤝 Contributing
# - Fork the repository.
# - Create a feature branch (feature/new-feature).
# - Commit changes.
# - Push to the branch.
# - Create a Pull Request.

# 📞 Contact
# If you have any questions, feel free to reach out!
