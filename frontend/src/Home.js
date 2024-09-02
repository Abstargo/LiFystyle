import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home()
{

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    }

    return (
        <div>
            <h1>
                Welcome to the MAIN page.
            </h1>
            <button onClick={handleClick}>Sign-In</button>
        </div>
    );
}
