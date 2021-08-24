import React from 'react';
import musicNote from '../images/icon-music.svg';
import hero from '../images/illustration-hero.svg';

function Card() {
  return (
    <div className='bg-image'>
      <div className='card parent'>
        <div className='card-holder'>
          <div className='column'>
            <img className='music-hero' src={hero} alt='music-hero'></img>
            <div className='title-parent'>
              <h1 className='title'>Order Summary</h1>
            </div>
            <div className='description-parent'>
              <text className='description'>
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anytime you like!
              </text>
            </div>

            <div className='plan-info-container'>
              <div className='plan-type'>
                <div className='music-note-parent'>
                  <img src={musicNote} alt='music-icon' />
                </div>
                <div className='name-price-parent'>
                  <text className='plan-name'>Annual Plan</text>
                  <text className='plan-price'>$59.99/year</text>
                </div>
                <div className='change-type-parent'>
                  <a href='http://example.com' className='change-type'>
                    Change
                  </a>
                </div>
              </div>
            </div>

            <button className='payment-btn'>Proceed to Payment</button>
            <a href='http://example.com' className='cancel-btn'>
              Cancel Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
