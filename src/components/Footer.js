import React from 'react'

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({accessToken: process.env.GATSBY_MAPBOX_API, scrollZoom: false});

const Footer = () => {

    return (
      <footer className="footer">
       <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                <div className="p-4">
                  <Map
                    style="mapbox://styles/pandabrand/ckgpxhk412p7u1amqb43ad3lw"
                    containerStyle={{
                      height: '450px',
                      width: '100%',
                      border: '2px solid gray',
                    }}
                    center={{
                      lng: -87.707,
                      lat: 41.930
                    }}
                    zoom={[17]}
                  >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                      <Feature coordinates={[-87.70692,41.9299]} />
                    </Layer>
                  </Map>
                </div>
              </div>
              <div className="column is-4">
                <div className="is-flex is-flex-direction-column is-justify-content-space-around is-align-content-flex-start is-align-items-flex-start ml-auto mr-auto has-fit-content height-100">
                  <div className="block">
                    <span className="has-text-weight-bold">Address:</span><br/>
                    2651 North Kedzie Ave.<br/>
                    Chicago, IL 60647<br/>
                    773-342-7040
                  </div>
                  <div className="block">
                  <span className="has-text-weight-bold">Hours:</span><br/>
                    Tuesday - Saturday: 10-6<br/>
                    Sunday: 10-4
                  </div>
                  <div className="block">
                  <span className="has-text-weight-bold">Holiday Hours:</span><br/>
                    Closed Dec. 24, 25, & 31<br/>
                    Check Instagram for updates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
