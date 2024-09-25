import express from 'express';

const app = express();

// ตั้งค่า middleware และ routes ที่นี่
app.get('/products', (req, res) => {
  res.status(200).json({
    result: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ],
  });
});

export default app; // ต้องมีการส่งออกแบบนี้
