import LoginPage from './Components/LoginPage'
import Dashboard from './Pages/Dashboard'
import ConstructionFlow from './Pages/ConstructionFlow';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/constructionflow' element={<ConstructionFlow/>}/>
      </Routes>
    </div>
  );
}

export default App;
