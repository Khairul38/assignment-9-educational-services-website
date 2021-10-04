import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark d-flex justify-content-between p-4 align-items-center">
            <div>
                <img width="100" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
            </div>
            <div>
                <p className="text-white m-0">© 2021 Udemy, Inc.</p>
            </div>
        </div>
    );
};

export default Footer;