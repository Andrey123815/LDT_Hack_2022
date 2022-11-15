import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {NAVIGATION} from "./configurations/navigation.jsx";
import {useEffect} from "react";
import {fetchInterests} from "./api/interestsAPI.js";
import {useDispatch} from "react-redux";
import {fetchPlaces} from "./api/placesAPI.js";
import {useGeolocation} from "./libraries/geolocation.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);

  const [lng, ltd, status] = useGeolocation();
  if (lng || ltd) {
    console.log(lng, ltd, status);
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          {NAVIGATION.global.map(({path, element}) =>
            <Route key={path} path={path} element={element} />
          )}
          {NAVIGATION.questionnaire.map(({path, element}) =>
            <Route key={path} path={path} element={element} />
          )}
        </Routes>
      </Router>
    </div>
  )
}

export default App
