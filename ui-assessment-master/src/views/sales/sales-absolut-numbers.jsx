import React from 'react'
import PropTypes from 'prop-types'

const SalesAbsolutNumbers = ({successfulUploads, linesSaved}) => {
    return (
        <div className="sales-absolut-numbers">
            <div style={{display: "grid", gridTemplateColumns: "50% 50%"}} >
                <p style={{fontWeight: "bold", whiteSpace: "nowrap"}}><i className="fa fa-upload"></i>Sales</p>
                <span style={{alignSelf: "center", justifySelf: "end", padding: "10px", color: "gray"}}><i className="fa fa-info-circle"></i></span>
            </div>
            <p id="absolutNumbersText" style={{marginLeft: "15px"}}>You had <strong>{successfulUploads} uploads</strong> and <strong>{linesSaved}</strong> lines added.</p>
        </div>
    )
}

SalesAbsolutNumbers.propTypes = {
    salesOverviewData: PropTypes.shape({
        successfulUploads: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired
    })
}

export default SalesAbsolutNumbers