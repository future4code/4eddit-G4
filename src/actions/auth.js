import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


 export const loginAuth = (email, password) => async dispatch => {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login",
        {
          email,
          password
        }
      );
      console.log("dados:", response)
      window.localStorage.setItem ("token", response.data.token);
        dispatch(push(routes.feed));
    } catch (e) {
      console.log(e.message)
    }
 }
