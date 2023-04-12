import { IExpense } from "../App";
import Budget from "./Budget";

interface IBudgetContainerProps {
	expenses: IExpense[];
}

function BudgetContainer({ expenses }: IBudgetContainerProps) {
	let totalSpendings = 0;
	expenses.map((expense) => {
		totalSpendings += expense.cost;
	});

	const totalBudget = 2000;

	return (
		<div className="title-container">
			<h1> Budget Planner </h1>
			<div className="budget-headers">
				<Budget title="Budget" color="grey" budget={totalBudget} />
				<Budget
					title="Remaining"
					color="green"
					budget={totalBudget - totalSpendings}
				/>
				<Budget
					title="Spent so far"
					color="orange"
					budget={totalSpendings}
				/>
			</div>
		</div>
	);
}

export default BudgetContainer;
