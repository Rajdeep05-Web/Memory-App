import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './style.css';

import {getPost} from '../../actions/posts';

const PostDetails = () => {

    const {post} = useSelector((state) => state.posts );
    const {id} = useParams(); 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPost(id));
    },[id]);   
    
    if(!post) return null;

    return (
        <div className='post-container'>
          <section className='details'>
                <h1>{post.title}</h1>
                <p>{post.message}</p>
                <p>{post.tags.map((tag) => `#${tag} `)}</p>
                <p>{post.name}</p>
                <p>{post.likes.length} likes</p>
          </section>
          <img src={post.selectedFile} alt="img" className='post-img'/>
            
            
        </div>
    )
}

export default PostDetails;