import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      
      var skills = this.props.data.skills.map(function (skills) {
        var projectImage = 'images/team/' + skills.image;
        return <div key={skills.name} className="columns feature-item">
          <img className='skill' alt={skills.name} src={projectImage} />
          <h5>{skills.name}</h5>
          <p>{skills.position}</p>
        </div>
      })

      var ambassadors = this.props.data.ambassadors.map(function (ambassadors) {
        var projectImage = 'images/ambassadors/' + ambassadors.image;
        return <div key={ambassadors.name} className="columns feature-item">
          <img className='skill' alt={ambassadors.name} src={projectImage} />
          <h5>{ambassadors.name}</h5>
          <p>{ambassadors.position}</p>
        </div>
      })

    }

    return (
      <section id="resume">
        
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Our Team</span></h1>
          </div>
          <div>
            <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
            </ul>
          </div>

          <div className="three columns header-col">
            <h1><span>Our Ambassadors</span></h1>
          </div>
          <div>
            <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {ambassadors}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;