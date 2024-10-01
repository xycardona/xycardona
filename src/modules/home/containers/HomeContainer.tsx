//import { useEffect, useState } from "react";
import { Post } from "../types/post";
import { getPosts } from "../services/post";
import useFetch from "../../../core/hooks/useFetch";
import PostMetadata from "../../../core/myComponents/Post/PostMetadata/PostMetadata";

const HomeContainer = () => {
 
 /*const [posts, setPosts] = useState<Post[]>([]);
 const getPostAsync = async () => {
  console.log("Obteniendo el post...")
  const data=await getPosts();
  setPosts(data);
 };
    useEffect(() => {
     // getPosts().then((data) => setPosts(data));
     getPostAsync();
    },[]);
    */

    const {data,loading,error} = useFetch<Post>(getPosts);

    if(error){
      return<span>{error}</span>;
    }
    return (
      <div>
        <PostMetadata
        createdAt="2024-09-23 12:00"
        fullname="Yami Card"
        username="xy"
        verified
        />
        {loading && <span>Loading...</span>}
      
    {data.map((post,key) => (
    <span key={'post-${key}'}>{post.content}</span>
   ))}
      </div>  
    );
};
export default HomeContainer;