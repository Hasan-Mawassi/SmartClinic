import request from 'supertest';
import app from '../../app.js';
import { faker } from '@faker-js/faker';

describe('Patient Auth Feature Test', () => {
  const password = 'testpassword123';
  const email = faker.internet.email();
  const name = faker.person.fullName();

  it('should register and login a patient successfully', async () => {
    // Register patient
    const registerRes = await request(app)
      .post('/api/v1/auth/patient/register')
      .send({
        name,
        email,
        password,
        gender: faker.number.int({ min: 0, max: 2 })
      });

    expect(registerRes.statusCode).toBe(201);
    expect(registerRes.body).toHaveProperty('success', true);
    expect(registerRes.body.data).toHaveProperty('token');
     expect(registerRes.body.data.user.email).toBe(email)

    // Login patient
    const loginRes = await request(app)
      .post('/api/v1/auth/patient/login')
      .send({
        email,
        password
      });

    expect(loginRes.statusCode).toBe(201);
    expect(loginRes.body).toHaveProperty('success', true);
    expect(loginRes.body.data).toHaveProperty('token');
    expect(loginRes.body.data.patient).toHaveProperty('email', email);
  });
});
