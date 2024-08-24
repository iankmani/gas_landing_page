import React from 'react'
import './Home.css'
import manholdinggas from '../../assets/manholdinggas.jpeg'

const Home = () => {
  return (
    <section className="Meet-us">
        <div className="inside-meet-up">
            <div className="words-part">
                <div className="bigwords">
                    <h1>Discover the best gas cooking solutions</h1>
                </div>
                <div className="smallwords">
                    <p>Our products are designed to make your cooking experience easier and more enjoyable. From induction
                        cooktops to gas ranges, we have the perfect solution for you.</p>
                </div>
                <div className="buttons">
                    <button className="btn1">Learn More</button>
                    <button className="btn2">Sign up</button>

                </div>
            </div>
            <div className="meet-us-image">
                <img src={manholdinggas} alt="image of gases" className="meet-us-img" />
            </div>
        </div>
    </section>
  )
}

export default Home