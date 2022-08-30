import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Routing from './routes'
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
      <Admin />
      <Router>
       <Routing />
      </Router>
    </div>
  );
}

export default App;

