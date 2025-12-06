# **Rental System**

## **Features**
---
### **Authentication & Security**

* Secure password hashing using **bcryptjs**
* Login authentication with **JWT (JSON Web Token)**
* Protected API routes
* Token-based session handling

### **Rental System Functionalities**

* User registration & login
* Rental item management (CRUD operations)
* Secure database storage
* API-based backend architecture

### **Other Key Features**

* RESTful API design
* Error handling & input validation
* Clean folder structure

---

## **Technology Stack**
---
### **Backend**

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **bcryptjs**
* **jsonwebtoken (JWT)**

### **Deployment**

* **Vercel**

---

## **Local Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/cseswapon/rental_system
cd rental_system
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the project root and add the following:

```
PORT=5000
DATABASE_URL=*************************
JWT_SECRET=***************
```

### **4. Start the Server**

```bash
npm start
```

Server will run at:
`http://localhost:5000`

---

## **Project Links**

* **GitHub Repo:** [https://github.com/cseswapon/rental_system](https://github.com/cseswapon/rental_system)
* **Live Deployment:** [https://rental-system-xi.vercel.app/](https://rental-system-xi.vercel.app/)

---

## **DEMO**

### **Login (POST Request)**

URL:
`https://rental-system-xi.vercel.app/api/v1/auth/signin`

#### **Admin Login Example**

```json
{
  "email": "swaponsaha@gmail.com",
  "password": "123456"
}
```

#### **Customer Login Example**

```json
{
  "email": "abc@gmail.com",
  "password": "123456"
}
```

---