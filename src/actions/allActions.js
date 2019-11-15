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
////////////////////////////////////////// PUT VotePostUP///////////////////////////////////////////////////
export const VotePostUp= (direction) => async () => {
   
    const dados = {
        direction: 1,
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/O0rHLJpSHgYIWwKWW4ws/vote', dados,

		{
			headers: {auth:token}
		}
	)
}

////////////////////////////////////////// PUT VotePostDOWN///////////////////////////////////////////////////
export const VotePostDown= (direction) => async () => {
    
    const dados = {
        direction: -1,
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/O0rHLJpSHgYIWwKWW4ws/vote', dados,
		{
			headers: {auth:token}
		}
	)
}


/////////////////////////////////////////// PUT VotePostZERO//////////////////////////////////////////////////
export const VotePostZero= (direction) => async () => {
    
    const dados = {
        direction: 0,
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/O0rHLJpSHgYIWwKWW4ws/vote', dados,
		{
			headers: {auth:token}
		}
	)
}
////////////////////////////////////////// PUT VoteCommentUP///////////////////////////////////////////////////
export const VoteCommentUp= (direction) => async () => {
    const dados = {
        direction: 1
	}

	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/XFM8JtoESiWKqCml3Rjz/comment/RVxZpEL8AaSaoA9nOWNF/vote', dados,
		{
			headers: {auth:token}
		}
		
	)
}
////////////////////////////////////////// PUT VoteCommentDOWN///////////////////////////////////////////////////
export const VoteCommentDown= (direction) => async () => {
    const dados = {
        direction: -1
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/XFM8JtoESiWKqCml3Rjz/comment/RVxZpEL8AaSaoA9nOWNF/vote', dados,
		{
			headers: {auth:token}
		}
		
	)
}
//////////////////////////////////////// PUT VoteCommentZERO///////////////////////////////////////////////////
export const VoteCommentZero= (direction) => async () => {
    const dados = {
        direction: 0
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/XFM8JtoESiWKqCml3Rjz/comment/RVxZpEL8AaSaoA9nOWNF/vote', dados,
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

export const setPostDetails= (postDetails) => ({
  type: "SET_POST_DETAILS",
  payload: {
    postDetails: postDetails,
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
  
  dispatch(setPostDetails(response.data.post));
};



