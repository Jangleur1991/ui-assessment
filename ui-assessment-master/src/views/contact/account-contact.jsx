import React from 'react'
import SupportContact from "./support-contact"
import PropTypes from 'prop-types'

const AccountContact = ({contact}) => {
    return (
        <div className="account-overview-content">
            <p className="account-overview-heading">Account Overview</p>
            <SupportContact contact={contact} />
         </div>
    )
}

AccountContact.propTypes = {
    contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}
export default AccountContact