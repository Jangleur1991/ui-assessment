import React from 'react'
import PropTypes from 'prop-types'

const SalesPercentage = ({percentage, text}) => {
    return (
        <div className="sales-percentage">
            <div style={{marginLeft: "15px"}}>
                <h1 style={{color: "green", fontWeight: "bold", marginBottom: "-15px"}}>{percentage}%</h1>
                <h4 style={{color: "gray"}}>{text}</h4>
            </div>
        </div>
    )
}

SalesPercentage.propTypes = {
    text: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default SalesPercentage