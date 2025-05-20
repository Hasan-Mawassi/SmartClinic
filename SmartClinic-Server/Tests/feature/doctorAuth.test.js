import request from 'supertest';
import app from '../../app.js';
import { faker } from '@faker-js/faker';

describe('Feature Test: Doctor Register and Login', () => {
  const password = '123123'; 
  const email = faker.internet.email();
  const name = faker.person.fullName();

  it('should register and then log in a doctor successfully', async () => {
    // Step 1: Register
    const registerRes = await request(app)
      .post('/api/v1/auth/doctor/register')
      .send({
        name,
        email,
        password,
        yearsExperience: faker.number.int({ min: 1, max: 30 }),
        profilePicture: 'profile photo'
      })
      .expect(201);

    expect(registerRes.body).toHaveProperty('success', true);
    expect(registerRes.body).toHaveProperty('data.token');
    expect(registerRes.body.data.doctor).toHaveProperty('email', email);

    // Step 2: Login
    const loginRes = await request(app)
      .post('/api/v1/auth/doctor/login')
      .send({
        email,
        password
      })
      .expect(200);

    expect(loginRes.body).toHaveProperty('success', true);
    expect(loginRes.body).toHaveProperty('message', 'Login successful');
    expect(loginRes.body).toHaveProperty('data.token');
    expect(loginRes.body.data.doctor).toHaveProperty('email', email);
  });
});
