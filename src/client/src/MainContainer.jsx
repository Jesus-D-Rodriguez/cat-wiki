import React from "react";
import "./MainContainer.css"
import SearchBar from "./SearchBar";

function MainContainer () {
    return <div className="main-cat-container">
        <div className="main-cat-container-img">
            <div className="main-cat-container-img-1">
                <div className="inside-cat-container-img-1">
                    <div>
                        <div className="logo-inverse-container">
                            CatWiki
                            <img src="../images/invertido.png" alt="" />

                        </div>
                        <div><p>Get to know more about your cat breed</p></div>
                        
                    </div>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                </div>

                <div>

                </div>

            </div>
            <div className="main-cat-container-img-2"></div>
        </div>
        <div className="main-cat-container-most-searched">

            <div className="most-searched">     
                <div className="most-searched-breed-2">  
                    <p>Most searched breeds</p>
                    <div class="mi-rectangulo"></div>

                </div>
                <div className="most-searched-discover"> 
                    <div className="breeds-to-discover">
                        <h2>66+ Breeds For you to discover</h2>
                    </div>
              
                    <div className="see-more">
                        <a href="#">
                        <div className="see-more-2">
                            <p>SEE MORE</p> <img src="../images/arrow-right-alt_117700.svg" alt=""/> 
                        </div>
                        </a>
                    </div>

                
                </div>
                
                <div className="most-searched-photos">
                
                    <div className="img-container">
                        <div id="first-image">
                        <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt="" />
                        </div>
                        <p>Bengal</p>
                    </div>
                    <div className="img-container">
                        <img src="https://cdn2.thecatapi.com/images/9ha.jpg" alt="" />
                        <p>Savannah</p>
                        
                    </div>
                    <div className="img-container">
                        <img src="https://cdn2.thecatapi.com/images/cko.jpg" alt="" />
                        <p>Norwegian Forest Cat</p>
                    </div>
                    <div className="img-container">
                        <img src="https://cdn2.thecatapi.com/images/251.jpg" alt="" />
                        <p>Selkirk Rex</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

}

export default MainContainer; 