const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Node App</title>
      <style>
        body { font-family: Arial; background: linear-gradient(135deg,#667eea,#764ba2); color:white; text-align:center; padding-top:100px; margin:0; height:100vh;}
        .card { background:white; color:#333; max-width:500px; margin:auto; padding:40px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.3);}
        h1 { color:#667eea; }
        .status { background:#4CAF50; color:white; padding:10px 20px; border-radius:20px; display:inline-block; margin-top:15px;}
        button { background:#667eea; color:white; border:none; padding:12px 25px; border-radius:10px; margin-top:20px; cursor:pointer; font-size:16px;}
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 CI/CD Node App is LIVE!</h1>
        <p>Deployed with GitHub Actions + DockerHub + Render</p>
        <p><b>Project by Soundhar</b></p>
        <div class="status">✅ Status: Running on Port ${PORT}</div>
        <br>
        <button onclick="alert('CI/CD Working Successfully! 🎉')">Test Interface</button>
        <p style="margin-top:20px; font-size:12px; color:#888;">Elevate Labs - Task 1 Completed</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});