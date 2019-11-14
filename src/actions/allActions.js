import axios from "axios";

const token = window.localStorage.getItem("token");

export const createPosts = (title,text) => async () => {
   
    const data = {
        text:text,
        title:title,
    }
    
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', data,
		{
			headers: {auth:token}
		}
	)
}
export const createComment = (text) => async () => {
    
    const data = {
        text:text,

	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/7WMkGM04t3FV4JTubgu1/comment', data,
		{
			headers: {auth:token}
		}
	)
	
}
/*/////////////////////////////////////////// PUT Vote ///////////////////////////////////////////////////
export const = (text) => async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdXTWtHTTA0dDNGVjRKVHViZ3UxIiwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNTczNjYzMDM2fQ.cBHm6rRGjWFLqMZA2zrpdkdOut93ZYU-2H_SLAb0OxY"
    const dados = {
        text:text,

	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/7WMkGM04t3FV4JTubgu1/comment', dados,
		{
			headers: {auth:token}
		}
	)
	
}


export const setPosts = (posts) => ({
  type: "SET_POSTS",
  payload: {
    posts
  }
});

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
    {
      headers: {
        auth: token,
      }
		});
	dispatch(setPosts(response.data.posts));
};

export const setSelectedPost= (postId) => ({
  type: "SET_SELECTED_POST",
  payload: {
    postId: postId,
  }
});

export const getPostDetails = (postId) => async (dispatch, getState) => {
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}`,
    {
      headers: {
        auth: token,
      }
    });
  
  dispatch(setSelectedPost(response.data.posts));
};

export const setPostDetails= (postDetails) => ({
  type: "SET_POST_DETAILS",
  payload: {
    postDetails: postDetails,
  }
});
