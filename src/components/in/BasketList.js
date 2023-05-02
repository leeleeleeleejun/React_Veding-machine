import ListFrame from '../common/ListFrame';
import ItemInBasket from './ItemInBasket';

const BasketList = ({
  basketListItem,
  basketListCount,
  cancelButtonHandle,
}) => {
  return (
    <ListFrame>
      {basketListItem.map((i) => (
        <ItemInBasket
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
