# Express.js Middleware Assignments

A simple implementation of Express.js middleware covering router-level middleware, global request logging, and server response time tracking.

---

## Getting Started

### 1. Installation
Initialize the project and install Express:
```bash
npm init -y
npm install express
```

### 2. Running the Files
Run whichever assignment file you want to test:
```bash
node assignment1.js
# or
node assignment2.js
# or
node assignment3.js
```

---

## Assignment Details

### Assignment 1: Router-Level Middleware (`assignment1.js`)
Middleware scoped exclusively to an `express.Router()` instance mounted on `/api`. It captures the HTTP method, request path, and timestamp.

* **Endpoints:**
  * `GET http://localhost:3000/api/students` &rarr; `Students List`
  * `GET http://localhost:3000/api/courses` &rarr; `Courses List`
  * `GET http://localhost:3000/api/faculty` &rarr; `Faculty List`
* **Expected Terminal Output:**
  ```text
  GET /api/students 2026-07-23 10:30:45
  GET /api/courses 2026-07-23 10:31:20
  GET /api/faculty 2026-07-23 10:32:10
  ```

---

### Assignment 2: Global Request Logger Middleware (`assignment2.js`)
Application-level middleware using `app.use()` that executes before every route in the app, logging method, URL, and timestamp.

* **Endpoints:**
  * `GET http://localhost:3000/` &rarr; `Welcome to Home Page`
  * `GET http://localhost:3000/about` &rarr; `About Us`
  * `GET http://localhost:3000/contact` &rarr; `Contact Information`
* **Expected Terminal Output:**
  ```text
  GET / 2026-07-23 10:30:45
  GET /about 2026-07-23 10:31:20
  GET /contact 2026-07-23 10:32:10
  ```

---

### Assignment 3: Response Time Middleware (`assignment3.js`)
Tracks the request lifecycle using `Date.now()` and listens to the response `'finish'` event to log elapsed processing time in milliseconds.

* **Endpoints:**
  * `GET http://localhost:3000/` &rarr; `Home Page`
  * `GET http://localhost:3000/products` &rarr; `Product List`
  * `GET http://localhost:3000/users` &rarr; `User List`
* **Expected Terminal Output:**
  ```text
  GET / - 4 ms
  GET /products - 6 ms
  GET /users - 3 ms
  ```