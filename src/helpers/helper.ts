import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

export const mergePostComments = (posts: IPost[], comments: IComment[]): IPost[] => {
    let map: IPost[] = posts.map((value) => ({...value, comments: []}));
    for (const post of map) {
        for (const comment of comments) {
            if (post.id === comment.id) {
                post.comments?.push(comment);
            }
        }
    }
    return map;

}