const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/status', (req, res) => {
  res.json({ status: "Simple Rick AI backend is running!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
