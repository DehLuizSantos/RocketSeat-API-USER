import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlredyExist = this.usersRepository.findByEmail(email);
    if (emailAlredyExist) {
      throw new Error("Email already exists!");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
