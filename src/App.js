import React, {Component} from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import "bootstrap/dist/css/bootstrap.min.css";

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap defaultZoom={8} defaultCenter={{lat: 30.7333, lng: 76.7794}}>
            {props.isMarkerShown && (
                <Marker position={{lat: 30.7333, lng: 76.7794}}/>
            )}
        </GoogleMap>
    ))
);

class App extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>GOOGLE MAPS API with REACT JS</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            MAPS
                            <div>
                                <MyMapComponent
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRpNwGR1_Foxo81c_8i4eZzDeeLesmQlY"
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    containerElement={<div style={{height: `400px`}}/>}
                                    mapElement={<div style={{height: `100%`}}/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
