import React from "react";

function ExampleCarouselImage({ text })
{
    return (
        <div 
            style={{ 
                height:'400px', 
                background:"#ccc", 
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center"}}>
        <h2>{text}</h2>

        </div>
    )
}

export default ExampleCarouselImage;