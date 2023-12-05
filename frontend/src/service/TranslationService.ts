import axios from "axios";
import { API } from "../model/api";

export function translateToHuman(phrase: string) {
  return axios.get(API.translateToHuman + phrase);
}