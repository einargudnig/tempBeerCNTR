import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery/gallery'


import rebootThumb from '../assets/images/thumbs/rebootThumb.jpg'
import einarThumb from '../assets/images/thumbs/einarThumb.jpg'
import nflwebThumb from '../assets/images/thumbs/nflwebThumb.jpg'
import pythonThumb from '../assets/images/thumbs/pythonThumb.jpg'
import courseThumb from '../assets/images/thumbs/coursesThumb.jpg'
//import thumb06 from '../assets/images/thumbs/06.jpg'

import rebootFull from '../assets/images/fulls/rebootFull.jpg'
import einarFull from '../assets/images/fulls/einarFull.jpg'
import nflwebFull from '../assets/images/fulls/nflwebFull.jpg'
import pythonFull from '../assets/images/fulls/corrPython.png'
import courseFull from '../assets/images/fulls/coursesFull.png'
//import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: rebootFull, thumbnail: rebootThumb, caption: 'www.reboothack.is', description: '<a href="www.reboothack.is" target="_blank">www.reboothack.is</a> This project I made as a part of a project management group for Reboot Hack 2020. Technology we used was nodeJS(express) server with email sender to send emails to participants. The site is built with ReactJS, HTML, CSS, Bootstrap and Webpack. More info in github page. <a href="https://github.com/einargudnig/reboothackFORK" target="_blank">Project on Github</a>'},
    { id: '2', source: einarFull, thumbnail: einarThumb, caption: 'www.einagudni.com', description: '<a href="www.einargudni.com" target="_blank">www.einargudni.com</a> I wanted to make me a personal website, so I saw this opportunity to try something new. I tried using Gatsby, a framework good for static-sites. I also used graphQL with Gatsby. I had an earlier version of the site, as can be seen on the picture. But I wanted to show some projects I had done so I changed the site to what it is now. <a href="https://github.com/einargudnig/homepage2.0" target="_blank">Project on Github</a> '},
    { id: '3', source: pythonFull, thumbnail: pythonThumb, caption: '"Grade Checker"', description: 'I want to learn Python, I thought it would be fun to make a small script that logs on to my school site and checks if I have received my grades. If I have the script will send me an email to let me know. It is super simple but it was a fun project to do. <a href="https://github.com/einargudnig/gradeScraper" target="_blank">Project on Github</a>'},
    { id: '4', source: nflwebFull, thumbnail: nflwebThumb, caption: 'NFL Pick\'em', description: 'Changed an old school project, nodeJS webservice with PostgresQL database. Authenticated users, made the NFL 2019 schedule available for them to choose their winner from each game. Next plan was to make a Typescript frontend to use the webservice. Will hopefully have time and more experience to do that.  <a href="https://github.com/einargudnig/nflWebService" target="_blank">Project on Github</a>    '},
    { id: '5', source: courseFull, thumbnail: courseThumb, caption: 'Course-Advisor', description: '<a href="https://course-advisor-csui.herokuapp.com/" target="_blank">course-advisor-csui.herokuapp.com</a>  Created a platform for Computer Science students in University of Iceland to review and grade non-mandatory courses. Platform for students to get other reviews about courses from their fellow students. <a href="https://github.com/einargudnig/courseAdvisor" target="_blank">Project on Github</a> '}
    /* { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'} */
];

class HomeIndex extends React.Component {

    



    render() {
        const siteTitle = "Einar Guðni"
        const siteDescription = "Personal Site"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="about">
                            <h2>Einar Guðni Guðjónsson.</h2>
                        </header>
                        <p>I graduated from the University of Iceland with BSc in Computer Science in June 2020. <br /> 
                        I like to learn and try new things. <br />
                        </p>
                        <ul className="actions">
                            <li><a href="https://docdro.id/q0WVC0s" target="_blank" className="button">My CV</a></li>
                        </ul>

                        

                    </section>

                    <section id="projects">
                        <h2>Projects</h2>

                        <p>Here are a few projects I have made and been a part of building. I will add more projects!<br />
                            Most of them do have a link to a github repo, where there are more information.
                        </p>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/*<ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>*/}
                    </section>

                    {/*<section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>*/}

                </div>

            </Layout>
        )
    }
}

export default HomeIndex