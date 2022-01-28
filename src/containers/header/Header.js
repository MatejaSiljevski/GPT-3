import React from 'react';
import People from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'


function Header() {
  return (
    <>
      <div className="gpt3__header section__padding" id='home'>
        <div className="gpt3__header-content">
          <h1 className='gradient__text'>
            Lets Build Something amazing with GPT3 OpenAI
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sint amet facere at minima excepturi, nam molestiae quo nobis ullam tempora, ipsam explicabo, incidunt corporis?</p>


          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email address" />
            <button type='button'>Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <img  alt='people' src={People}/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>

        </div>
          <div className="gpt3__header-image">
            <img src={ai} alt='ai'/>
          </div>
      </div>
    </>
  )
}

export default Header;
