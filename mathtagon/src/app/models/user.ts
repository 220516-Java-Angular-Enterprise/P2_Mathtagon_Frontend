import { Game } from './game';

export interface User {
  userID: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  age: number;
  games: Game[];
}
