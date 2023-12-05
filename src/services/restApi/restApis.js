import axios from "axios";
import { URL } from "../constants/CONSTANTS";

export const addColor = (color) => {
  return axios({
    method: "post",
    url: `${URL}colors`,
    data: color,
  });
};
export const addPartyForm = (data) => {
  return axios({
    method: "post",
    url: `${URL}parties`,
    data,
  });
};

export const getParties = () => {
  return axios({
    method: "get",
    url: `${URL}parties`,
  });
};
