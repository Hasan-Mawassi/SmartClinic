import { checkSchema } from 'express-validator';

export const textChatValidator = checkSchema({
  userName: {
    in: ['body'],
    exists: { errorMessage: 'userName is required' },
    isString: { errorMessage: 'userName must be a string' },
    trim: true,
  },
  message: {
    in: ['body'],
    exists: { errorMessage: 'message is required' },
    isString: { errorMessage: 'message must be a string' },
    trim: true,
  },
  'doctor.id': {
    in: ['body'],
    exists: { errorMessage: 'doctor.id is required' },
    isInt: { errorMessage: 'doctor.id must be an integer' },
    toInt: true,
  },
  'doctor.startTime': {
    in: ['body'],
    exists: { errorMessage: 'doctor.startTime is required' },
    matches: {
      options: [/^([01]\d|2[0-3]):([0-5]\d)$/],
      errorMessage: 'doctor.startTime must be in HH:MM format (24-hour)',
    },
  },
  'doctor.endTime': {
    in: ['body'],
    exists: { errorMessage: 'doctor.endTime is required' },
    matches: {
      options: [/^([01]\d|2[0-3]):([0-5]\d)$/],
      errorMessage: 'doctor.endTime must be in HH:MM format (24-hour)',
    },
  },
  'doctor.slotDuration': {
    in: ['body'],
    exists: { errorMessage: 'doctor.slotDuration is required' },
    isInt: {
      options: { min: 1 },
      errorMessage: 'doctor.slotDuration must be a positive integer',
    },
    toInt: true,
  },
});
