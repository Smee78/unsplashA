import './NewEXpense'
import NewEXpenseForm from './NewEXpenseForm';



function NewEXpense(props){
    function DataseverHandler(SaveExpense){
        const expenseD={
            ...SaveExpense,
            id:1
        }
        props.saveupdateData(expenseD);

    }
    return(
        <div className='updateform'>
            <NewEXpenseForm UpadatedataHandler={DataseverHandler}/>
        </div>

    );
}
export default NewEXpense