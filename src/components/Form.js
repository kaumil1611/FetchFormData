import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown } from 'react-bootstrap';
const Form = (props) => {
    let gender= [{id:1,gn:'Male'},{id:2,gn:'Female'},{id:3,gn:'Other'}] ;
    let hobby = [{id:1,hobbyName:'Cricket'} , {id:2,hobbyName:'Footbal'}, {id:3,hobbyName:'Reading'} , {id:4,hobbyName:'Researching'}];
    let countryList = [{value:1,label:'India'}, {value:2,label:'Australia'}, {value:3,label:'Germany'}, {value:4,label:'Russia'}, {value:5,label:'United States of America'} , {value:6,label:'United Kingdom'}]

    const [userName,setUserName] =useState('');
    

    const [userEmail,setUserEmail] =useState('');


    const [userMobile,setUserMobile] =useState('');
    const [userAge,setUserAge] =useState('');
    const [userGender,setUserGender] =useState('');
    const [checkBoxVal,setCheckBoxVal] = useState([]);
   
    const [userCountry,setUserCountry] = useState(countryList[0].label);
    const [userPassword,setUserPassword] = useState('');

    const checkBoxHandler = (checkValue,checked) =>{
        let isValid = checked;
        if(isValid){
            setCheckBoxVal((prevValue)=>{
                return [ ...prevValue , checkValue ];
            });
        }
        else{
            if(checkBoxVal.includes(checkValue)){
                let newArray = checkBoxVal.filter((val)=>{
                    console.log("hiiii value", val , " ::: " ,val !== checkValue);
                    return val !== checkValue;
                });
                setCheckBoxVal([...newArray])
            }
        }
        
    }

    const genderChangeHandler = (event) =>{
        // console.log(event.target.value);
        setUserGender(event.target.value)
    }

    const submitHandler =(e) =>{
        e.preventDefault();

        const allData = {
            name: userName,
            email: userEmail,
            mobileNo : userMobile,
            age: userAge,
            gender: userGender,
            hobby: checkBoxVal,
            country: userCountry,
            password: userPassword,
        }

    //     if(userName === '' || userEmail==="" || userMobile==='' ||userAge=== '' || userGender==='' || checkBoxVal==='' || userCountry === '' || userPassword === ''){
    //        alert('plese Enter Value');
    // }
    // else{

        props.data(allData);
    
    setUserName('');
    setUserEmail('');
    setUserMobile('');
    setUserAge('');
    setUserCountry('');
  
    setUserGender('');
    setCheckBoxVal([]);
    
    setUserPassword('');
    
//    }
   
   }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <input className="form-control form-control-lg form_data"  type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Add User Name" />
                <input className="form-control form-control-lg form_data"  type="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder="Add User Email" />
               
                <input type="tel" className="form-control form-control-lg form_data" onChange={(e) => setUserMobile(e.target.value)} value={userMobile} placeholder="enter your Phone " title="Error Message" pattern="[1-9]{1}[0-9]{9}" />
                <input type="number" className="form-control form-control-lg form_data" onChange={(e) => setUserAge(e.target.value)} value={userAge}  placeholder="enter age" />
                <label htmlFor="Male"> Gender </label> &nbsp; &nbsp; &nbsp;
                
                {gender.map((val)=>(
                    <div className="form-check form-check-inline" key={val.id}>
                        <input className="form-check-input"  type="radio" checked={userGender === val.gn} onChange={genderChangeHandler} name="exampleRadios" value={val.gn}  />
                            <label className="form-check-label" htmlFor={val.gn}>
                                {val.gn}
                            </label>
                    </div>
                ))}
        
                <br />
                <br/>
                <label> Hobby </label> &nbsp; &nbsp; &nbsp;
                
                {hobby.map((val)=>(
                        <div className="form-check form-check-inline" key={val.id}>
                            <input className="form-check-input" type="checkbox" checked={checkBoxVal.includes(val.hobbyName)?true:false} onChange={e=>checkBoxHandler(e.target.value,e.target.checked)} name={val.hobbyName} value={val.hobbyName} />
                            <label className="form-check-label" htmlFor={val}>{val.hobbyName}</label>
                        </div>
                    ))}
                <div className="form-group col-md-12">
                    {/* <Select options={countryList}  className="form-control" defaultValue={countryList[0]} onChange={ddlHandler}/> */}
                    {/* <select className="form-select" >
                       {countryList.map((val)=>(
                           
                           <option title={val.id}>{val.label}</option>
                      
                       ))}
                    </select> */}
                    <DropdownButton id="dropdown-basic-button" onClick={e=> setUserCountry(e.target.title)} title="Select Country">
                    {countryList.map((val,index)=>(
                           
                           <Dropdown.Item value={val.label} title={val.label} key={index}>{val.label}</Dropdown.Item>
                      
                       ))}
                        
                    </DropdownButton>
                </div>
                <input type="password" className="form-control form-control-lg form_data" onChange={e => setUserPassword(e.target.value)} value={userPassword} id="inputPassword" placeholder="Password"></input>
                <button type="text" className="btn btn-outline-success button">Add User Details</button>
            </form>
        </div>
    )
}


export default Form;