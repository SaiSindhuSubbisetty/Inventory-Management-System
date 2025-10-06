# 📦 Inventory Management System

An **Inventory Management System (IMS)** built with **Spring Boot (Backend)** and **React (Frontend)** that allows businesses to manage inventory operations seamlessly.
The system provides a dashboard, product management, supplier management, and transaction tracking to monitor purchases and sales effectively.

---

## 🚀 Features

### 🔹 Core Modules

* **Dashboard** → Overview of products, suppliers, sales, and purchases.
* **Products** → Add, update, delete, and list products with categories.
* **Categories** → Organize products into categories.
* **Suppliers** → Manage supplier details for purchases.
* **Purchase (Stock In)** → Record incoming stock from suppliers.
* **Sell (Stock Out)** → Record sales and update inventory automatically.
* **Transactions** → Track purchase & sales history with details.
* **User Profile** → Manage account details.
* **Authentication & Logout** → Secure login/logout for users (JWT-based).

---

## 🛠 Tech Stack

**Backend (Spring Boot)**

* Java 17+
* Spring Boot 3.x
* Spring Security (JWT)
* Spring Data JPA (Hibernate)
* MySQL/PostgreSQL
* Maven

**Frontend (React)**

* React.js
* Axios (for API calls)
* React Router
* Tailwind CSS

---

## 📂 Project Structure

```
InventoryManagementSystem/                 # Root Project
│
├── InventoryManagementSystem/             # Backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/inventory/        # Java source code
│   │   │   │   ├── config/                # Security & app config (JWT, DB, CORS)
│   │   │   │   ├── controller/            # REST Controllers (Product, Supplier, Auth, etc.)
│   │   │   │   ├── dto/                   # Data Transfer Objects
│   │   │   │   ├── exception/             # Custom exceptions & handlers
│   │   │   │   ├── model/                 # JPA Entities (Product, Category, Supplier, etc.)
│   │   │   │   ├── repository/            # Spring Data JPA Repositories
│   │   │   │   ├── service/               # Service layer (Business logic)
│   │   │   │   └── InventoryApplication.java # Main Spring Boot app
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.properties # DB & app configs
│   │   │       └── static/                # Static resources (if any)
│   │   │
│   │   └── test/                          # Unit & integration tests
│   │
│   ├── pom.xml                            # Maven dependencies
│   └── target/                            # Build folder (ignored in Git)
│
├── frontend/                              # Frontend (React)
│   ├── public/                            # Static assets (index.html, icons)
│   ├── src/
│   │   ├── api/                           # Axios API calls
│   │   ├── components/                    # Reusable components (Navbar, Sidebar, Forms, etc.)
│   │   ├── pages/                         # Pages (Dashboard, Products, Transactions, Profile)
│   │   ├── context/                       # Auth context / state management
│   │   ├── routes/                        # Protected/Public route configs
│   │   ├── App.js                         # Main app component
│   │   └── index.js                       # Entry point
│   │
│   ├── package.json                       # Dependencies
│   └── node_modules/                      # Installed packages (ignored in Git)
│
├── product-images/                        # Uploaded product images
├── .gitignore                             # Ignore build/IDE files
├── README.md                              # Project Documentation
└── LICENSE (optional)                     # License file
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup (Spring Boot)

1. Navigate to backend directory:

```bash
cd InventoryManagementSystem/InventoryManagementSystem
```

2. Configure **database** in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/inventorydb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

3. Install dependencies & run backend:

```bash
mvn spring-boot:run
```

4. Backend will start at:
   👉 `http://localhost:8080`

---

### 🔹 Frontend Setup (React)

1. Navigate to frontend directory:

```bash
cd InventoryManagementSystem/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start frontend:

```bash
npm start
```

4. Frontend will run at:
   👉 `http://localhost:3000`

---

## 🌐 Live Links

**Swagger UI (API Documentation):**  
[http://localhost:5050/swagger-ui/index.html](http://localhost:5050/swagger-ui/index.html)

**Frontend Live (Vercel Deployment):**  
[https://inventory-management-system-fronten-seven.vercel.app/login](https://inventory-management-system-fronten-seven.vercel.app/login)

---

## 📸 Screenshots

### 🧾 Register Page
![Register Page](./screenshot/78ab618b-67c1-48b4-aca9-0ab1f4b33abc.png)

### 🔐 Login Page
![Login Page](./screenshot/login.png)

### 📊 Dashboard
![Dashboard Page 1](./screenshot/dashboard1.png)
![Dashboard Page 2](./screenshot/dashboard2.png)

### 💰 Transactions
![Transactions Page](./screenshot/transactions.png)

### 🛒 Purchase
![Purchase Page](./screenshot/purchase.png)

### 📦 Sell
![Sell Page](./screenshot/sell.png)

### 👤 Profile
![Profile Page](./screenshot/profile.png)

### 🏷️ Categories
![Category Page](./screenshot/category.png)

### 🚚 Suppliers
![Suppliers Page](./screenshot/suppliers.png)

### 📦 Products
![Products Page](./screenshot/products.png)

---


## 📊 Example Workflows

* **Add Supplier → Purchase Stock → Products updated automatically**
* **Sell Product → Inventory reduces → Transaction added**
* **Dashboard** → Shows stock levels, top-selling products, supplier stats
* **Profile** → User can update personal info & password
* **Logout** → Securely ends session

---

## 👨‍💻 Author

**Sai Sindhu Subbisetty**
🔗 [GitHub](https://github.com/SaiSindhuSubbisetty/Inventory-Management-System)

---
