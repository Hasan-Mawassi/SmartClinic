import { faker } from '@faker-js/faker'

export const patientFactory = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  password:"123123",
  weight: parseFloat(faker.number.float({ min: 50, max: 100 }).toFixed(2)),
  gender: faker.number.int({ min: 0, max: 1 }),
  date_of_birth: faker.date.birthdate(),
  profile_pic: faker.image.avatar(),
  bloodGroup: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
});
