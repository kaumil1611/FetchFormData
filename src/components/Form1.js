import React, { useState } from 'react'
import Select from "react-select";

const gender= ['Male','Female','Other'] ;

const Form1 = (props) => {
    
    let hobby = [{id:1,hobbyName:'Cricket'} , {id:2,hobbyName:'Footbal'}, {id:3,hobbyName:'Reading'} , {id:4,hobbyName:'Researching'}];
    let countryList = [{value:1,label:'India'}, {value:2,label:'Australia'}, {value:3,label:'Germany'}, {value:4,label:'Russia'}, {value:5,label:'United States of America'} , {value:6,label:'United Kingdom'}]

    const [userName,setUserName] =useState('');
    

    const [userEmail,setUserEmail] =useState('');


    const [userMobile,setUserMobile] =useState('');
    const [userAge,setUserAge] =useState('');
    const [userGender,setUserGender] =useState(gender);
    const [checkGender,setCheckGender] =useState(false);
    const [userHobby,setUserHobby] = useState([]);
   
    const [userCountry,setUserCountry] = useState(null);
    const [userPassword,setUserPassword] = useState('');

    const ddlHandler = (e) => {
        setUserCountry(e.label);
    }
 
    const onRadioChangeHandler =(e) =>{
        
        if(checkGender !== e.target.checked){
            console.log(e.target.checked);
            console.log(e.target.value);
            setCheckGender(e.target.checked);
            setUserGender(e.target.value);
        }
    }
    
   const submitHandler =(e) =>{
        e.preventDefault();
        console.log(userGender);



        const allData = {
            name: userName,
            email: userEmail,
            mobileNo : userMobile,
            age: userAge,
            gender: userGender,
            hobby: userHobby,
            country: userCountry,
            password: userPassword,
        }

        if(userName === '' || userEmail==="" || userMobile==='' ||userAge=== '' || userGender==='' || userHobby==='' || userCountry === '' || userPassword === ''){
           alert('plese Enter Value');
    }
    else{

        props.data(allData);
    
    setUserName('');
    setUserEmail('');
    setUserMobile('');
    setUserAge('');
    setUserCountry(null);
    setUserGender('');
    setCheckGender('');
    setUserHobby('');
    
    setUserPassword('');
    
   }
   
   }

   const getHobbi = (e) =>{
       let temp_data = userHobby;
       let index_value = temp_data.indexOf(e.target.value);

       if(temp_data.includes(e.target.value)){
           temp_data.splice(index_value,1);
           setUserHobby(temp_data);
       }
       else{
           temp_data.push(e.target.value);
           setUserHobby(temp_data);
       }
   }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input className="form-control form-control-lg form_data"  type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Add User Name" />
                <input className="form-control form-control-lg form_data"  type="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder="Add User Email" />
               
                <input type="tel" className="form-control form-control-lg form_data" onChange={(e) => setUserMobile(e.target.value)} value={userMobile} placeholder="enter your name" title="Error Message" pattern="[1-9]{1}[0-9]{9}" />
                <input type="number" className="form-control form-control-lg form_data" onChange={(e) => setUserAge(e.target.value)} value={userAge}  placeholder="enter age" />
                <label htmlFor="Male"> Gender </label> &nbsp; &nbsp; &nbsp;
                {userGender.map((result,index) => (
                    <div key={index}>
                        <div className="form-check form-check-inline" >
                            {/* <input className="form-check-input"  type="radio" onChange={(e) => setUserGender(e.target.value)}  name="exampleRadios"  value={result}  /> */}
                            <input className="form-check-input"  type="radio" onChange={onRadioChangeHandler} checked={checkGender.checked} name="exampleRadios"  value={result}  />
                            <label className="form-check-label" htmlFor={result}>
                                {result}
                            </label>
                        </div>
                    </div>
                ))}
                <br />
                <br/>
                <label> Hobby </label> &nbsp; &nbsp; &nbsp;
                
                {hobby.map((result,index) => (
                    <div className="form-check form-check-inline" key={index}>
                        <input className="form-check-input" type="checkbox" onChange={e=>getHobbi(e)} name={result.hobbyName} value={result.hobbyName} />
                        <label className="form-check-label" htmlFor={result}>{result.hobbyName}</label>
                    </div>
                ))}
                <div className="form-group col-md-12">
                    <Select options={countryList} className="form-control" onChange={ddlHandler}/>
                  
                </div>
                <input type="password" className="form-control form-control-lg form_data" onChange={e => setUserPassword(e.target.value)} value={userPassword} id="inputPassword" placeholder="Password"></input>
                <button type="text" className="btn btn-outline-success button">Add User Details</button>
            </form>
        </div>
    )
}


export default Form1;