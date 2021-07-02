
import Link from "next/link";
import Image from "next/dist/client/image";

const MainContainer = ({children}) => {
    return (
        <>
        <Image src="/SpaceX-Logo.svg" alt="SpaceX logo" height={100} width={200}/>} 
            <div className="navbar">
                <Link href="/">
                    <a>Главная</a>
                </Link>

                <Link href="/launch">
                    <a>launch</a>
                </Link>

            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    );
};

export default MainContainer;