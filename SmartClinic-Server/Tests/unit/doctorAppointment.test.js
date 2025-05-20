import request from 'supertest'
import app from '../../App.js'

describe('GET /api/v1/doctor/appointments', () => {
  it("should return the doctor's appointments", async () => {
    const doctorId = 1;

    const res = await request(app)
      .get(`/api/v1/doctor/appointments?doctorId=${doctorId}`)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'get Appointment successfully');
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
  afterAll(async () => {
      await prisma.$disconnect();
    });
});


  