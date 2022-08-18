import React from 'react';

const Footer = () => {
    return (
        <div  className='footer-body mt-3'>
            <div className='pt-3'>
                <h3 className='text-center'><b>Author</b></h3>
                <h5 className='text-center'>Krishan kant Mehra</h5>
            </div>
            <hr/>
            
            <div>
                <h4 className='text-center'><b>Contact Details</b></h4>
                <div className='d-flex flex-row justify-content-center'>
                    <a href = "mailto: krishankantmehra@example.com" className='contact-links' id="googleLink" >
                        <i className='fa fa-envelope'/>
                    </a>
                    <a href = "https://github.com/krishankantmehra" className='contact-links' id="githubLink" target={"_blank"} rel="noreferrer">
                        <i className='fa fa-github'/>
                    </a>
                    <a href = "https://www.linkedin.com/in/krishan-kant-mehra-aa050819b/" className='contact-links' id="linkedinLink" target={"_blank"} rel="noreferrer">
                        <i className='fa fa-linkedin'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
