import React,{useState} from 'react'

 const CheckBox = (props) =>{
     const [checkBoxVal,setCheckBoxVal] = useState([]);
    let hobby = [{id:1,hobbyName:'Cricket'} , {id:2,hobbyName:'Footbal'}, {id:3,hobbyName:'Reading'} , {id:4,hobbyName:'Researching'}];

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
    const submitHandler = (e) =>{
        e.preventDefault();
        props.dataHandler(checkBoxVal);

        setCheckBoxVal([]);
    }
    return (
        <div>
                <form onSubmit={submitHandler}>
                    {hobby.map((val)=>(
                        <div className="form-check form-check-inline" key={val.id}>
                            <input className="form-check-input" type="checkbox" checked={checkBoxVal.includes(val.hobbyName)?true:false} onChange={e=>checkBoxHandler(e.target.value,e.target.checked)} name={val.hobbyName} value={val.hobbyName} />
                            <label className="form-check-label" htmlFor={val}>{val.hobbyName}</label>
                        </div>
                    ))}
                    <button type="text">submit</button>
                </form>
        </div>
    )
}
export default CheckBox;
