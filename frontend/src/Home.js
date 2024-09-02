import React from "react"
import { useNvigate } from "react-router-dom"

export default function Home()
{

    const navigate = useNvigate();

    const handleClick = () =>
    {
        navigate('/signin');
    }

    return
    (
        <div>
            <h1>
                Welcome to tha MAIN page.
            </h1>
            <button onClick={handleClick}>Sign-In</button>
        </div>
    )
}