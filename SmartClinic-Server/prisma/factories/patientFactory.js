import { faker } from '@faker-js/faker'

export const patientFactory = ()=>{
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    weight: parseFloat(faker.number.float({ min: 50, max: 100 }).toFixed(2)),
    date_of_birth: faker.date.birthdate(),
    profile_pic: faker.image.avatar(),
  }
}
