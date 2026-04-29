const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Jewellers</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #111;
          color: #fff;
        }
        header {
          background: linear-gradient(to right, #ffd700, #ffd700);
          padding: 20px;
          text-align: center;
          color: #000;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .hero {
          text-align: center;
          padding: 20px 20px;
          background: url('https://images.unsplash.com/photo-1603575448360-153f093fd0b2') no-repeat center/cover;
        }
        .hero h1 {
          font-size: 3rem;
          color: gold;
        }
        .hero p {
          font-size: 1.2rem;
        }
        .btn {
          margin-top: 20px;
          padding: 12px 25px;
          background: gold;
          color: black;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }
        .products {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 40px;
          flex-wrap: wrap;
        }
        .card {
          background: #1c1c1c;
          padding: 20px;
          border-radius: 15px;
          width: 250px;
          text-align: center;
          box-shadow: 0 0 10px rgba(255,215,0,0.3);
        }
        .card img {
          width: 100%;
          border-radius: 10px;
        }
        .card h3 {
          color: gold;
        }
        footer {
          text-align: center;
          padding: 15px;
          background: #000;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>

      <header>💎Aura Jewellers</header>

      <section class="hero">
        <h1>Elegance in Every Shine ✨</h1>
        <p>Discover timeless gold collections crafted for you</p>
        <button class="btn">Shop Now</button>
      </section>

      <section class="products">
        <div class="card">
          <a href="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9o65CJKh5e0NbODaCRM4YSjomQQBZLQ5pKDqhdzETGbLBrz0AtGPD8zm99f9wdoHNR9dt7QKUJAbDsBKFU-dYNlbDzRH4OcgB4rGQZ3lBf_6-NBdNefCdt9HLQJammQU3WsboJo0&usqp=CAc" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9o65CJKh5e0NbODaCRM4YSjomQQBZLQ5pKDqhdzETGbLBrz0AtGPD8zm99f9wdoHNR9dt7QKUJAbDsBKFU-dYNlbDzRH4OcgB4rGQZ3lBf_6-NBdNefCdt9HLQJammQU3WsboJo0&usqp=CAc">
          </a>
          <h3>Gold Necklace</h3>
          <p>₹14,30,494</p>
        </div>

        <div class="card">
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwZXSCpv2KIBIbpao1I8oue7eFbjc8_y2hji7iO3WAw&s" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwZXSCpv2KIBIbpao1I8oue7eFbjc8_y2hji7iO3WAw&s">
          </a>
          <h3>Karatcart Gold Plated Pearl</h3>
          <p>₹1,55,149.00</p>
        </div>

        <div class="card">
          <a href="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpxYkOrMF5TKpzz5kGbbuQeE5-31rwZeMZHBMeBdX7nLwlKTaoRR7bMgaLtYu5hd2JSY4_bmMzZMxdatTmNf2tqLJUXQJa2NiebO4BqZa8DU8UTSz6KWSGP8o&usqp=CAc" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpxYkOrMF5TKpzz5kGbbuQeE5-31rwZeMZHBMeBdX7nLwlKTaoRR7bMgaLtYu5hd2JSY4_bmMzZMxdatTmNf2tqLJUXQJa2NiebO4BqZa8DU8UTSz6KWSGP8o&usqp=CAc">
          </a>
          <h3>Designer Ring</h3>
          <p>₹152,262.95</p>
        </div>
      </section>

      <footer>
        © 2026 Golden Aura Jewellers | Trusted Since 1995
      </footer>

    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Gold Jewellery Store running on port 3000 💎");
});
