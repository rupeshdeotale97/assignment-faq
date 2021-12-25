import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import withTestRouter from '../../utils/mocks/withTestRouter';
import App from '..'

const setup = () => {
  const push = jest.fn();

  const wrapper = render(withTestRouter(<App />,
    {
      push,
      pathname: "/order-details"
    }
  ))

  const heading = wrapper.getByTestId('heading')
  const input = wrapper.getByTestId('search')
  const contactForm = wrapper.getByTestId('contactUs')
  const orderDetails = wrapper.getByTestId('order')

  return {
    heading,
    input,
    contactForm,
    orderDetails,
    push,
    ...wrapper,
  }
}

describe('<App /> ', () => {
  it('header rendered', () => {
    const { heading } = setup()
    expect(heading).toHaveTextContent('Help Center')
  })

  describe('search input', () => {
    it('render', () => {
      const { input } = setup()
      expect(input).toBeDefined()
    })

    it('interactable', () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: 'Order Ref' } })
      expect(input.value).toBe('Order Ref')
    })
  })

  describe('has Contact form and Order Details cards where', () => {
    describe('Contact Form card is', () => {
      it('rendered', () => {
        const { contactForm } = setup()
        expect(contactForm).toBeDefined()
      })
  
      it('redirecting to /contact-page', () => {
        const { contactForm, push } = setup()
        fireEvent.click(contactForm)
        expect(push).toHaveBeenCalledWith("/contact");
      })
    })

    describe('Order Details page is', () => {
      it('rendered', () => {
        const { orderDetails } = setup()
        expect(orderDetails).toBeDefined()
      })
  
      it('redirecting to /order-details', () => {
        const { orderDetails, push } = setup()
        fireEvent.click(orderDetails)
        expect(push).toHaveBeenCalledWith("/order-details");
      })
    })
  })
})