import request from 'supertest';
import app from '../../App.js'; 
import { faker } from '@faker-js/faker';
import prisma from '../../lib/prisma.js'; 
describe('Chatbot - Ask for available appointments', () => {
  it('should return available appointment slots for a given doctor and date', async () => {
    const payload = {
      userName: 1,
      message: "what are the available slots next monday?",
      doctor: {
        id: 1,
        startTime: "09:00",
        endTime: "18:00",
        slotDuration: 30
      }
    };

    const res = await request(app)
      .post('/api/v1/ai/lang/chat') // adjust your route if needed
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
  expect(res.body).toHaveProperty('message', 'Chatbot response');

  const chatbotResponse = res.body.data;

  // Validate chatbot response structure
  expect(chatbotResponse).toHaveProperty('date');
  expect(chatbotResponse).toHaveProperty('message');
  expect(chatbotResponse).toHaveProperty('available_slots');

  // Convert the string into an array
  const slotsArray = chatbotResponse.available_slots
    .split('\n')
    .map(slot => slot.trim())
    .filter(Boolean);

  expect(Array.isArray(slotsArray)).toBe(true);
  expect(slotsArray.length).toBeGreaterThan(0);
  expect(typeof slotsArray[0]).toBe('string');
}, 10000);
  afterAll(async () => {
    await prisma.$disconnect();
  });
});
