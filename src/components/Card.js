import React,{useState} from 'react';
import Form1 from './Form';

import '../css/Card.css';
const Card = () => {

const [fetchData,setFetchData]  = useState('');
   const getData = (e) =>{
       //console.log(e);
       setFetchData(e);
   }
// console.log("hello ",fetchData.hobby && fetchData.hobby)
    return (
    <div className="card card1">
        
            <div className="hadding"> 
                <h1>Task Manager</h1>
                <div className="hadding_bottom"></div>
                    <div className="data_container">
                        <Form1 data={getData}/>
                       
                    </div>
                    <div className="card">
                        <div className="card-body">
                           <h3>{fetchData.name}</h3>
                           <h4>{fetchData.email}</h4>
                           <h5>{fetchData.mobileNo}</h5>
                           <h5>{fetchData.age}</h5>
                           <h5>{fetchData.gender}</h5>
                           <h5>{fetchData.country}</h5>
                           <h5>{fetchData.hobby && fetchData.hobby.join(" ")}</h5>
                           <h5>{fetchData.password}</h5>
                          
                        </div>
                    </div>
                </div>
            </div>

)
}

export default Card;