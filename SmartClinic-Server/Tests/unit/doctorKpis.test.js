import request from 'supertest';
import app from '../../App.js';

describe('GET /api/v1/doctor/getkpi', () => {
  it("should return KPI data for the doctor", async () => {
    const doctorId = 2;

    const res = await request(app)
      .get(`/api/v1/doctor/getkpi/${doctorId}`)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'kpi data');
    expect(res.body).toHaveProperty('data');

    const { data } = res.body;

    expect(data).toHaveProperty('totalPatients');
    expect(data).toHaveProperty('upcomingAppointments');
    expect(data).toHaveProperty('completedToday');

    // Check type of values
    expect(typeof data.totalPatients).toBe('number');
    expect(typeof data.upcomingAppointments).toBe('number');
    expect(typeof data.completedToday).toBe('number');
  });
  afterAll(async () => {
      await prisma.$disconnect();
    });
    
});
