import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {NAVIGATION} from "./configurations/navigation.jsx";

function App() {

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
