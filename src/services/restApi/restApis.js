import axios from "axios";
import { URL } from "../constants/CONSTANTS";

export const addColor = (color) => {
  return axios({
    method: "post",
    url: `${URL}colors`,
    data: color,
  });
};

export const addSku = (sku) => {
  return axios({
    method: "post",
    url: `${URL}sku`,
    data: sku,
  });
};
