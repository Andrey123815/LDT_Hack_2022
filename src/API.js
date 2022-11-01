import axios from "axios";

const BASE_URI = 'https://www.sanviteam.tk/api/';

axios.defaults.headers.common['content-type'] = 'application/json' // for all requests

export const API_URLS = {
  getPlaces: BASE_URI + 'places/get',
  getPlacesByID: (id) => BASE_URI + `'places/get${id}`,
  getQuestionnaireInterests: BASE_URI + 'interests/get',
  getPopularRoutes: BASE_URI + 'routes/popular',
  getPersonalRoutes: (interests, who, withWho, transport, time) =>
    BASE_URI + `routes/personal?
    interests=${interests.join(',')}&
    who=${who}&with=${withWho}&
    transport=${transport}&
    time=${time}`,
};
