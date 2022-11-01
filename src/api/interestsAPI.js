import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URLS} from "../API.js";

export const fetchInterests = createAsyncThunk(
  'interests/fetchInterests',
  async () => {
    const response = await axios.get(API_URLS.getQuestionnaireInterests);
    return response.data;
  }
);
