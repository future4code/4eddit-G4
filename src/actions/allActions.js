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
  