import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ContactPage from '../contact';
import { ORDERS } from '../../utils/mocks/mockedOrders';
import withTestRouter from '../../utils/mocks/withTestRouter';

const setup = () => {
  const push = jest.fn();
  const wrapper = render(withTestRouter(<ContactPage orders={ORDERS} />,
    {
      pathname: "/"
    }
  ));
  const heading = wrapper.getByTestId('contact-us-heading');
  const dropdownToggle = wrapper.getByTestId('dropdown-toggle');
  const inputName = wrapper.getByTestId('nameAuthor');
  const inputPhone = wrapper.getByTestId('phoneAuthor');
  const inputEmail = wrapper.getByTestId('emailAuthor');
  const inputMessage = wrapper.getByTestId('emailBody');
  const send = wrapper.getByTestId('send');
  const captcha = wrapper.getByTestId('captcha');
  // In Captcha case operate with classNames

  return {
    heading,
    dropdownToggle,
    inputName,
    inputPhone,
    inputEmail,
    inputMessage,
    captcha,
    send,
    ...wrapper,
  }
};

describe('<Contact /> ', () => {
  it('loads and displays header', () => {
    const { heading } = setup()
    expect(heading).toHaveTextContent('Contact Us')
  })

  describe('has a Order reference dropdown that is', () => {
    it('rendered', () => {
      const { dropdownToggle } = setup()
      expect(dropdownToggle).toBeDefined()
    })

    it('onClick', async () => {
      let dropdownItems = []
      const { dropdownToggle } = setup()
      fireEvent.click(dropdownToggle)
      
      await waitFor(() => {
        dropdownItems = screen.getAllByTestId('dropdown-item')
        expect(dropdownItems.length).toEqual(6)
      })

      const firstOrder = dropdownItems[0]
      fireEvent.click(firstOrder)
      expect(dropdownToggle).toHaveTextContent('AXG543')
    })
  })

  describe('has a Name input that is', () => {
    it('rendered', () => {
        const { inputName } = setup()
        expect(inputName).toBeDefined()
    })

    it('onChange', () => {
        const { inputName } = setup()
        fireEvent.change(inputName, { target: { value: 'test!' } })
        expect(inputName.value).toBe('test!')
    })
  })

  describe('has a Phone input that is', () => {
    it('rendered', () => {
        const { inputPhone } = setup()
        expect(inputPhone).toBeDefined()
    })

    it('test', () => {
        const { inputPhone } = setup()
        fireEvent.change(inputPhone, { target: { value: 'test!' } })
        expect(inputPhone.value).toBe('test!')
    })
  })

  describe('has a Email input that is', () => {
    it('rendered', () => {
        const { inputEmail } = setup()
        expect(inputEmail).toBeDefined()
    })

    it('onChange', () => {
        const { inputEmail } = setup()
        fireEvent.change(inputEmail, { target: { value: 'test!' } })
        expect(inputEmail.value).toBe('test!')
    })
  })

  describe('has a Message area that is', () => {
    it('rendered', () => {
        const { inputMessage } = setup()
        expect(inputMessage).toBeDefined()
    })

    it('onChange', () => {
        const { inputMessage } = setup()
        fireEvent.change(inputMessage, { target: { value: 'Haujahha!' } })
        expect(inputMessage.value).toBe('Haujahha!')
    })
  })

  describe('has a ReCaptcha that is', () => {
    it('rendered', () => {
        const { captcha } = setup()
        expect(captcha).toBeDefined()
    })
  })

  describe('has a Send button that is', () => {
    it('rendered', () => {
        const { send } = setup()
        expect(send).toBeDefined()
    })

    it('disabled', () => {
      const { send } = setup()
      expect(send).toBeDisabled()
    })
  })
})