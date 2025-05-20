import prisma from '../../lib/prisma.js';

/**
 * Generates available appointment slots for a specific doctor and date
 * @param {number} doctorId
 * @param {string} dateISO - 'YYYY-MM-DD'
 * @param {string} startTime - '09:00'
 * @param {string} endTime - '18:00'
 * @param {number} slotDurationMinutes
 * @returns {string[]} ISO strings of available slots
 */
export async function generateAvailableSlots({ doctorId, dateISO, startTime, endTime, slotDurationMinutes }) {
  const [year, month, day] = dateISO.split('-').map(Number);
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const start = new Date(Date.UTC(year, month - 1, day, startHour, startMinute));
  const end = new Date(Date.UTC(year, month - 1, day, endHour, endMinute));
// console.log('Start:', start.toISOString());
// console.log('End:', end.toISOString());
  const booked = await prisma.appointment.findMany({
    where: {
      doctorId,
      dateTime: {
        gte: start,
        lt: end,
      },
      status: 'pending',
    },
    select: { dateTime: true },
  });
// console.log("booked>",booked)
  const bookedTimes = new Set(booked.map(a => new Date(a.dateTime).getTime()));
  const slots = [];

  for (let time = start.getTime(); time < end.getTime(); time += slotDurationMinutes * 60000) {
    if (!bookedTimes.has(time)) {
      slots.push(new Date(time).toISOString());
    }
  }

  return slots;
}
