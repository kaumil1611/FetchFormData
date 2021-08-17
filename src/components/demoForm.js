import React,{useRef} from 'react';


const DemoForm = () => {
const formRef = useRef();

const handleClick = (e) => { 
  formRef.current.reset();
}

 
  return (
    <form ref={formRef}>
      <input />
      <input />
      <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">HTML</label><br/>
        <input type="radio" id="css" name="fav_language" value="CSS"/>
        <label for="css">CSS</label><br/>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label for="javascript">JavaScript</label>


        <label htmlFor="cars">Choose a car:</label>

            <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>


            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3"> I have a boat</label><br /><br />
     
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default DemoForm;
