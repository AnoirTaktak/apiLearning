import axios from 'axios';
import React, { useState } from 'react'

const UserList = () => {
    const [message, setmessage] = useState('');  
    const [data, setdata] = useState(''); 
    
   const handleClick  = () =>{
    try { axios.get('http://api.weatherapi.com/v1/current.json?key=d98182cd5d9649f6aaa133351220606&q='+message+'&aqi=no')
    .then(res => {
      const persons = res.data;
      setdata({ persons });
    }
      )
     
    } catch (error) {
      console.log(error)
    }
    console.log(data)
     }

  return (
    <div>
       Enter City<input type='text' value={message} onChange={(e)=>setmessage(e.target.value)} />
       <button onClick={handleClick}>More</button>
       {data.length===0 ? 
       <h4>enter a city name</h4>
       :
       <div>
       <h1>{data.persons.location.country},{data.persons.location.name}</h1>
       <h2>{data.persons.location.tz_id}</h2>
       <h3>last update at : </h3>
       <p>{data.persons.current.last_updated}</p>
       <h3>cloud : </h3>
       <p>{data.persons.current.cloud}</p>
       <h3>condition : </h3>
       <p>{data.persons.current.condition.text}</p>
       <h3>Humidity : </h3>
       <p>{data.persons.current.humidity}</p>
       <h3>Temp C° : </h3>
       <p>{data.persons.current.temp_c}</p>
       <h3>winds (per kilometre) : </h3>
       <p>{data.persons.current.wind_kph}</p>
       </div>
      }
      
    </div>
  )
}

export default UserList