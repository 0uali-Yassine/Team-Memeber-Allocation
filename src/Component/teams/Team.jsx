import React from 'react'
import { useGlobalContext } from '../../Context';
import female from '../asset/femaleProfile.jpg';
import male from '../asset/maleProfile.jpg';

function Team() {
    const {teams,selctTeam,setSelctTeam,change} = useGlobalContext();
  return (
    <div style={{maxWidth:'600px',margin:'auto'}}>
      <select onChange={(e) => setSelctTeam(e.target.value)} style={{width:'300px',padding:'10px',outline:'none',margin:'10px 51px'}}>
        <option value='TeamA'>Team A</option>
        <option value='TeamB'>Team B</option>
        <option value='TeamC'>Team C</option>
        <option value='TeamD'>Team D</option>
      </select>
      <hr />
      <div style={{margin:'auto',display:'grid',maxWidth:'100%',gap:'10px',gridTemplateColumns:'repeat(auto-fit,189px)'}}>
        {
          teams.map(team => {
              const {id,fullName,designation,gender,teamName}= team;
              return <div key={id} onClick={()=>  change(selctTeam,id)} className={`${selctTeam === teamName? teamName:null } team`} >
                  <img src={gender ==='male'? male : female} alt={fullName} />
                  <h5>FullName:{fullName}</h5>
                  <h5><strong>designation:</strong>{designation}</h5>
              </div>
          })
        }
      </div>
    </div>

  )
}

export default Team
