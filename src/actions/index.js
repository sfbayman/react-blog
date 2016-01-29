import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST ='FETCH_POST';
export const DELETE_POST ='DELETE_POST';

const ROOT_URL = '	http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=polis';

// action creator
export  function fetchPosts(){
	const response = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: response
	};
}


export function createPost(props){
	console.log('#props');
	console.log(props);
	const response = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);

	return {
		type : CREATE_POST,
		payload : response
	}
}

export function fetchPost(id){
	const response = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type : FETCH_POST,
		payload : response
	}
}

export function deletePost(id){
	const response = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type : DELETE_POST,
		payload : response
	}
}