import { useParams } from 'react-router-dom';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const { restaurantId } = useParams();

  return (
    <RestaurantDetailContainer restaurantId={restaurantId} />
  );
}
