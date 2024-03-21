import { BrowserRouter, NavLink, Route,Routes } from 'react-router-dom';
import './App.css';

import Allteams from './Component/teams/Allteams';
import Team from './Component/teams/Team';
import { useGlobalContext } from './Context';

function App() {
  const {selctTeam,nbTeam} = useGlobalContext();
  return (
    <div>
      <BrowserRouter> 
        <nav style={{width:'200px',display:'flex',justifyContent:'space-evenly'}}>
          <NavLink to='/' activeclassname='active'>Home</NavLink>
          <NavLink to='/team' activeclassname='active' >Team</NavLink>
        </nav>
          <h1 style={{textAlign:'center'}}>Team Member Allocation</h1>
          <h3 style={{textAlign:'center'}}>{selctTeam} Has {nbTeam} Members</h3>
        <Routes>
          <Route index='/' element={<Team/>}/>
          <Route path='/team' element={<Allteams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
