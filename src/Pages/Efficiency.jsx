import React from 'react'
import './Efficiency.css'
import fastdelivery from '../../public/fastdelivery.jpeg'
import { RiCheckboxCircleFill } from "react-icons/ri";


const Efficiency = () => {
  return (
    <div className="mainn">

    <div className="efficiency-page">
    <div className="efficiency">
        <p>Efficiency</p>
    </div>
    <div className="assuarance">
        <h2>Order online, Get gas delivered</h2>
            <h2>To Your Doorstep</h2>
    </div>
    <div className="efficiency-paragraph">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur error vel, eligendi cupiditate nam animi itaque nulla sint culpa mollitia!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem vero culpa neque explicabo alias ipsam nesciunt amet facilis doloribus esse.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laudantium voluptas aut vel voluptate tenetur consequuntur magni ad ipsum. Fugiat.</p>
    </div>
    <div className="efficiency-center">
        <div className="firstleft">

        
        <div className="leftside-eff">
            <p className='eff-icon'><RiCheckboxCircleFill /></p>
            <p className='bold'>Order Online</p>
            <p className='align'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic placeat commodi repellat nihil?</p>
        </div>
        <div className="leftside-eff">
            <p className='eff-icon'><RiCheckboxCircleFill /></p>
            <p className='bold'>Order Online</p>
            <p className='align'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic placeat commodi repellat nihil?</p>
        </div>
        </div>
    
    <div className="middle-eff">
        <img src={fastdelivery} alt="image kubwa ya gas services"  className='eff-image'/>
    </div>
    <div className="firstleft">

        
        <div className="leftside-eff">
            <p className='eff-icon'><RiCheckboxCircleFill /></p>
            <p className='bold'>Order Online</p>
            <p className='align'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic placeat commodi repellat nihil?</p>
        </div>
        <div className="leftside-eff">
            <p className='eff-icon'><RiCheckboxCircleFill /></p>
            <p className='bold'>Order Online</p>
            <p className='align'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic placeat commodi repellat nihil?</p>
        </div>
        </div>
       
    </div>
    <div className="eff-btn">
            <button>Learn More</button>
        </div>
    /</div>
    </div>
  )
}

export default Efficiency