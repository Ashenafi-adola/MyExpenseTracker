import './ExpenseItem.css'
import ExpenseDate from './ExpenseData';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    
    const clickhandler = () => {
        setTitle("changed");
    };
    
    return(
        <Card>
            <ExpenseDate date={props.date}/>
            <div>
                <h2>{title}</h2>
                <div>
                    <h3>{props.amount}</h3>
                </div>
            </div>
            <button onClick={clickhandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem; 