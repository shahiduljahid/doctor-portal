import React from 'react';
import fuloride from '../../../images/flouride.png'
import cavity from '../../../images/cavity.png'
import tooth from '../../../images/tooth.png'
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {

    const services =[
        {
            img:fuloride,
            title:'Fluoride Treatement',
            des:'lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the'

        },
        {
            img:cavity,
            title:'Cavity Filling',
            des:'lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the'

        },
        {
            img:tooth,
            title:'Teath Whitening',
            des:'lorem ipsum is simply dummy text of the printing and typesetting indust ipsum has been the'

        }
    ]
    return (
        <div>
            <div className="row justify content-center  text-center">
                <div className="col-md-12 ">
                    <h4 style={{color: ' #1CC7C1'}}>Our services</h4>
                    <h1 style={{color: ' #39405'}}>Services we provides</h1>

                </div>
                <div className="col-md-12">
                    <div className="row justify-content-center mt-5 mb-2">
                        {
                            services.map(ser=><ServiceCard service={ser}></ServiceCard>)
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;