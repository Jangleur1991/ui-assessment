import { render, screen } from '@testing-library/react';
import AccountOverview from '../views/account-overview';
import SupportContactContent from '../views/contact/support-contact-content';
import SalesAbsolutNumbers from '../views/sales/sales-absolut-numbers'
import SalesOverview from '../views/sales/sales-overview'
import React from 'react'


describe("Test Account Overview", () => {
    test('Renders Account Overview', () => {
        const accountOverviewStub = {
          supportContact: {
            name: 'John Smith',
            email: 'john.smith@feefo.com'
          },
          salesOverview: {
            uploads: 8,
            successfulUploads: 3,
            linesAttempted: 20,
            linesSaved: 4,
            lastUploadDate: 1605001226079,
          }
        }
      const { getByText } = render(<AccountOverview data={accountOverviewStub} />)


      //Check Texts
      const accountOverview = getByText(/Account Overview/i)
      const supportContactHeader = getByText(/YOUR FEEFO SUPPORT CONTACT/i)
      const sales = getByText(/Sales/i)
      const uploadSuccess = getByText(/UPLOAD SUCCESS/i)
      const linesSaved = getByText(/LINES SAVED/i)

      expect(accountOverview).toBeInTheDocument()
      expect(supportContactHeader).toBeInTheDocument()
      expect(sales).toBeInTheDocument()
      expect(uploadSuccess).toBeInTheDocument()
      expect(linesSaved).toBeInTheDocument()
    }),

    test('Renders Support Contact', () => {

        const supportContact = {name: 'John Smith', email: 'john.smith@feefo.com'}
        const { getByText } = render(<SupportContactContent contact={supportContact} />)

        const name = getByText(`${supportContact.name}`)
        const email = getByText(`${supportContact.email}`)

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()

    }),

    test('Renders Sales Absolut Numbers', () => {

            const salesOverview = {
                successfulUploads: 3,
                linesSaved: 4,
            }

            const { getByText } = render(<SalesAbsolutNumbers successfulUploads={salesOverview.successfulUploads} linesSaved={salesOverview.linesSaved} />)

            const textContainingYouHad = getByText((content, element) => content.startsWith('You had'))
            expect(textContainingYouHad).toBeInTheDocument()
      })
})
