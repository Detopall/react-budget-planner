interface IExpenseContainerProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ExpenseContainer({ handleSubmit }: IExpenseContainerProps) {
	return (
		<div className="new-expense-container">
			<h2> New expense </h2>
			<form onSubmit={handleSubmit}>
				<input
					id="content"
					type="text"
					placeholder="Expense"
					autoComplete="off"
					required
				></input>
				<input id="cost" type="number" placeholder="Amount" />
				<input type="submit" value="New expense" required />
			</form>
		</div>
	);
}

export default ExpenseContainer;
