import WineInstance from "./instance";
import ApiResponse from "../../types/ApiResponse";
import { AxiosResponse } from "axios";

export async function getAllProducts() {
  try {
    const { data }: AxiosResponse<ApiResponse> = await WineInstance.get('/');
    return data;
  } catch (error) {
    console.log('Error ocurred during API request');
    throw error;
  }
}
