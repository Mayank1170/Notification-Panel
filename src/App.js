import LoginPage from './Components/LoginPage'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import ConstructionFlow from './Pages/ConstructionFlow';
import Profile from './Pages/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
       <Navbar />
        <div className="mt-3 h-0.5 self-stretch bg-neutral-50 opacity-10"></div>
        <Sidebar />
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/constructionflow' element={<ConstructionFlow/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
