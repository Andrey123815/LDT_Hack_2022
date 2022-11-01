import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URLS} from "../API.js";

export const fetchPlaces = createAsyncThunk(
  'places/fetchPlaces',
  async () => {
    const response = await axios.get(API_URLS.getPlaces);
    return response.data;
  }
);
