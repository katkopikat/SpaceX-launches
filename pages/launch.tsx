
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import Image from 'next/image';
//import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'

const GET_ALL_LAUNCHES = 'https://api.spacexdata.com/v4/launches';

const Name = styled.a`
    font-size: 28px;
    text-decoration: none;
    text-transform: uppercase;
`;

const Description = styled.span`
  color: black;
  font-size: 20px;
`;

const Success = styled.span`
  font-size: 20px;
  color: ${(props) => (props.success ? "#1db262" : "#d31647")};
  text-transform: uppercase;
  border: ${(props) => (props.success ? "#1db262" : "#d31647")} 2px solid;
  padding: 0.3rem 1rem;
  width: wit-content;
 
`;

const LaunchDate = styled.span`
    color: #606060;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60vw;
`;

const Launch = styled.li`
    display: flex;
    min-height: 300px;
`;


const Patch = styled(Image)`
  height: 300px;
  width: 300px;
  object-fit: contain;
`;



// interface ILaunch {
//     name: string;
//     details: string;
//     success: string;
//     date_utc: string;
//     img: string;
// }



// const Launch = ( { launches } : { launches: ILaunch[] }) => {
  const Launches = ({ launches } : any ) => {

  const formatData = (launcgesDate: string) : string => {
    const date = new Date(launcgesDate).toLocaleString();
    return date.substr(0, date.length - 3);
  } 

  const checkLaunchStatus = (status: boolean, date: string) : string => {
      const today = new Date();
      const launchDate = new Date(date);
      if (launchDate <= today) {
        return status ? 'success' : 'fail';
      } else {
        return `Planning on ${launchDate.toLocaleString()}`
      }
  }

  if (!launches) return <h1>Loading...</h1>

  return (
    <div> 
        <h1>Lists</h1>
        <ul>
        {
            launches.map(launch => {
                const { name, details, success, date_utc, links: { patch: { small: img } } } = launch;
                return (
                <Launch key={name}>
                    {/* {img && <Patch src={img} alt={name} layout='fill'/>} */}
                    <TextContent>
                        <Link href={`/launches/${name}`}>
                            <Name>{name}</Name>
                        </Link>
                        <LaunchDate>Date: {formatData(date_utc)}</LaunchDate>
                        <Success success={success}>{checkLaunchStatus(success, date_utc)}</Success>
                        <Description>Mission description: {details || 'This is haven`t some information'} </Description>
                       
                    </TextContent>
                </Launch>
                ) 
            
            })
        }
        </ul>
    </div>
  )
}

export default Launches;

export async function getStaticProps() {
  const response = await fetch(GET_ALL_LAUNCHES)
  const launches = await response.json()

  return {
      props: {launches},
  }
}