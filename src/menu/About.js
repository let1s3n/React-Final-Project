import React from "react";
const About = () => {
    return (
        <div className="center">
            
            <div className="container">
            <p>Hi there. My name's Jose. I'm an all kinda tech passionate software developer who likes solving problems, puzzles, chess, math, music, reading and hang out with friends.   </p>
            <span>You can find me on the following social network accounts:</span>
            <figure>
                <a href="https://www.facebook.com/jcarneiro1"><img src={require('../img/facebook.png')} alt="facebook-logo" width="50" height="50" /></a>
                <a href="https://twitter.com/jcarneiroe"><img src={require('../img/twitter.png')} alt="twitter-logo" width="50" height="50" /></a>
                <a href="https://www.instagram.com/carneirojose91/"><img src={require('../img/instagram.png')} alt="instagram-logo" width="50" height="50" /></a>
                <a href="https://plus.google.com/u/1/102768397638203354119"><img src={require('../img/google-plus.png')} alt="google-plus-logo" width="50" height="50" /></a>
                <a href="https://www.linkedin.com/in/jcarneiro91/"><img src={require('../img/linkedin.png')} alt="linkedin-logo" width="50" height="50" /></a>
            </figure>
            </div>
        </div>





    );
};

export default About;