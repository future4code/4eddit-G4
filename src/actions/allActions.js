import axios from "axios";
//const token = window.localStorage.getItem("token");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdXTWtHTTA0dDNGVjRKVHViZ3UxIiwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNTczNjYzMDM2fQ.cBHm6rRGjWFLqMZA2zrpdkdOut93ZYU-2H_SLAb0OxY"
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
/////////////////////////////////////////// PUT VoteComment ///////////////////////////////////////////////////
export const VoteComment = (direction) => async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdXTWtHTTA0dDNGVjRKVHViZ3UxIiwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNTczNjYzMDM2fQ.cBHm6rRGjWFLqMZA2zrpdkdOut93ZYU-2H_SLAb0OxY"
    const dados = {
        direction:direction,
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/XFM8JtoESiWKqCml3Rjz/comment/RVxZpEL8AaSaoA9nOWNF/vote', dados,
		{
			headers: {auth:token}
		}
	)
}
/*////////////////////////////////////////// PUT VotePost///////////////////////////////////////////////////
export const VotePost = (direction) => async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdXTWtHTTA0dDNGVjRKVHViZ3UxIiwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNTczNjYzMDM2fQ.cBHm6rRGjWFLqMZA2zrpdkdOut93ZYU-2H_SLAb0OxY"
    const dados = {
        direction:direction,
	}
	const response = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/XFM8JtoESiWKqCml3Rjz/comment/RVxZpEL8AaSaoA9nOWNF/vote', dados,
		{
			headers: {auth:token}
		}
	)
}*/
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
  