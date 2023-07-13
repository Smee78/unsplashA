import React,{useState} from 'react';
import './NewEXpenseForm.css'



function NewEXpenseForm(props){
    const [ttitle,tset]=useState('');
    const [aamount,aset]=useState('');
    const [dtitle,dset]=useState('')

   function tchangehHandler(event){
       tset(event.target.value)

   }
    function achangehHandler(event){
        aset(event.target.value)

    }
     function dchangehHandler(event){
        dset(event.target.value)   
     }
     function submitHandler(event){
         event.preventDefault();

         const expense={
             Title:ttitle,
             Amount:aamount,
             Date:dtitle   
         }
         props.UpadatedataHandler(expense);
         console.log(expense)

         aset("")
         dset("")
         tset("")
         
    


     }
    return(
            <form onSubmit={submitHandler} className='form'>
                <div className='title'>
                    <lebel>Title</lebel>
                    <input type="text" value={ttitle} onChange={tchangehHandler}></input>
                </div>
                <div>
                    <lebel className='title'>Amount</lebel>
                    <input type="number" min="0.0" value={aamount} onChange={achangehHandler}></input>
                </div>
                <div className='title'>
                    <lebel>Date</lebel>
                    <input type="date" value={dtitle} onChange={dchangehHandler}></input>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>



            </form>
    );
}


export default NewEXpenseForm;