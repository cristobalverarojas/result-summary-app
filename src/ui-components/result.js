import React from 'react'

const Result = () => {
    
  return (
    <div className="result-container">
        {/* Title text container */}
        <div className="result-title-container">
            <p className="result-title-text">Tu Resultado</p>
        </div>

        {/* Main number result container */}
        <div className="result-number-container">
            <div className="result-number-text">
                <p>76</p>
            </div>
            
            <div className="result-total-text">
                <p>of 100</p>
            </div>
        </div>

        <div className="result-comment-container">
            <p>Genial</p>
            <p>Has obtenido un puntaje mayor que el 65% de las personas que tomaron estos tests. </p>
        </div>
        
    </div>
  )
}

export default Result