import React from 'react';

import "../styles/sidebar.css"

export default function SideBar() {


    

    return <div className="side_main_container">
                <div className="side_header">        
                    <p className="side_heading_text">Be The <br/>CHANGE</p>        
                </div>
                <p className="hi">
                Help nature offers PET collection and has many local collection centers around Sri Lanka</p>

                //Map
                <div className="map_card">
                    <iframe width="250" height="420" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=250&amp;height=500&amp;hl=en&amp;q=recycling%20center%20colombo%20+(Recycling%20Centers)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
                </div>
            

        
            </div>

}