import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from '../../components/MainLayout';

type TPatch = {
    url: string
}

const LaunchPage = () => {
    const router = useRouter();
    const [launch, setLaunch] = useState();

    useEffect(() => {
        const { launchId : id } = router.query; 

        async function getLaunch() {
            const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
            const launch = await response.json();
            setLaunch(launch);
        }

        if (id) getLaunch();
      }, [])

    if (!launch) return <h1> Loading... </ h1>;

    return (
        <MainLayout title={`SpaceX | ${launch.name}`}>
            <HeaderWrap url={launch.links.patch.small}/>
            <h1>Launch { launch.name }</h1>
        </MainLayout>
    )
}

export default LaunchPage;


const HeaderWrap = styled.header<TPatch>`
    position: relative;
    height: 60vh;
    background-color: black;
    background-image: url(${(props) => props.url}););
    background-size: cover;
    background-position-y: center;
    color: white;

&:before {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    height: 60vh;
    content: "";
    background: linear-gradient(180deg,rgba(0,0,0,.81) 0,rgba(0,0,0,.61) 58%,transparent);
  }
`;

const HeaderContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 400px;
    padding: 2rem 3rem;
    text-transform: uppercase;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 0.05rem;
    line-height: 1.4rem;
  }
`;