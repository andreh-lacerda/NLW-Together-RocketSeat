import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });

    if(!user) {
      throw new Error("Incorrect e-mail/password");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Incorrect e-mail/password");
    }

    const token = sign(
      {
        email: user.email,
      }, 
        "668685580583b0b9a11565ce6d59a570", 
      {
        subject : user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService }