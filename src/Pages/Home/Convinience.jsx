import React from 'react'
import './Convinience.css'
import { RiCheckboxCircleFill } from "react-icons/ri";
import Convimage from '../../../public/convinience.jpeg'


const Convinience = () => {
  return (
    <div className="mainConv">
        <div className="convinienceSector">
            <div className="leftConv">
                <p className="eff-icon"><RiCheckboxCircleFill /></p>
                <h1 className="conv-title">Convinience</h1>
                <p className="conv-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi reprehenderit praesentium ex incidunt. Facilis illo porro aspernatur similique perferendis.
                </p>
                {/* <p className="conv-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint?
                </p>
                <p className="conv-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint?
                </p> */}
            </div>
            <div className="right-conv">
                <div className="conv-image">
                    <img src={Convimage} alt="convinience-image" className="conv-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Convinience