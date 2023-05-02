import styled from 'styled-components';
import ListFrame from '../common/ListFrame';
import ItemInBasket from '../in/ItemInBasket';
const MyColaList = styled(ListFrame)`
  border-radius: 5px;
  height: 356px;
  width: 100%;
`;

const MyColaListWrap = ({
  itemInInventory,
  setItemInInventory,
  dragAndDropToggle,
}) => {
  return (
    <MyColaList>
      {itemInInventory.itemInList.map((i) => (
        <ItemInBasket
          key={i.id}
          name={i.name}
          img={i.img}
          count={itemInInventory.itemInInventoryCount[i.name]}
          itemInInventory={itemInInventory.itemInList}
          setItemInInventory={setItemInInventory}
          dragAndDropToggle={dragAndDropToggle}
        ></ItemInBasket>
      ))}
    </MyColaList>
  );
};

export default MyColaListWrap;
