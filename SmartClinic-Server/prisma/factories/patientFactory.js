import { faker } from '@faker-js/faker'

export const patientFactory = ()=>{
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: "123123",
    weight: parseFloat(faker.number.float({ min: 50, max: 100 }).toFixed(2)),
    gender: faker.number.int({ min: 0, max: 2 }),
    date_of_birth: faker.date.birthdate(),
    profile_pic: faker.image.avatar(),
  }
}
