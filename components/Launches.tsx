import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Launch from "./Launch";

const URL_LAUNCHES: string = 'https://api.spacexdata.com/v4/launches/query';

const Launches = ({ launches }) => {
  console.log(launches)
  const [allLoadedLaunches, setLoadedLaunches] = useState(launches.docs);
  const [currentLaunches, setCurrentLaunches] = useState(launches);

  const getLaunchesbyFilter = async (upcoming: boolean) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        query: {
            upcoming: upcoming
        },
        options: {
          select: [
                'id',
                'name',
                'details',
                'success',
                'date_utc',
                'links']
        }
      }),
    };

    const response = await fetch(URL_LAUNCHES, requestOptions);
    const launches = await response.json();
    console.log(launches)
    setCurrentLaunches(launches);
    setLoadedLaunches([...launches.docs]);
  }

  const getMoreLaunches = async (url: string) => {

    // body: JSON.stringify({
    //   query: {
    //     upcoming: true,
    //   },
    // }),

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        options: {
          page: currentLaunches.nextPage,
        },
      }),
    };

    const response = await fetch(url, requestOptions);

    const launches = await response.json();
    setCurrentLaunches(launches);
    setLoadedLaunches([...allLoadedLaunches, ...launches.docs]);
  };

  if (!launches.docs) return <Loader> Loading... </ Loader>;
  else
    return (
        <Scroll
          dataLength={allLoadedLaunches.length}
          next={() => getMoreLaunches(URL_LAUNCHES)}
          hasMore={currentLaunches.hasNextPage}
          loader={<Loader>Loading...</Loader>}
          endMessage={
            <EndMessage>
              You have seen all launches.
            </ EndMessage>
          }
        >
          <p>Total launches: {launches.totalDocs}</p>

          <button onClick={()=> getLaunchesbyFilter(false) }>Past</button>
          <button onClick={()=> getLaunchesbyFilter(true) }>Future</button>

          <LaunchesList>
            {allLoadedLaunches.map((launch) => {
              const {
                id,
                name,
                details,
                success,
                date_utc: date,
                links: {
                  patch: { small: img },
                },
              } = launch;
              return (
                <Launch key={name} launch={{ name, details, success, date, img, id }} />
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
  align-items: center;
  width: 90vw;
  margin: 0 auto;
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