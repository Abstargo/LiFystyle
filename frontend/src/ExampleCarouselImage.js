import React from "react";

function ExampleCarouselImage({ s })
{
    return (
        <div 
            style={{ 
                height:'400px', 
                background:"#ccc", 
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center"
                }}>
        <h2>{s}</h2>

        </div>
    )
}

export default ExampleCarouselImage;