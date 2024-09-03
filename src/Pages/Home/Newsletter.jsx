import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <div className="news-msg">
            <h1>Stay Updated with our latest Products</h1>
        </div>
        <div className="news-right">
            <div className="news-para">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum!</p>
            </div>
            <div className="news-middle">
            <div className="news-input">
                <input type="email" placeholder='Your Email Address' />
                </div>
                <div className="news-subs-btn">
                    <button>Subscribe Now</button>
                </div>
            
            </div>
            <div className="news-last-para">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter