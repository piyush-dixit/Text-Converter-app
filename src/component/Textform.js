import React,{useState} from 'react'

export default function Textform(props) {
    const solve=()=>{
        console.log("uppercase was clicked" + text );
        let newText=text.toUpperCase();
        setText(newText)
    }
    const solve3=()=>{
        console.log("uppercase was clicked" + text );
        let newText=text.toLowerCase();
        setText(newText)
    }
    const solve4=()=>{
        console.log("uppercase was clicked" + text );
        let newText='';
        setText(newText)
    }
    const solve2=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={solve2} id="My Box" rows="8"></textarea>
  </div>
<button className="btn btn-success mx-2 my-3" onClick={solve}>Convert to uppercase</button>
<button className="btn btn-success mx-2 my-3" onClick={solve3}>Convert to uppercase</button>
<button className="btn btn-success mx-2 my-3" onClick={solve4}>if you want clear text</button>
</div>
<div className="container my-3">
<h4>your text size is :</h4>
<p>{text.split(" ").length} words and {text.length} characters</p>
</div>
</>
  )
}