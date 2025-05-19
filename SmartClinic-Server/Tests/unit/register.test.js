import request from 'supertest'
import app from '../../App.js' // your Express app
import { faker } from '@faker-js/faker'
import prisma from '../../lib/prisma.js'; // Or wherever it's initialized

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const userData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),

      gender: 1,

      gender: faker.number.int(0 , 2),

      password: 'testpassword123',
    }

    const res = await request(app)
      .post('/api/v1/auth/patient/register')

      .send(userData)

    expect(res.statusCode).toBe(201)
    expect(res.body.data).toHaveProperty('token')
    expect(res.body.data.user.email).toBe(userData.email)
  })
})

afterAll(async () => {
    await prisma.$disconnect();
  });
  