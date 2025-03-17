import React from 'react'
import reaction_icon from '../assets/images/icon-reaction.svg'
import memory_icon from '../assets/images/icon-memory.svg'
import verbal_icon from '../assets/images/icon-verbal.svg'
import visual_icon from '../assets/images/icon-visual.svg'
const Summary = () => {
    return (
        <div className='summary-container'>
            <div className='summary-title-container'>
                <p className='summary-title-text'>Summary</p>
            </div>
            <div className='summary-categories-container'>
                <div className='summary-category reaction'>
                    <div className='category-name-icon-container'>
                        <div className='category-icon' >
                            <img src={reaction_icon} ></img>
                        </div>  
                        <p className='category-name'>Reacción</p>
                    </div>

                    <div className='category-result'>
                        <p><span>80</span> / 100</p>
                    </div>
                </div>

                <div className='summary-category memory'>
                    <div className='category-name-icon-container'>
                        <div className='category-icon'>
                        <img src={memory_icon} ></img>
                        </div>
                        <p className='category-name'>Memoria</p>
                    </div>
                    <div className='category-result'>
                        <p><span>76</span> / 100</p>
                    </div>
                </div>

                <div className='summary-category verbal'>
                    <div className='category-name-icon-container'>
                        <div className='category-icon'>
                            <img src={verbal_icon} ></img>
                        </div>
                        <p className='category-name'>Verbal</p>
                    </div>
                    
                    <div className='category-result'>
                        <p><span>93</span> / 100</p>
                    </div>
                </div>

                <div className='summary-category visual'>
                    <div className='category-name-icon-container'>
                        <div className='category-icon'>
                            <img src={visual_icon} ></img>
                        </div>
                        <p className='category-name'>Visual</p>
                    </div>
                    <div className='category-result'>
                        <p><span>69</span> / 100</p>
                    </div>
                </div>
            </div>
            
            <button className='summary-button-container'>
                Continuar
            </button>
        </div>
    )
}

export default Summary