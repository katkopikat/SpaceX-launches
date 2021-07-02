
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import Image from 'next/image';
//import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'

const GET_ALL_LAUNCHES = 'https://api.spacexdata.com/v4/launches';

const Name = styled.a`
    font-size: 28px;
    text-decoration: none;
`;

const Description = styled.span`
  color: black;
  font-size: 20px;
`;

const Success = styled.span`
font-size: 20px;
  color: ${(props) => (props.success ? "#1db262" : "#d31647")};;
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
                        <LaunchDate>Date: {date_utc}</LaunchDate>
                        <Success success={success}>Status: {success ? 'success' : 'fail'}</Success>
                        <Description>Mission description: {details} </Description>
                       
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