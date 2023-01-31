import type { IComment } from "./IComment.type";

export interface IDiscussion extends IComment {
    replies: IComment[];
}