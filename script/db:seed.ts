import { User, userRepo } from "../src/repo.js";

userRepo.insert({name: 'Fajar', email: 'fajar@mail.com', password: 'rahasia'})
userRepo.insert({name: 'Ilham', email: 'ilham@mail.com', password: 'rahasia'})
console.log(userRepo.all())