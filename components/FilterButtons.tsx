import styled from "styled-components";
import { useState, useEffect } from "react";

interface IFilterButtons {
	setLaunchesFilter: (type: string) => void;
}

enum Filter {
    ALL = "all",
    PAST = "past",
    UPCOMING = "upcoming"
}

const FilterButtons = ({ setLaunchesFilter }: IFilterButtons) => {
    const [chekedFilter, setFilter] = useState<Filter>(Filter.ALL);

	useEffect(() => {
		setLaunchesFilter(chekedFilter);
	}, [chekedFilter]);

	const handleChange = (e) => {
        console.log(e.target.value)
		setFilter(e.target.value);
	};

	return (
		<Form>
			<input
				type="radio"
				value={Filter.ALL}
				id="all"
				onChange={handleChange}
				name="launches type"
				defaultChecked
			/>
			<label htmlFor="all"> All </label>

			<input
				type="radio"
				value={Filter.PAST}
				id="past"
				onChange={handleChange}
				name="launches type"
			/>
			<label htmlFor="past"> Past </label>

			<input
				type="radio"
				value={Filter.UPCOMING}
				id="upcoming"
				onChange={handleChange}
				name="launches type"
			/>
			<label htmlFor="upcoming"> Upcoming </label>
		</Form>
	);
};

export default FilterButtons;

const Form = styled.form`
	display: flex;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.15rem;

	input {
		margin-right: 1rem;
		border: 2px solid #515151;
		border-radius: 50%;
		width: 12px;
		height: 12px;
		transition: all ease-in 0.2s;
		appearance: none;
		cursor: pointer;

		:checked {
			border: 2px solid #d31647;
			background-color: #d31647;
		}
	}

	label {
		margin-right: 2rem;
		font-size: 1.1rem;
		cursor: pointer;
	}
`;
