import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

const users: User[] = [
  {
    userId: 1,
    password: 'Hellowrold',
    username: 'navid',
  },
  {
    userId: 2,
    password: 'Dontknow',
    username: 'Alice',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
