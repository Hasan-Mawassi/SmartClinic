import request from 'supertest'
import app from '../../app.js' 
import { faker } from '@faker-js/faker'

describe('POST /doctor/createvital', () => {
  it('should create a new vital record successfully', async () => {
      const payload = {
      patientId: 2, // Use existing test data
      doctorId: 1,
      healthPercentage: faker.number.int({ min: 50, max: 100, precision: 0.1 }),
      heartRate: faker.number.int({ min: 60, max: 120 }),
      bloodPressure: `${faker.number.int({ min: 100, max: 140 })}/${faker.number.int({ min: 60, max: 90 })}`,
      temperature: faker.number.int({ min: 36.0, max: 38.0, precision: 0.1 }),
      bloodGlucose: faker.number.int({ min: 70, max: 150 }),
    };
    const res = await request(app)
      .post('/api/v1/doctor/createvital')
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'successfully created');
    expect(res.body).toHaveProperty('data');

    const data = res.body.data;

    expect(data).toHaveProperty('id');
    expect(data).toMatchObject({
      patientId: payload.patientId,
      doctorId: payload.doctorId,
      healthPercentage: payload.healthPercentage,
      heartRate: payload.heartRate,
      bloodPressure: payload.bloodPressure,
      temperature: payload.temperature,
      bloodGlucose: payload.bloodGlucose,
    });

    expect(new Date(data.createdAt)).toBeInstanceOf(Date);
  });
});
