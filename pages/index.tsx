import MainLayout from "../components/MainLayout";
import Launches from "../components/Launches";
import { URL_LAUNCHES, SELECT_FIELDS } from "../constants";

const App = ({ launches }) => {
	return (
		<MainLayout>
			<Launches launches={launches} />
		</MainLayout>
	);
};

export default App;

export async function getStaticProps() {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({
			options: {
				select: SELECT_FIELDS,
			},
		}),
	};

	const response = await fetch(URL_LAUNCHES, options);
	const launches = await response.json();

	return {
		props: { launches },
	};
}
