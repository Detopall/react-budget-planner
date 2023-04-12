interface IBudgetProps {
	title: string;
	color: string;
	budget: number;
}

function Budget({ title, color, budget }: IBudgetProps) {
	return (
		<div className={color}>
			<span>
				{title}: ${budget}
			</span>
		</div>
	);
}

export default Budget;
