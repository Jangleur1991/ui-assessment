import React from 'react'
import SalesAbsolutNumbers from "./sales-absolut-numbers"
import SalesPercentages from "./sales-percentages"
import PropTypes from 'prop-types'

const SalesOverview = ({salesOverview}) => {
    return (
        <div className="sales-overview">
            <SalesAbsolutNumbers successfulUploads={salesOverview.successfulUploads} linesSaved={salesOverview.linesSaved} />
            <SalesPercentages salesOverviewData={salesOverview} />
        </div>
    )
}

SalesOverview.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired
    }).isRequired
}

export default SalesOverview