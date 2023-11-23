import { Line } from "react-chartjs-2";
import { CommentItem } from "./models";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
	comments: CommentItem[];
}

const CommentChart = (props: Props) => {
	const comments = props.comments;
	const data = {
		labels: comments.map((comment) => comment.id),
		datasets: [
			{
				label: "Word Count",
                borderWidth: 1,
				data: comments.map((comment) => comment.body.split(" ").length),
				fill: false,
				borderColor: "rgba(75,192,192,1)",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false
			},
		},
	};

	return <Line data={data} options={options} />;
};

export default CommentChart;
