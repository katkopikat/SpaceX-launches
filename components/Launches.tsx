import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect, useRef } from "react";
import Launch from "./Launch";
import FilterButtons from "../components/FilterButtons";

const URL_LAUNCHES: string = 'https://api.spacexdata.com/v4/launches/query';

interface ILaunch {
  name: string;
  details: string | null;
  success: boolean | null;
  date_utc: string;
  links: any; // TODO
  id: string;
  upcoming: boolean;
}

// enum LaunchesType {
//   ALL = 'all',
//   PAST = 'past',
//   UPCOMING = 'upcoming'
// }

const SELECT_DATA = [
  'id',
  'name',
  'details',
  'success',
  'date_utc',
  'links',
  'upcoming'
];

const Launches = ({ launches }) => {
  const [launchesType, setType] = useState('all');
  const [allLoadedLaunches, setLoadedLaunches] = useState<ILaunch[]>(launches.docs);
  const [currentLaunches, setCurrentLaunches] = useState(launches);
  const [page, setPage] = useState(1);

  const setLaunchesType = (type: string) => {
    setPage(0); 
    setType(type);
    setLoadedLaunches( allLoadedLaunches => allLoadedLaunches.splice(0, allLoadedLaunches.length));
    getLaunches(URL_LAUNCHES, type, 0)
  }

  const getLaunches = async (url: string, type: string, page) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        query: type === 'all'
                          ? {}
                          : type == 'upcoming' ?  { upcoming: true }  : { upcoming : false },
        options: {
          page: page + 1,
          select: SELECT_DATA 
        },
      }),
    };

    const response = await fetch(url, requestOptions);
    const launches = await response.json();

    console.log(launches)
    setCurrentLaunches(launches);
    setPage(launches.page)
    setLoadedLaunches([...allLoadedLaunches, ...launches.docs]);
  };

  if (!launches.docs) return <Loader> Loading... </ Loader>;

  else
    return (
        <Scroll
          dataLength={allLoadedLaunches.length}
          next={() => getLaunches(URL_LAUNCHES, launchesType, page)}
          hasMore={currentLaunches.hasNextPage}
          loader={<Loader>Loading...</Loader>}
          endMessage={
            <EndMessage>
              You have seen all launches.
            </ EndMessage>
          }
        >

          <ButtonsWrapper>
            <p>Result: {currentLaunches.totalDocs}</p>
            <FilterButtons setLaunchesType={setLaunchesType} />
          </ButtonsWrapper>
          <LaunchesList>
            {allLoadedLaunches.map((launch: ILaunch) => {
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
                <Launch key={name} launch={{ name, details, success, date, img, id, upcoming }} />
              );
            })}
          </LaunchesList>
        </Scroll>
    );
};

export default Launches;

const Scroll = styled(InfiniteScroll)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90vw;
`

const LaunchesList = styled.ul`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EndMessage = styled.p`
  margin: 4rem 0;
  color: #777777;
  text-align: center;
`

const Loader = styled.p`
  margin: 4rem 0;
  color: #777777;
  text-align: center;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  
  p {
    font-size: 1rem;
    color: rgb(144 144 144 / 85%);
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  `;