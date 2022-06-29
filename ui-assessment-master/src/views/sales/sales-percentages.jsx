import React from 'react'
import SalesPercentage from "./sales-percentage"
import {calcPercentage} from "../../misc/calculations"
import PropTypes from 'prop-types'

const calcSuccessfulUploadsInPercent = ({successfulUploads, uploads}) => calcPercentage({total: uploads, part: successfulUploads})
const calcLinesSavedInPercent = ({linesAttempted, linesSaved}) => calcPercentage({total: linesAttempted, part: linesSaved})

const SalesPercentages = ({salesOverviewData}) => {
    const successfulUploadsInPercent = calcSuccessfulUploadsInPercent(salesOverviewData)
    const linesSavedInPercent = calcLinesSavedInPercent(salesOverviewData)
    return (
        <div className="sales-percentages">
            <SalesPercentage text="UPLOAD SUCCESS" percentage={successfulUploadsInPercent} />
            <SalesPercentage text="LINES SAVED"  percentage= {linesSavedInPercent}/>
        </div>
    )
}

SalesPercentages.propTypes = {
    salesOverviewData: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired
    }).isRequired
}

export default SalesPercentages