import './ExpenseItem.css'
import ExpenseDate from './ExpenseData';
import Card from '../UI/Card';

function ExpenseItem(props){
    
    
    return(
        <Card>
            <ExpenseDate date={ props.date }/>
            <div>
                <h2>{ props.title }</h2>
                <div>
                    <h3>{ props.amount }</h3>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem; 