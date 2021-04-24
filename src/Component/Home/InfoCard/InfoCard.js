import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className={`col-md-3 mb-2 mx-2 rounded py-3 text-light px-4 d-flex align-items-center info-${info.background}` }>
            <div className="me-4">
            <FontAwesomeIcon style={{fontSize:'3em',
        color:'white'}} icon={info.icon} />

            </div>
            <div style={{textAlign:'left'}}>
                <h6 style={{color:'white'}} >{info.title}</h6>
                <small style={{color:'white'}} >{info.des}</small>
            </div>


            
            
        </div>
    );
};

export default InfoCard;