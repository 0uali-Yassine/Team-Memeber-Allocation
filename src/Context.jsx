import React, { createContext, useContext, useEffect, useState } from 'react';
import {data} from './data';
const mycontext = createContext();

function Context({children}) {
    const [teams,setTeams] = useState(JSON.parse(localStorage.getItem('teams')) || data);
    const [selctTeam,setSelctTeam] = useState(JSON.parse(localStorage.getItem('selctTeam')) || 'TeamA');
    const [nbTeam,setNbTeam] = useState(0);

    function change(team,id){
        setTeams(prev => prev.map(tm =>{
            if(tm.id === id){
               if(Object.values(tm).includes(team)){
                return {...tm,teamName:'TeamN'}
               }else{
                 return {...tm,teamName:team};
               }
            }else{
                return tm;
            }
        }))
    }

    useEffect(()=>{
        let nb = 0;
        teams.map(tm =>{
            if(tm.teamName === selctTeam){
                nb++;
            }
            return tm;
        })
        setNbTeam(nb);
        localStorage.setItem('teams',JSON.stringify(teams));
        localStorage.setItem('selctTeam',JSON.stringify(selctTeam));
    },[selctTeam,teams])

  return (
    <mycontext.Provider value={{teams,selctTeam,setSelctTeam,change,nbTeam}}>
        {children}
    </mycontext.Provider>
  )
}

export function useGlobalContext(){
    return useContext(mycontext);
}

export default Context;
