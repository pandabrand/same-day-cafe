import React from 'react'

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({accessToken: process.env.GATSBY_MAPBOX_API});

const Footer = () => {

    return (
      <footer className="footer">
       <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns is-centered">
              <div className="column is-8">
                <Map
                  style="mapbox://styles/pandabrand/ckgpxhk412p7u1amqb43ad3lw"
                  containerStyle={{
                    height: '450px',
                    width: '100%',
                  }}
                  center={{
                    lng: -87.7093967,
                    lat: 41.929921
                  }}
                  zoom={[15]}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                      <Feature coordinates={[41.929921,-87.7093967]} />
                    </Layer>
                  </Map>
              </div>
              <div className="column is-4">
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-flex-start is-align-items-flex-start ml-auto mr-auto has-fit-content">
                  <div className="block">
                    Address:<br/>
                    2651 North Kedzie Ave.<br/>
                    Chicago, IL 60647<br/>
                    773-342-7040
                  </div>
                  <div className="block">
                    Hours:<br/>
                    Tuesday - Saturday: 10-6<br/>
                    Sunday: 10-4
                  </div>
                  <div className="block">
                    Holiday Hours:<br/>
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
