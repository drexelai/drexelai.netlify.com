import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Meetings from './Components/Meetings';
import Portfolio from './Components/Portfolio';
import MadeBy from 'react-made-by';
import FeedBack from 'react-feedback-popup';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      clubData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getClubData() {
    $.ajax({
      url: '/clubData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ clubData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getClubData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.clubData.main} />
        <About data={this.state.clubData.main} />
        <Team data={this.state.clubData.team} />
        <Portfolio data={this.state.clubData.portfolio} />
        <Meetings data={this.state.clubData.meetings} />
        <Contact data={this.state.clubData.main} />
        <Footer data={this.state.clubData.main} />
        <FeedBack
                position="left"
                numberOfStars={5}
                handleSubmit={(data) => 
                    fetch('https://formspree.io/moqjznjg', {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(data),
                    }).then((response) => { 
                        if (!response.ok) {
                            return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
                        }
                        response.json()
                    }).then(() => {
                        alert('Success!');
                    }).catch((error) => {
                        alert('Our servers are having issues! We couldn\'t send your feedback!', error);
                    })
                }
            />
            <MadeBy
                destination="https://github.com/drexelai"
                text="Made with ☕ by Drexel AI"
            />
      </div>
    );
  }
}

export default App;
