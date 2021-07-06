import styled from "styled-components";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Launch from "./Launch";
import FilterButtons from "../components/FilterButtons";
import { URL_LAUNCHES, SELECT_FIELDS } from "../constants";

interface ILaunch {
	name: string;
	details: string | null;
	success: boolean | null;
	date_utc: string;
	links: any; // TODO
	id: string;
	upcoming: boolean;
}

// interface IData {
//   docs: ILaunch[];
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
//   limit: number;
//   nextPage: number;
//   offset: number;
//   page: number;
//   pagingCounter: number;
//   prevPage: null | boolean;
//   totalDocs: number;
//   totalPages: number;
// }

const Launches = ({ launches }) => {
	const [launchesFilter, setFilter] = useState<string>("all");
	const [loadedLaunchesList, setLoadedLaunches] = useState<ILaunch[]>(launches.docs);
	const [currentPartLaunches, setCurrentPartLaunches] = useState(launches);
	const [page, setPage] = useState<number>(1);

	const getLaunches = async (url: string, type: string, page: number) => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				query:
					type === "all"
						? {}
						: type == "upcoming"
						? { upcoming: true }
						: { upcoming: false },
				options: {
					page: page + 1,
					select: SELECT_FIELDS,
				},
			}),
		};

		const response = await fetch(url, options);
		const launches = await response.json();

		setCurrentPartLaunches(launches);
		setPage(launches.page);
		setLoadedLaunches([...loadedLaunchesList, ...launches.docs]);
	};

	const setLaunchesFilter = (filter: string): void => {
		setPage(0);
		setFilter(filter);
		setLoadedLaunches((allLoadedLaunches) =>
			allLoadedLaunches.splice(0, allLoadedLaunches.length)
		);
		getLaunches(URL_LAUNCHES, filter, 0);
	};

	if (!launches.docs) return <Message> Loading... </Message>;
	else
		return (
			<Scroll
				dataLength={loadedLaunchesList.length}
				next={() => getLaunches(URL_LAUNCHES, launchesFilter, page)}
				hasMore={currentPartLaunches.hasNextPage}
				loader={<Message>Loading...</Message>}
				endMessage={<Message>You have seen all launches.</Message>}
			>
				<ButtonsWrapper>
					<p>Result: {currentPartLaunches.totalDocs}</p>
					<FilterButtons setLaunchesFilter={setLaunchesFilter} />
				</ButtonsWrapper>
				<LaunchesList>
					{loadedLaunchesList.map((launch: ILaunch) => {
						const {
							id,
							name,
							details,
							success,
							upcoming,
							date_utc: date,
							links: {
								patch: { small: img },
							},
						} = launch;
						return (
							<Launch
								key={name}
								launch={{ name, details, success, date, img, id, upcoming }}
							/>
						);
					})}
				</LaunchesList>
			</Scroll>
		);
};

export default Launches;

const Scroll = styled(InfiniteScroll)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 90vw;
`;

const LaunchesList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Message = styled.p`
	margin: 4rem 0;
	align-self: center;
	color: #777777;
	letter-spacing: 0.2rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 0;

	p {
		font-size: 1rem;
		color: #919191;
		margin-bottom: 1.5rem;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
	}
`;
