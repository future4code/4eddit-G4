import axios from "axios";

////////////////////////////////////////// POST Create Post ///////////////////////////////////////////////////
export const createPosts = (title,text) => async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdXTWtHTTA0dDNGVjRKVHViZ3UxIiwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNTczNjYzMDM2fQ.cBHm6rRGjWFLqMZA2zrpdkdOut93ZYU-2H_SLAb0OxY"
    const dados = {
        text:text,
        title:title,
    }
    
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', dados,
		{
			headers: {auth:token}
		}
	)
}

////////////////////////////////////////// POST Create Comment///////////////////////////////////////////////////
export const createComment = (text) => async () => {
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

*/