import request from 'supertest';
import app from '../../app.js';

describe('GET /api/v1/patient/getperscription', () => {
  it("should return patient's prescription grouped by date", async () => {
    const patientId = 2;

    const res = await request(app)
      .get(`/api/v1/patient/getperscription?id=${patientId}`)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'prescritions info');
    expect(Array.isArray(res.body.data)).toBe(true);

   
    res.body.data.forEach(entry => {
      expect(entry).toHaveProperty('date');
      expect(entry).toHaveProperty('prescriptions');
      expect(Array.isArray(entry.prescriptions)).toBe(true);
    });
  });
});
