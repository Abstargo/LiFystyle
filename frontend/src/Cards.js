import React from "react";

export default function Cards()
{
   return (
    <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src="yguu.jpg" alt="here" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natueral lead-in to additional content  </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="yguu.jpg" alt="here" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to</p>
                <p className="card-text"><small className="text-muted">Last updated 3 minus ago</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="yguu.jpg" alt="here" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is some awesome work to do so we can see what gonna happen to the card after making those changing</p>
                <p className="card-text"><small className="text-muted">Last updated 4 mins ago</small></p>
            </div>
        </div>
    </div>
   ) 
}

