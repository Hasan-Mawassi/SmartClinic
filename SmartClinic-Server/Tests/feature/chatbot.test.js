import request from 'supertest';
import app from '../../App.js'; 
import { faker } from '@faker-js/faker';

describe('Chatbot - Ask for available appointments', () => {
  it('should return available appointment slots for a given doctor and date', async () => {
    const payload = {
      userName: faker.person.firstName(),
      message: "what are the available slots next monday?",
      doctor: {
        id: 1,
        startTime: "09:00",
        endTime: "18:00",
        slotDuration: 30
      }
    };

    const res = await request(app)
      .post('/api/v1/ai/chat') // adjust your route if needed
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'Chatbot response');
 

    const chatbotResponse = JSON.parse(res.body.data.message);

    expect(chatbotResponse).toHaveProperty('date');
    expect(Array.isArray(chatbotResponse.available_slots)).toBe(true);
    expect(chatbotResponse.available_slots.length).toBeGreaterThan(0);
    expect(typeof chatbotResponse.available_slots[0]).toBe('string');
    expect(chatbotResponse).toHaveProperty('message');
  },25000);
});
