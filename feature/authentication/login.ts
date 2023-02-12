import axios from "axios";
import { AUTH_URL } from "../config";

const AUTH_URL_EMAIL = AUTH_URL + "email/login";

export const authEmail = (email: string, password: string) => {
  return axios.post(AUTH_URL_EMAIL, {
    email,
    password,
  });
};
