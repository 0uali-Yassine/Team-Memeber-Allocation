import React from 'react'
import { useGlobalContext } from '../../Context';

function Allteams() {
  const {teams,setSelctTeam} = useGlobalContext();
  return (
    <div>
      <div style={{border:'1px solid black',margin:'4px'}}>
        <h2 style={{border:'1px solid black',textAlign:'center',cursor:'pointer'}} onClick={()=> setSelctTeam('TeamA')}>TeamName: TeamA</h2>
        <div>
            {
              teams.map(tm => {
                const {fullName,designation,teamName,id} = tm;
                if(teamName === 'TeamA'){
                  return <div key={id} style={{marginBottom:'4px',textAlign:'center'}}>
                    <p><strong>FullName:</strong>{fullName}</p>
                    <p><strong>Designation</strong>{designation}</p>
                 </div>
                }
              })
            }
        </div>
      </div>

      <div style={{border:'1px solid black',margin:'4px'}}>
        <h2 style={{border:'1px solid black',textAlign:'center',cursor:'pointer'}} onClick={()=> setSelctTeam('TeamB')}>TeamName: TeamB</h2>
        <div>
            {
              teams.map(tm => {
                const {fullName,designation,teamName,id} = tm;
                if(teamName === 'TeamB'){
                  return <div key={id}  style={{marginBottom:'4px',textAlign:'center'}}>
                    <p><strong>FullName:</strong>{fullName}</p>
                    <p><strong>Designation</strong>{designation}</p>
                 </div>
                }
              })
            }
        </div>
      </div>
      
      <div style={{border:'1px solid black',margin:'4px'}}>
        <h2 style={{border:'1px solid black',textAlign:'center',cursor:'pointer'}} onClick={()=> setSelctTeam('TeamC')}>TeamName: TeamC</h2>
        <div>
            {
              teams.map(tm => {
                const {fullName,designation,teamName,id} = tm;
                if(teamName === 'TeamC'){
                  return <div key={id} style={{marginBottom:'4px',textAlign:'center'}}>
                    <p><strong>FullName:</strong>{fullName}</p>
                    <p><strong>Designation</strong>{designation}</p>
                 </div>
                }
              })
            }
        </div>
      </div>

      <div style={{border:'1px solid black',margin:'4px'}}>
        <h2 style={{border:'1px solid black',textAlign:'center',cursor:'pointer'}} onClick={()=> setSelctTeam('TeamD')}>TeamName: TeamD</h2>
        <div>
            {
              teams.map(tm => {
                const {fullName,designation,teamName,id} = tm;
                if(teamName === 'TeamD'){
                  return <div key={id} style={{marginBottom:'4px',textAlign:'center'}}>
                    <p><strong>FullName:</strong>{fullName}</p>
                    <p><strong>Designation</strong>{designation}</p>
                 </div>
                }
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Allteams;
