import styled from 'styled-components';
import React from 'react';

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 6px;
  &:first-child {
    margin-top: 0;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const ItemImg = styled.img`
  width: 18px;
  height: 33px;
`;
const ItemName = styled.strong`
  margin-left: 10px;
  line-height: 33px;
  font-size: 9px;
  font-weight: 500;
`;
const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  font-size: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: none;
`;

const ItemCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  font-size: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: none;
`;

const ItemInBasket = ({
  img,
  name,
  isBasket,
  cancelButtonHandle,
  count,
  setItemInInventory,
  itemInInventory,
  dragAndDropToggle,
}) => {
  //  커스텀정렬에 사용된 함수 (들어갈 자리 찾기)
  function getDragAfterElement(container, y) {
    const draggableElements = [...container].filter(
      (item) => item.draggable === false
    );
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  return (
    <Li
      name={name}
      onMouseOver={(e) => {
        e.currentTarget.draggable = dragAndDropToggle ? true : false;
      }}
      onMouseOut={(e) => {
        e.currentTarget.draggable = false;
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const afterElement = getDragAfterElement(
          document.querySelectorAll('li[draggable]'),
          e.clientY
        );
        const draggable = document
          .querySelector('li[draggable=true]')
          .getAttribute('name');
        let copyInventory = [...itemInInventory];
        if (afterElement === undefined) {
          for (const key in itemInInventory) {
            if (itemInInventory[key].name === draggable) {
              copyInventory.push(itemInInventory[key]);
              copyInventory.splice(key, 1);
            }
          }
        } else {
          let target = null;
          let getPlace = null;
          for (const key in itemInInventory) {
            if (itemInInventory[key].name === draggable) {
              target = key;
            }
            if (
              itemInInventory[key].name === afterElement.getAttribute('name')
            ) {
              getPlace = key;
            }
          }

          if (Number(getPlace) < Number(target)) {
            // 타겟의 들어 갈 자리가 현재의 자리보다 앞에 있을 때
            copyInventory.splice(getPlace, 0, itemInInventory[target]);
            copyInventory.splice(Number(target) + 1, 1);
          } else {
            // 타겟의 들어 갈 자리가 현재의 자리보다 뒤에 있을 때
            copyInventory.splice(getPlace, 0, itemInInventory[target]);
            copyInventory.splice(Number(target), 1);
          }
        }
        setItemInInventory((prev) => ({ ...prev, itemInList: copyInventory }));
      }}
    >
      <Div>
        <ItemImg src={img} />
        <ItemName>{name}</ItemName>
      </Div>
      <Div>
        {isBasket ? (
          <CancelButton onClick={cancelButtonHandle}>취소</CancelButton>
        ) : (
          <></>
        )}
        <ItemCount>{count}</ItemCount>
      </Div>
    </Li>
  );
};

export default ItemInBasket;
