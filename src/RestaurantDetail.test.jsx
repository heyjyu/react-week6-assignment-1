import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  function renderRestaurantDetail({ detail }) {
    return render((
      <RestaurantDetail restaurantDetail={detail} />
    ));
  }

  context('with restaurantDetail', () => {
    it('renders restaurant information', () => {
      const { container } = renderRestaurantDetail({ detail: restaurantDetail });

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('주소: 서울 강남구');
      expect(container).toHaveTextContent('메뉴');
      expect(container).toHaveTextContent('탕수육');
    });
  });

  context('without restaurantDetail', () => {
    it('renders no item message', () => {
      const { container } = renderRestaurantDetail({ detail: {} });

      expect(container).toHaveTextContent('레스토랑 정보가 없어요!');
    });
  });
});
