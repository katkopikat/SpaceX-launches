import styled from 'styled-components';
import Link from 'next/dist/client/link';
import Image from 'next/image';
//import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';

const GET_ALL_LAUNCHES = 'https://api.spacexdata.com/v4/launches';

const Name = styled.a`
    font-size: 28px;
    text-decoration: none;
`;

const Description = styled.span`
  color: black;
  font-size: 20px;
`;

const Status = styled.span`
  color: red;
`;

const LaunchDate = styled.span`
    color: lightgray;
    font-size: 16px;
`;





// interface ILaunch {
//     name: string;
//     details: string;
//     success: string;
//     date_utc: string;
//     img: string;
// }



// const Launch = ( { launches } : { launches: ILaunch[] }) => {
  const Launch = ({ launches } : any ) => {

  if (!launches) return <h1>Loading...</h1>

  return (
    <div> 
        <h1>All launches of SpaceX</h1>
        <ul>
        {
            launches.map(launch => {
                const { name, details, success, date_utc, links: { patch: { small: img } } } = launch;

                return (
                <li key={name}>
                    <Image src={img} alt={name} />
                    <Link href={`/launches/${name}`}>
                        <Name>{name}</Name>
                    </Link>
                    <Status>Success: {success}</Status>
                    <Description>Mission description: {details} </Description>
                    <LaunchDate>Date: {date_utc}</LaunchDate>
                </li>
                )
            
            })
        }
        </ul>
    </div>
  )
}

export default Launch;

export async function getStaticProps() {
    const response = await fetch(GET_ALL_LAUNCHES)
    const launches = await response.json()
  
    return {
        props: { launches },
    }
  }

//     //const { name, details, success, date_utc, links: { patch: { small: img } } } = await json;




