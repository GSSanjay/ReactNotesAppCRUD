import React, { useRef, useState } from "react";

const Test = () => {

    const inputRef = useRef();
    const[textValue, setTextValue] = useState("");
    const[disable, setDisable] = useState(true);

    const submitValue = () => {
        console.log(inputRef.current.value);
    }

    const textValueChange = (e) => {
        let value1 = e.target.value;
        if(!(value1.length <= 0)){
            setTextValue(value1);   
            // document.querySelector("#btn1").disabled = false; 
            setDisable(false);       
        }
            document.querySelector("#btn1").disabled = disable; 

    }

    const textValueSubmit = () => {

        console.log("dfdsfdsfdsf")
        console.log(textValue);
      /*   if(textValue.length <= 0){
            document.querySelector("#btn1").disabled = true;
            console.log("null")
        }
        console.log(document.querySelector("#btn1").disabled) */
    }

    return(
        <>
            <h1>Test 1</h1>
            <input type="text" ref={inputRef} />
            <button onClick={submitValue}>Submit</button>

            <input type="text" name="" id="" value={textValue} onChange={textValueChange} />
            <button id="btn1"  onClick={textValueSubmit} disabled>Submit 2</button>
        </>
    )
}

export default Test;