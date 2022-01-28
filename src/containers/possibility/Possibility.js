import React from 'react';
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond our imagination
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, provident eveniet. Nulla officia dolorem animi tempora, soluta necessitatibus facilis tempore doloremque provident excepturi vero harum quas suscipit reprehenderit fugit perspiciatis.</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;
