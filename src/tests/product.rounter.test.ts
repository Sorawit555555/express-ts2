// ชื่อ: ชื่อของคุณ
// รหัสประจำตัว: รหัสของคุณ

import app from '../app'; 
import request from 'supertest';

describe('สรวิศ ภูทะวัง', () => {
  it('6604101387', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
  });
});
