const express = require("express");
const app = express();

// Serve static files if needed (optional)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Soham Patil | DevOps Engineer</title>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #e6e6e6;
  }

  .container {
    width: 900px;
    margin: 40px auto;
    background: white;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  h1 {
    margin-bottom: 5px;
  }

  h2 {
    color: #f39c12;
    margin-top: 0;
  }

  .section {
    margin-top: 25px;
  }

  .btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #f39c12;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<script>
function downloadPDF() {
  const element = document.body;
  html2pdf().from(element).save("resume.pdf");
}
</script>

</head>

<body>

<button class="btn" onclick="downloadPDF()">Download PDF</button>

<div class="container">
  <h1>SOHAM PATIL</h1>
  <h2>DEVOPS ENGINEER</h2>

  <div class="section">
    <h3>CONTACT</h3>
    <p>+91 9867256690</p>
    <p>sohamsatyajitpatil@email.com</p>
  </div>

  <div class="section">
    <h3>ABOUT ME</h3>
    <p>
      DevOps Engineer with experience in AWS, Docker, Kubernetes,
      CI/CD pipelines, and automation using Bash & PowerShell.
    </p>
  </div>

  <div class="section">
    <h3>SKILLS</h3>
    <ul>
      <li>Docker</li>
      <li>Kubernetes</li>
      <li>Jenkins</li>
      <li>Terraform</li>
      <li>AWS</li>
    </ul>
  </div>

  <div class="section">
    <h3>EXPERIENCE</h3>
    <p><b>Junior Engineer - TechVits Pvt Ltd</b></p>
    <p>Automation, scripting, infrastructure management</p>
  </div>

</div>

</body>
</html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
