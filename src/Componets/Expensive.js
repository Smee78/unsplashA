import React,{useState} from 'react';
import './Expensive.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card';
function Expensive(props)
{
const [amo,ynamo]=useState("")
const [newTitle,setTitle]=useState("");
const[utitle,uset]=useState(props.title);

function changeHandler(event){
    setTitle(event.target.value)
}
function clickHandler(){
    uset(newTitle)
    
}

 return(
    <div className="ei">
<ExpenseDate date={props.date}/>
        <div className="d">
            <h2>{utitle}</h2>
        <div className="p">${props.amount}</div>
        </div>
        </div>

    );
}
export default Expensive







