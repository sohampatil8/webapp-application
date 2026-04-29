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
          background: linear-gradient(to right, #d4af37, #ffd700);
          padding: 20px;
          text-align: center;
          color: #000;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .hero {
          text-align: center;
          padding: 80px 20px;
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

      <header>💎 Golden Aura Jewellers</header>

      <section class="hero">
        <h1>Elegance in Every Shine ✨</h1>
        <p>Discover timeless gold collections crafted for you</p>
        <button class="btn">Shop Now</button>
      </section>

      <section class="products">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a2c4d">
          <h3>Gold Necklace</h3>
          <p>₹75,000</p>
        </div>

        <div class="card">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f">
          <h3>Wedding Bangles</h3>
          <p>₹55,000</p>
        </div>

        <div class="card">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d">
          <h3>Designer Ring</h3>
          <p>₹25,000</p>
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
