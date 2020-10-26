import React, { useRef } from 'react'
import { Link } from 'gatsby'

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
                <section className="info">
                  <div class="block">
                    Address:<br/>
                    2651 North Kedzie Ave.<br/>
                    Chicago, IL 60647<br/>
                    773-342-7040
                  </div>
                  <div class="block">
                    Hours:<br/>
                    Tuesday - Saturday: 10-6<br/>
                    Sunday: 10-4
                  </div>
                  <div class="block">
                    Holiday Hours:<br/>
                    Closed Dec. 24, 25, & 31<br/>
                    Check Instagram for updates
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
