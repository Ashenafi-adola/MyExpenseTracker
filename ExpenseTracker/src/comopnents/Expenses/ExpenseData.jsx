import './ExpenseData';

function ExpenseData(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div>
            <h3>{ month }</h3> 
            <h3>{ year }</h3>
            <h3>{ day }</h3>                
        </div>
    )
}

export default ExpenseData;