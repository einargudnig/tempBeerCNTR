import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="https://github.com/einargudnig" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/einar-gudjonsson/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="mailto:einargudnig@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
