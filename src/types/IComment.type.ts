import type { IUser } from "./IUser.type";

export interface IComment {
    id: number;
    date: number;
    user: IUser;
    text: string;
    likes: number;
    iLikedIt: boolean;
}