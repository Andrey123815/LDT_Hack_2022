import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URLS} from "../API.js";

export const fetchPersonalRoutes = createAsyncThunk(
  'personalRoutes/fetchPersonalRoutes',
  async ({tripTeamType, additionalMembers, interests, transport, freeTime}) => {
    const response = await axios.get(API_URLS.getPersonalRoutes({
      who: tripTeamType,
      with: additionalMembers,
      interests,
      transport,
      time: freeTime
    }));
    return response.data;
  }
);
