import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

/* Pulling map */
class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 33.448376,
        lng: -112.074036
      },
      zoom: 14,
    });
    window.mapObject = map;
  }

  loadScript() {
    let scriptElement = this.createMapS();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    script.parentNode.insertBefore(scriptElement, script);
    window.initMap = this.initMap;
  }

/* Used API key from Google*/
  createMapS() {
    let mapScript = document.createElement('script');
    const API_KEY = 'AIzaSyCbGGWY4jFTTTaQJC5hJvHoOFfRwiHxsOM';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

    
/* Pulls it together*/    
  render() {
    this.loadScript();
    return ( <
      div className = 'App' >
      <
      Header / >
      <
      Content / >
      <
      /div>
    );
  }
}

export default App;
