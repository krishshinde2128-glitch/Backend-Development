# Express Basics Assignment

## Steps to Run the Server
1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
2. Start the server:
   \`\`\`bash
   node server.js
   \`\`\`
3. Visit `http://localhost:3000` in your browser.

---

## Explanation of Routes

* **GET `/`**: Displays the home page message.
* **GET `/about`**: Displays the about page message.
* **GET `/contact`**: Displays the contact page message.
* **GET `/user/:name`**: Reads the dynamic route parameter `:name` via `req.params.name`.
* **GET `/product/:id/:category`**: Reads both `:id` and `:category` via `req.params`.
* **GET `/search`**: Extracts query strings from the URL using `req.query.name` and `req.query.role`.
* **Global Middleware**: Logs every incoming request's HTTP method and path to the console.

---

## Sample Outputs

### Browser Responses
* `http://localhost:3000/` $\rightarrow$ `Welcome to Home Page`
* `http://localhost:3000/about` $\rightarrow$ `This is About Page`
* `http://localhost:3000/contact` $\rightarrow$ `This is Contact Page`
### Browser Responses
* `http://localhost:3000/user/krish` -> `Hello krish`
* `http://localhost:3000/search?name=krish&role=developer` -> `Name: krish, Role: developer`
* `http://localhost:3000/product/101/electronics` $\rightarrow$ `Product ID: 101, Category: electronics`

### Terminal Logs
GET /about
GET /user/krish
GET /search?name=krish&role=developer
\`\`\`