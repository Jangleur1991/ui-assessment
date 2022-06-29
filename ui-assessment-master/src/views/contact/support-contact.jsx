import React from 'react'
import SupportContactContent from "./support-contact-content";
import PropTypes from 'prop-types'

const SupportContact = ({contact}) => {
    return (
        <div className="support-contact">
            <h4 style={{color: "gray"}}>YOUR FEEFO SUPPORT CONTACT</h4>
            <SupportContactContent contact={contact}/>
        </div>
    )
}

SupportContact.propTypes = {
    contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default SupportContact