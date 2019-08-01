import React, { Component } from 'react'

// components
import Showcase from '../components/showcase/Showcase';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Home extends Component {

    render() {
        return ( 
            <div>
                <section id="showcase-last-view" className="showcase-container">
                    <Showcase />
                </section>
            </div>
        )
    }

}

export default Home