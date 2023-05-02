import styled from 'styled-components';
import React from 'react';

const Unorderedlist = styled.ul`
  position: relative;
  height: 272px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: space-between;
  background-color: #eae8fe;
  padding: 3px;
`;

const ItemWrap = styled.li`
  width: 30%;
  height: 130px;
  border-radius: 10px;
  cursor: move;
  &:nth-child(n + 4) {
    margin-top: 12px;
  }
`;

const ItemButton = styled.button`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  &:active {
    border: 3px solid #6327fe !important;
  }
`;

const Img = styled.img`
  width: 36px;
  height: 65px;
  margin: 0 auto;
`;

const ItemName = styled.strong`
  font-size: 9px;
  display: block;
  margin: 5px auto;
`;

const Price = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 5px 15px;
  background-color: #6327fe;
  border-radius: 50px;
  color: #ffffff;
`;

function MenuList({ item, addBasketHandle }) {
  const itemAry = item;

  return (
    <>
      <Unorderedlist>
        {itemAry.map((item) => (
          <ItemWrap key={item.id}>
            <ItemButton
              onClick={() => {
                addBasketHandle(item);
              }}
            >
              <Img src={item.img}></Img>
              <ItemName>{item.name}</ItemName>
              <Price>{item.price}원</Price>
            </ItemButton>
          </ItemWrap>
        ))}
      </Unorderedlist>
    </>
  );
}

export default MenuList;
