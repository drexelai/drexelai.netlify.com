import React, { Component } from 'react';

class Meetings extends Component {
   render() {
      if (this.props.data) {
         var meetings = this.props.data.meetings.map(function (meetings) {
            return <li key={meetings.user}>
               <blockquote>
                  <p>{meetings.text}</p>
                  <cite>{meetings.user}</cite>
               </blockquote>
            </li>
         })
      }
      return (
         <section id="meetings">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                       
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                     <h1>CLUB MEETINGS</h1>
                        {meetings}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Meetings;
