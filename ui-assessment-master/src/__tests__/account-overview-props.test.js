import { render } from '@testing-library/react'
import SalesOverview from '../views/sales/sales-overview'
import SalesPercentages from '../views/sales/sales-percentages'
import React from 'react'

const mockSalesAbsolutNumbers = jest.fn()
jest.mock("../views/sales/sales-absolut-numbers", () => (props) => {
      mockSalesAbsolutNumbers(props)
      return <mock-childComponent />
});

const mockSalesPercentage = jest.fn()
jest.mock("../views/sales/sales-percentage", () => (props) => {
      mockSalesPercentage(props)
      return <mock-childComponent />
});

const salesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    astUploadDate: 1605001226079,
}

describe("Test SalesOverview", () => {
  test('Sales Absolut Numbers receive correct props', () => {

    render(<SalesOverview salesOverview={salesOverview} />);

    expect(mockSalesAbsolutNumbers).toHaveBeenCalledWith(
          expect.objectContaining({
                 linesSaved: 4,
                 successfulUploads: 3,
           }))
    })
})

describe("Test SalesPercentages", () => {
  test('Sales Percentage receive correct props', () => {
         render(<SalesPercentages salesOverviewData={salesOverview} />);
         expect(mockSalesPercentage).toHaveBeenCalledWith(
             expect.objectContaining({
                text: "LINES SAVED",
                percentage: 20,
          }))
  })
})

