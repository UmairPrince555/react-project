import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCLick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const clearAll=()=>{
      //let newText=text.toLowerCase();
      setText('');
      props.showAlert("Cleared successfully","success");
  }

    const handleOnChange=(event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied Successfully","success");
    }
    const [text, setText] = useState("");

  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
      <div className="mb-3">
  <textarea className="form-control" value={text} style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
      <button className='btn btn-outline-secondary mx-1' onClick={handleUpCLick}>Convert to UpperCase</button>
      <button className='btn btn-outline-secondary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
      <button className='btn btn-outline-secondary mx-1' onClick={clearAll}>Clear All</button>
      <button className='btn btn-outline-secondary mx-1' onClick={handleCopy}>Copy All</button>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summry</h3>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in box above to see peview of your text"}</p>
    </div>
    </>
  );
}
