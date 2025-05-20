import { faker } from '@faker-js/faker';

export const doctorFactory = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: "123123",
    yearsExperience: faker.number.int({ min: 1, max: 40 }),
    profilePicture: faker.image.avatar(),
  };
};