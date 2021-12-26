import { render, fireEvent, waitFor } from '@testing-library/react'
import CardDetails from '../forms/cards/cards';

import { ORDERS } from '../../utils/mocks/mockedOrders';
const setup = (searchInput = '') => {
  const setSearchInput = jest.fn();
  const onSearch = jest.fn();

  const wrapper = render(<CardDetails cardInfo={ORDERS[0]}  />)

  const orderReference = wrapper.getByTestId('order-ref')
  const orderDeliveryStatus = wrapper.getByTestId('order-delivery-status')
  const orderCost = wrapper.getByTestId('order-cost')

  return {
    orderReference,
    orderDeliveryStatus,
    orderCost,
    ...wrapper,
  }
}

describe('<CardDetails /> ', () => {
    describe('has an Order info', () => {
          it('order reference', () => {
            const { orderReference } = setup()
            expect(orderReference).toHaveTextContent('AXG543')
          })
    
          it('order delivery status if not delivered', () => {
            const { orderDeliveryStatus } = setup()
            expect(orderDeliveryStatus).toHaveTextContent('Not Delivered')
          })
    
          it('order delivery status if delivered', () => {
            const { orderDeliveryStatus } = setup('ATU499')
            expect(orderDeliveryStatus).toHaveTextContent('Delivered')
          })
    
          it('order cost', () => {
            const { orderCost } = setup()
            expect(orderCost).toHaveTextContent('8.2')
          })
      })


})