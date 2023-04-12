import { IExpense } from "../App";
import ExpenseItem from "./ExpenseItem";

interface IExpensesListProps {
	expenses: IExpense[];
}

function ExpensesList({ expenses }: IExpensesListProps) {
	return (
		<>
			<h2> Expenses </h2>
			<div className="expenses-list">
				{expenses.map((expense) => {
					return <ExpenseItem key={expense.id} expense={expense} />;
				})}
			</div>
		</>
	);
}

export default ExpensesList;
