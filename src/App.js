import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Routing from './routes'
import Admin from './Components/Admin/Admin';


function App() {
  return (
    <div className="App">
       <Router>
       <Routing />
       </Router>
    </div>
  );
}

export default App;

