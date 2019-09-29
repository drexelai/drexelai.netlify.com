import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      clubData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getClubData(){
    $.ajax({
      url:'/clubData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({clubData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getClubData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.clubData.main}/>
        <About data={this.state.clubData.main}/>
        <Resume data={this.state.clubData.resume}/>
        <Portfolio data={this.state.clubData.portfolio}/>
        <Testimonials data={this.state.clubData.testimonials}/>
        <Contact data={this.state.clubData.main}/>
        <Footer data={this.state.clubData.main}/>
      </div>
    );
  }
}

export default App;
