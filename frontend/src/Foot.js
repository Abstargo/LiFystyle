import React from "react";


export default function Foot()
{

        return (
          
          

            <footer class="footer">
                  <div class="footer__addr">
                      <h1 class="footer__logo">LiFyStyle</h1>
        
                          <h2>Contact</h2>
    
                       <address>
                                5534 Somewhere In. The World 22193-10212<br />
          
                      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                        </address>
                        </div>
  
                               <ul class="footer__nav">
                          <li class="nav__item">
                  <h2 class="nav__title">Shop</h2>

              <ul class="nav__ul">
                      <li>
                        <a href="#">Men</a>
                      </li>

                <li>
                  <a href="#">Women</a>
                </li>
                    
                <li>
                  <a href="#">Kids</a>
                </li>
              </ul>
            </li>
            
            <li class="nav__item nav__item--extra">
              <h2 class="nav__title">Contacts</h2>
              
              <ul class="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Hardware Design</a>
                </li>
                
                <li>
                  <a href="#">Software Design</a>
                </li>
                
                <li>
                  <a href="#">Digital Signage</a>
                </li>
                
              
              </ul>
            </li>
            
            <li class="nav__item">
              <h2 class="nav__title">Our store</h2>
              
              
            </li>
          </ul>
          
          <div class="legal">
            <p>&copy; 2019 Something. All rights reserved.</p>
            
            <div class="legal__links">
              <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
            </div>
          </div>
        </footer>
        )
}