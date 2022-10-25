import './App.scss'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {NAV_ITEMS} from "./configurations/navigation.jsx";

function App() {

  return (
    <div className="app">
      <Router>
        <main>
          <Routes>
            {NAV_ITEMS.map(({path, element}) =>
              <Route key={path} path={path} element={element} />
            )}
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
