import axios from "axios";
import { Await } from "react-router-dom";

const url = "  http://localhost:3002";

export const getPatients = async () => {
  try {
    const response = await axios.get(`${url}/patients`);
    return response.data;
  } catch (error) {
    console.error('Error getting patients:', error);
    throw error;
  }
};

/*export const addNewUser = async (data) => {
    const {data:existingdata}=await axios.get(`${url}/patients`)
    const Max= 
  }*/