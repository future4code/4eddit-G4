import axios from "axios";




export const createNewUser = (email, password, username) => async (dispatch) => {
   
  const data = {
     email: email,
     password: password,
     username: username,
   }

   
  const response = await axios.post (
    "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup", 
    data,
  );
};



 


