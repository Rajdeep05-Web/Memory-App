import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPost} from '../../actions/posts';
import { useParams, useNavigate } from 'react-router-dom';

import './style.css';


const PostDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams(); 
    
    useEffect(() => {
        dispatch(getPost(id));
    },[id,dispatch]);
        
    const {post} = useSelector((state) => state.posts );
    
    
    if(!post){
        return (
            <div>
                {/* <h1>Post not found</h1> */}
                <div class="loader4"></div>
            </div>
        );
    }
    
    return(
        <div className='post-container'>
        <section className='details'>
              <p className='creator' >Creator : {post?.name}</p>
              <h1 className='place' >Place : {post?.title}</h1>
              <p className='message'> Message : {post?.message}</p>
              <p className='tags' > Tags : {post?.tags.map((tag) => `#${tag} `)}</p>
              <p className='like' >{post?.likes.length} {post?.likes.length>1 ? "Likes" : "Like"}</p>
        </section>
        <img src={post?.selectedFile} alt="img" className='post-img'/>
          
          
      </div>
    )

    
    
}

export default PostDetails;