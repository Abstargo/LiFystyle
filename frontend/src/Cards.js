import React from "react";
import Image from './pexels-godisable-jacob-226636-914668.jpg'

export default function Cards()
{

   return (
    <div class="row row-cols-1 row-cols-md-4 g-4 mb-3 px-3">
  <div class="col">
    <div class="card">
      <img src={Image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet. Id laudantium internos qui aliquid itaque 33 itaque maiores aut minima architecto ea quasi omnis et esse unde non ipsa consequatur. Et iure eveniet sit galisum doloremque quo accusantium sint est reprehenderit similique est voluptatem ipsam et explicabo natus? </p>
        <button href="#" className="cdb">Click here</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button>Click here</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
  );
}

