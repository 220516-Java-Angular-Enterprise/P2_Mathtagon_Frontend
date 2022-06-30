import { User } from './user';

export interface Score {
  totalScore: number;
  bestScore: number;
  level: number;
  userID: User;
}
