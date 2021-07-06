import styled from "styled-components";
import Link from "next/dist/client/link";
import Image from 'next/image';

interface ILaunch {
    name: string;
    details: string;
    success: boolean;
    date: string;
    img: string;
    id: string;
    upcoming: boolean;
}

type TStatus = {
    upcoming: boolean;
    success: boolean
}

const Launch = ({ launch }: { launch: ILaunch }) => {
    const { name, details, success, date, img, id, upcoming } = launch;

    const formatData = (launcgesDate: string): string => {
        const date = new Date(launcgesDate).toLocaleString();
        return date.substr(0, date.length - 3); // cropp seconds
    };

    const checkLaunchStatus = (status: boolean, upcoming: boolean, date: string): string => {
        if (upcoming) {
            return `Planning on ${date.toLocaleString()}`;
        } else {
            return status ? "success" : "fail";
        }
    };

    return (
        <Link href={`/launch/[launchId]`} as ={`/launch/${id}`}>
            <LaunchWrapper>
                <PatchImage>
                    <Image src={img ? img : '/spacex-alt.png'} height={250} width={250} alt={name}/>
                </PatchImage>
                <TextContent>
                    <Name>
                        {name}
                    </Name>
                    <LaunchDate>
                        Launch date: {formatData(date)}
                    </LaunchDate>
                    <Status success={success} upcoming={upcoming}>
                        {checkLaunchStatus(success, upcoming, date)}
                    </Status>
                    <Description>
                        {details || "This is haven`t some information"}{" "}
                    </Description>
                    <MoreButton type="button">
                        See more &gt;
                    </MoreButton>
                </TextContent>
            </LaunchWrapper>
        </Link>
    );
};

export default Launch;

const PatchImage = styled.div`
    position: absolute;
    right: 7rem;
    transform: scale(1.7) translate(0, 20%);
    width: 17rem;
    height: 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.15;
`;

const LaunchWrapper = styled.li`
    position:relative;
    width: 100%;
	display: flex;
    min-height: 17rem;
	// margin-left: 3rem;
	margin-bottom: 4rem;
	background-color: #101010;
	border-top: #1c1a1a 1px solid;
	border-left: #161616 1px solid;
    cursor: pointer;
    overflow: hidden;

    :hover {
        background-color: #151515;

         ${PatchImage}{
            transition: all cubic-bezier(1, 0, 0, 1) 0.3s;
            transform: scale(1.75) translate(0, 20%);
            opacity: 0.7;
        }
    }
`;

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 60vw;
	margin: 2rem;
`;

const Name = styled.h2`
	font-size: 2.5rem;
    font-weight: 400;
	text-transform: uppercase;
    letter-spacing: 0.2rem;
`;

const Description = styled.p`
    z-index: 2;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #b9b9b9;
`;

const LaunchDate = styled.span`
	color: #919191;
`;

const Status = styled.span<TStatus>`
    width: wit-content;
    margin: 1rem 0;
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${props => (props.upcoming ? '#308aff' : (props.success ? "#1db262" : "#d31647"))};
    border: ${props => (props.upcoming ? '#308aff' : (props.success ? "#1db262" : "#d31647"))} 2px solid; 
`;

const MoreButton = styled.button`
    margin-top: 1rem;
    border: none;
    background: none;
    color: #308aff;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-transform: lowercase;
    opacity: 0.8;
    cursor: pointer;

    :hover {
        letter-spacing: 0.3rem;
        opacity: 1;
    }
`;

