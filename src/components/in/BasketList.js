import ListFrame from 'components/common/ListFrame';
import ItemInBasket from 'components/in/ItemInBasket';

const BasketList = ({
  basketListItem,
  basketListCount,
  cancelButtonHandle,
  isBasket,
}) => {
  return (
    <ListFrame>
      {basketListItem.map((i) => (
        <ItemInBasket
          isBasket={isBasket}
          key={i.id}
          name={i.name}
          img={i.img}
          count={basketListCount[i.name]}
          cancelButtonHandle={() => {
            cancelButtonHandle(i);
          }}
        ></ItemInBasket>
      ))}
    </ListFrame>
  );
};

export default BasketList;
