import "./App.css";
import BudgetContainer from "./components/BudgetContainer";
import ExpensesList from "./components/ExpensesList";
import NewExpenseContainer from "./components/NewExpenseContainer";

import { useState } from "react";

export interface IExpense {
	id: string;
	content: string;
	cost: number;
}

function App() {
	const [expenses, setExpenses] = useState<IExpense[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (e) e.preventDefault();
		const cost = document.querySelector("#cost") as HTMLInputElement;
		const content = document.querySelector("#content") as HTMLInputElement;
		const contentValue = content.value.trim();
		if (!contentValue) return;

		const newExpense: IExpense = {
			id: crypto.randomUUID(),
			content: contentValue,
			cost: parseInt(cost.value),
		};
		setExpenses((currentExp: IExpense[]) => {
			return [...currentExp, newExpense];
		});
		cost.value = "";
		content.value = "";
	};

	console.log(expenses);

	return (
		<>
			<BudgetContainer expenses={expenses} />
			<ExpensesList expenses={expenses} />
			<NewExpenseContainer handleSubmit={handleSubmit} />
		</>
	);
}

export default App;
