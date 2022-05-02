import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import { get } from './utils';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetailContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId }));
  }, [restaurantId]);

  const restaurantDetail = useSelector(get('restaurantDetail'));

  return (
    <RestaurantDetail restaurantDetail={restaurantDetail} />
  );
}
