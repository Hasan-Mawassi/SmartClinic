import request from 'supertest'
import app from '../../App.js'
import prisma from '../../lib/prisma.js'; 
describe('GET /api/v1/doctor/todaypatients', () => {
  it('should return today\'s patients for the doctor', async () => {
    const doctorId = 1;

    const res = await request(app)
      .get(`/api/v1/doctor/todaypatients?doctorId=${doctorId}`)
      // .set('Authorization', `Bearer ${token}`) 
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'Get upcomming Appointmets succesfully');
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
  afterAll(async () => {
      await prisma.$disconnect();
    });
    
});

