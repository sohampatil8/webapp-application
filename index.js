const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>DevOps Demo App</title>

    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: white;
        text-align: center;
      }

      .container {
        padding: 50px 20px;
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.2rem;
        opacity: 0.9;
      }

      .card {
        background: white;
        color: #333;
        border-radius: 12px;
        padding: 20px;
        margin: 30px auto;
        max-width: 500px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }

      .status {
        color: green;
        font-weight: bold;
      }

      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 25px;
        background: #ff7b00;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        transition: 0.3s;
      }

      .btn:hover {
        background: #ff9500;
      }

      footer {
        margin-top: 40px;
        font-size: 0.9rem;
        opacity: 0.7;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>🚀 DevOps App</h1>
      <p>CI/CD | Docker | Kubernetes Ready Application</p>

      <div class="card">
        <h2>Application Status</h2>
        <p class="status">Running Successfully ✅</p>
        <p>Server Port: 3000</p>
        <p>Environment: Development</p>
      </div>

      <a href="/" class="btn">Refresh App</a>

      <footer>
        Built with Node.js + Express | DevOps Demo Project
      </footer>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));
