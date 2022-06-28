import { Game } from "./game";

export interface User {
    userID: string;
    username: string;
    password: string;
    email: string;
    fullname: string;
    age: number;
    games: Game[];
}