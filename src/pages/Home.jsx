import React, { Component } from 'react'

// components
import Showcase from '../components/showcase/Showcase';

// fontawesome
import FullBanner from '../components/FullBanner';

class Home extends Component {

    render() {
        return (
            <>
                <FullBanner />
                <section id="showcase-last-view" className="showcase-container">
                    <Showcase />
                </section>
            </>
        )
    }

}

export default Home