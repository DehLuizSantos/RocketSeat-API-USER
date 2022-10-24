import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  id?: string;
  created_at: string;
  admin?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
