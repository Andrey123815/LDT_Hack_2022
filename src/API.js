import axios from "axios";

const BASE_URI = 'https://www.sanviteam.tk/api/';

axios.defaults.headers.common['content-type'] = 'application/json' // for all requests

const formatQueryParamByType = (param) => {
  if (param instanceof Array) {
    return `${param.join(',')}`;
  }

  return `${param}`;
}

export const API_URLS = {
  getPlaces: BASE_URI + 'places/get',
  getPlacesByID: (id) => BASE_URI + `'places/get${id}`,
  getQuestionnaireInterests: BASE_URI + 'interests/get',
  getPopularRoutes: BASE_URI + 'routes/popular',
  getPersonalRoutes: (settingsObj) => {
    let url = BASE_URI + 'routes/personal';
    let firstParam = true;
    for (let key in settingsObj) {
      if (settingsObj[key]) {
        url += `${(firstParam ? '?' : '&')}${key}=${formatQueryParamByType(settingsObj[key])}`;
        firstParam = false;
      }
    }

    return url;
  }
};
