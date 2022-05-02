export default function RestaurantDetail({ restaurantDetail }) {
  if (!(restaurantDetail && Object.keys(restaurantDetail).length)) {
    return (
      <p>레스토랑 정보가 없어요!</p>
    );
  }

  const { name, address, menuItems } = restaurantDetail;

  return (
    <>
      <h2>
        {name}
      </h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>
        메뉴
      </h3>
      <ul>
        {menuItems?.map(({ id, name: menuName }) => (
          <li key={id}>
            {menuName}
          </li>
        ))}
      </ul>
    </>
  );
}
