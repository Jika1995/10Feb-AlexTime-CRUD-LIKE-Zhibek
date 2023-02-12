import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = ({posts, deletePost, getOnePost}) => {
    return (
        <>
            <center style={{ fontSize: '30px', margin: '20px' }}>Posts</center>
            <div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
                {posts?.map(item => ( //если да, то точка map () - это сразу return если false то null, ничего не делает. если true, то иди в map
                     <PostCard key={item.id} item={item} deletePost={deletePost} getOnePost={getOnePost}/>
                ))}
            </div> 
        </>
    )
};

export default PostList