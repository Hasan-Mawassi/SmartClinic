import request from 'supertest';
import app from '../../app.js'; 

describe('GET /api/v1/doctor/graphsdata', () => {
  it('should return graph data arrays for a doctor', async () => {
    const doctorID = 1;

    const res = await request(app)
      .get(`/api/v1/doctor/graphsdata?id=${doctorID}`)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'graphs Data');
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('genderData');
    expect(res.body.data).toHaveProperty('ageAnalysis');

    expect(Array.isArray(res.body.data.data)).toBe(true);
    expect(Array.isArray(res.body.data.genderData)).toBe(true);
    expect(Array.isArray(res.body.data.ageAnalysis)).toBe(true);
  });
});
