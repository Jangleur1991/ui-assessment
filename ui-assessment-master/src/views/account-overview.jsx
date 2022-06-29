import React from 'react'
import AccountContact from "./contact/account-contact"
import SalesOverview from "./sales/sales-overview"
import '../css/account-overview.css'
import PropTypes from 'prop-types'

const AccountOverview = ({data}) => {
  return (
    <div className="account-overview">
      <AccountContact contact={data.supportContact} />
      <SalesOverview salesOverview={data.salesOverview}/>
    </div>
  )
}

AccountOverview.propTypes = {
    data: PropTypes.shape({
        supportContact: PropTypes.object.isRequired,
        salesOverview: PropTypes.object.isRequired
    }).isRequired
}

export default AccountOverview;