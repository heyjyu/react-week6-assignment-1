import given from 'given2';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  function renderRestaurantDetailContainer() {
    return render((
      <RestaurantDetailContainer restaurantId="1" />
    ));
  }

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  given('state', () => ({
    restaurantDetail: given.restaurantDetail,
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));
    jest.clearAllMocks();
  });

  context('with restaurantDetail', () => {
    given('restaurantDetail', () => restaurantDetail);

    it('renders restaurant information', () => {
      const { container } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소: 서울 강남구');
      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without restaurantDetail', () => {
    given('restaurantDetail', () => null);

    it('renders no item message', () => {
      const { container } = renderRestaurantDetailContainer();

      expect(container).toHaveTextContent('레스토랑 정보가 없어요!');
    });
  });
});
