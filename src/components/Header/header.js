import React from 'react'

import Footer from '../Footer/footer'
import avatar from '../../assets/images/einar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Einar</strong>, a web <br />
                    developer living in Iceland<br />
                    .</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
