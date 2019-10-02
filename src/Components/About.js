import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Drexel AI Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Us</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                        <h2>Important Links</h2>
                        <p>
                           <span>Join Our Slack Workspace <a href="https://bit.ly/drexel-ai" target="_blank">Here</a></span><br />
                           <span>Check out our code on <a href="https://github.com/drexelai" target="_blank">GitHub</a></span><br/>
                           <span>Be a member on <a href="https://dragonlink.drexel.edu/engage/organization/drexelai" target="_blank">Dragonlink</a></span><br/>
                           <span>Sign up for our ongoing <a href="https://bit.ly/ongoing-ai-projects" target="_blank">projects</a></span><br/>
                           <span>Be a Mentor/Mentee to teach/learn <a href="https://forms.gle/CevEZGHuixvBHsBR9" target="_blank"> here</a></span>
                        </p>
                     </div>

                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
