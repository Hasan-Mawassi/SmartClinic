import { checkSchema } from 'express-validator';

export const voiceChatValidator = checkSchema({
  userName: {
    in: ['body'],
    exists: { errorMessage: 'userName is required' },
    isInt: { errorMessage: 'userName must be a Int' },
    notEmpty: { errorMessage: 'userName cannot be empty' },
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
    isString: { errorMessage: 'doctor.startTime must be a string (e.g., "09:00")' },
    matches: {
      options: [/^\d{2}:\d{2}$/],
      errorMessage: 'doctor.startTime must be in HH:MM format',
    },
  },
  'doctor.endTime': {
    in: ['body'],
    exists: { errorMessage: 'doctor.endTime is required' },
    isString: { errorMessage: 'doctor.endTime must be a string (e.g., "18:00")' },
    matches: {
      options: [/^\d{2}:\d{2}$/],
      errorMessage: 'doctor.endTime must be in HH:MM format',
    },
  },
  'doctor.slotDuration': {
    in: ['body'],
    exists: { errorMessage: 'doctor.slotDuration is required' },
    isInt: { errorMessage: 'doctor.slotDuration must be an integer (minutes)' },
    toInt: true,
  },
  audioBase64: {
    in: ['body'],
    exists: { errorMessage: 'audioBase64 is required' },
    isString: { errorMessage: 'audioBase64 must be a valid base64-encoded string' },
    notEmpty: { errorMessage: 'audioBase64 cannot be empty' },
  },
  fileType: {
    in: ['body'],
    exists: { errorMessage: 'fileType is required' },
    isString: { errorMessage: 'fileType must be a string (e.g., "m4a")' },
    isIn: {
      options: [['m4a', 'mp3', 'wav']],
      errorMessage: 'fileType must be one of: m4a, mp3, wav',
    },
  },
});
