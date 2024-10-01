//import {wait} from "../../../core/utils/wait";
import {Post} from "../types/post";
import {post} from "./_mocks/post";
export const getPosts = () : Promise<Post[]> => {
   // await WakeLockSentinel(1000);
return new Promise ((resolve) => {
    resolve(post);
});
};

