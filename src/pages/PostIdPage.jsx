import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from "react";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([])
	
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})
	
	const [fetchCommentsById, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getcommentsByPostId(params.id)
		setComments(response.data)
	})
	
	useEffect(() => {
		fetchPostById(params.id)
		fetchCommentsById(params.id)
	}, [])
	return (
		<div>
			<h1>Вы открыли страницу поста с ID = {params.id}</h1>
			{isLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
				:	<div>{post.id}. {post.title}</div>
			}
			<div>Комментарии</div>
			{isLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
				:	<div>
						{comments.map(comm =>
							<div key={comm.id} style={{marginTop: 15}}>
								<h5>{comm.email}</h5>
								<div>{comm.body}</div>
							</div>
						)}
					</div>
			}
		</div>
	);
};

export default PostIdPage;