import given from 'given2';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  function renderRestaurantDetailPage() {
    return render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));
  }

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  given('state', () => ({
    regions: [],
    categories: [],
    restaurants: [],
    restaurantDetail: given.restaurantDetail,
    selectedRegion: null,
    selectedCategory: null,
    selectedRestaurant: null,
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));
    jest.clearAllMocks();
  });

  context('with restaurantDetail', () => {
    it('renders restaurant name, address, and menus', () => {
      given('restaurantDetail', () => restaurantDetail);

      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소: 서울 강남구');
      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without restaurantDetail', () => {
    it('renders message', () => {
      given('restaurantDetail', () => null);

      const { container } = renderRestaurantDetailPage();

      expect(container).toHaveTextContent('레스토랑 정보가 없어요!');
    });
  });
});
