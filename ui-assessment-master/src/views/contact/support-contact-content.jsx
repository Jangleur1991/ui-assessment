import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import PropTypes from 'prop-types'


const SupportContactContent = ({contact}) => {
    const {email, name} = contact
    return (
        <div className="support-contact-content">
            <div className="support-button">
                <button className="support-btn">S</button>
            </div>
            <div className="support-contact-data">
                <p className="support-headline">{name}</p>
                <div className="contact-mail-phone">
                    <p className="email"><i className="fa fa-envelope"></i>{email}</p>
                	<p style={{marginLeft: "15px"}}>  020 3362 4208</p>
                </div>
            </div>
        </div>
    )
}

SupportContactContent.propTypes = {
    contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default SupportContactContent