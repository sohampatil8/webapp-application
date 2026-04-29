const express = require("express");
const app = express();

// Middleware to serve static files (optional)
app.use(express.static("public"));

// Route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Demo App</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #1e3c72, #2a5298);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.2rem;
        }
        .badge {
          margin-top: 20px;
          padding: 10px 20px;
          background: #00c9a7;
          border-radius: 25px;
          display: inline-block;
          font-weight: bold;
        }
        .footer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 DevOps Demo App</h1>
        <p>Successfully deployed using CI/CD Pipeline</p>
        <div class="badge">Version 2.0</div>
      </div>
      <div class="footer">
        Running on Port 3000
      </div>
    </body>
    </html>
  `);
});

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
