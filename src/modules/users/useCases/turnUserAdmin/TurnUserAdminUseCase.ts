// import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): void {
    console.log(user_id);
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User do not exist");
    }
    this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
