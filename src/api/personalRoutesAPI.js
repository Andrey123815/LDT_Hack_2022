import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URLS} from "../API.js";

const INTERESTS_MAP = {
  'Прогулка': 'promenade',
  'Активность': 'activity',
  'Природа': 'nature',
  'Наука': 'science',
  'Национальный колорит': 'national',
  'Ремесло': 'workshop',
  'Творчество': 'creation',
  'Для детей': 'kids',
  'Технологии': 'tech',
  'Моя страна': 'about_russia',
};

export const fetchPersonalRoutes = createAsyncThunk(
  'personalRoutes/fetchPersonalRoutes',
  async ({tripTeamType, additionalMembers, interests, transport, freeTime}) => {
    const response = await axios.get(API_URLS.getPersonalRoutes({
      with: tripTeamType,
      kids: additionalMembers === 'Дети',
      animals: additionalMembers === 'Животные',
      interests: interests.map(interest => INTERESTS_MAP[interest]),
      transport,
      time: freeTime
    }));
    return response.data;
  }
);
