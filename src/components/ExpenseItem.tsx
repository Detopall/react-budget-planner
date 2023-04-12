import { IExpense } from "../App";

interface IExpenseItemProps {
	expense: IExpense;
}

function ExpenseItem({ expense }: IExpenseItemProps) {
	return (
		<div className="expense-item">
			<p className="item-content">{expense.content}</p>
			<p className="item-cost">${expense.cost} </p>
		</div>
	);
}

export default ExpenseItem;
