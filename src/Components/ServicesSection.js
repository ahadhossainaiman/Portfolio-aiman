import React from 'react';

function ServicesSection({image, title, text}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt="" style={{width:"20%",color:"4a00e0"}}/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
