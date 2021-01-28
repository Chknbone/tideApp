import React from 'react';

import './App.css';

//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//jquery, popper.js libraries for bootstrap modal
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import background from "./waves.jpg"
function App() {
  return (
//    <div style={{ backgroundImage: "url(./waves.jpg)" }}>

// </div>


    <div className="MainDiv">
      <body>
      <div class="text-center">
          <h3>Tidal</h3>
      </div>
      {/* <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201602/MIT-Rogue-Waves_0.jpg?itok=z9m-CjfH" /> */}
      
      <div className="container">
          
          <FullCalendar
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
              
            }}
          
            initialView="dayGridMonth"
            
            events={[
              {}
            ]}
          />
        </div>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <div class="modal-header">
                  <h4 class="modal-title align-center">Date is Below</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body text-center">
                  
                </div>
              
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </body>
    </div>
  )
          }

export default App;