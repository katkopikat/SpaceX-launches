import styled from "styled-components";
import { useState, useEffect } from "react";


enum LaunchesType {
    ALL = 'all',
    PAST = 'past',
    UPCOMING = 'upcoming'
}

const FilterButtons = ({ setLaunchesType }) => {
    const [launchesType, setType] = useState(LaunchesType.ALL);

    useEffect(() => {
        setLaunchesType(launchesType)
    }, [launchesType])


    const handleChange = (e) => {

        setType(e.target.value);
    }

    return (
        <Form>
            <input type="radio" value="all" id="all"
                onChange={handleChange} name="launches type" defaultChecked />
            <label htmlFor="all"> All </label>

            <input type="radio" value="past" id="past"
                onChange={handleChange} name="launches type"/>
            <label htmlFor="past"> Past </label>

            <input type="radio" value="upcoming" id="upcoming"
                onChange={handleChange} name="launches type" />
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
    }

    label {
        font-size: 1.3rem;
        margin-right: 2rem;
    }
`
