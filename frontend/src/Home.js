import React from "react"
import { useNavigate } from "react-router-dom"
import { RxAvatar } from "react-icons/rx";

export default function Home({ user })
{

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signin');
    }

    return (
	<>
        <div>
            <h1>
                Welcome to the MAIN page.
            </h1>
	    { user ? (<nav> <RxAvatar /> <p>{`Hello, ${user.username}`}</p></nav>)  : (<button onClick={handleClick}>Sign-In</button>)}
        </div>
	</>
    );
}
