
import styled from 'styled-components';
import Link from 'next/dist/client/link';
// import Main from 'next/document';
import Image from 'next/image';

const GET_ALL_LAUNCHES: string = 'https://api.spacexdata.com/v4/launches';

const Name = styled.a`
    font-size: 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
`;

const Description = styled.span`
  font-size: 1.2rem;
`;

const Status = styled.span`
  font-size: 1.2rem;
  color: ${(props) => (props.success ? "#1db262" : "#d31647")};
  text-transform: uppercase;
  border: ${(props) => (props.success ? "#1db262" : "#d31647")} 2px solid;
  padding: 0.3rem 1rem;
  margin: 1rem 0;
  width: wit-content;
`;

const LaunchDate = styled.span`
    color: #606060;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60vw;
    margin: 2rem;

`;

const Launch = styled.li`
    display: flex;
    min-height: 300px;
    margin-left: 3rem;
    margin-bottom: 2rem;
    background-color: #101010;
    border-top: #1c1a1a 1px solid;
    border-left: #161616 1px solid;
`;

// const Patch = styled(Image)`
//   height: 300px;
// `;

const Patch = styled.div`
  height: 250px;
  width: 250px;
  margin-left: 2rem;
  background-image: url(${(props) => (props.url)});
  background-size: contain;
  background-size: 220px auto;
  background-position: center;
  background-repeat: no-repeat;
  // padding: 1rem;
`;

const Main = styled.main`
  margin: 0 auto;
`;

// interface ILaunch {
//     name: string;
//     details: string;
//     success: string;
//     date_utc: string;
//     img: string;
// }

// const Launch = ( { launches } : { launches: ILaunch[] }) => {
  const Launches = ({ launches }) => {

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

  if (!launches) return <h1> Loading... </h1>
  else return (
    <Main>
        <ul>
        {
            launches.map(launch => {
                const { name, details, success, date_utc, links: { patch: { small: img } } } = launch;
                return (
                <Launch key={name}>
                    {/* {img && <Patch src={img} alt={name} height={300} width={300}/>} */}

                  <Patch url={img} />
                    
                    <TextContent>
                        <Link href={`/launches/${name}`}>
                            <Name>{name}</Name>
                        </Link>
                        <LaunchDate>Date: {formatData(date_utc)}</LaunchDate>
                        <Status success={success}>{checkLaunchStatus(success, date_utc)}</Status>
                        <Description>{details || 'This is haven`t some information'} </Description>
                       
                    </TextContent>
                </Launch>
                ) 
            
            })
        }
        </ul>
        </Main>
  )
}

export default Launches;