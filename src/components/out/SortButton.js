import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import EffectButton from 'components/common/EffectButton';

const DropdownTag = styled.span`
  display: inline-block;
`;

const DropdownContentWrapTag = styled.ul`
  font-size: 13px;
  opacity: 0;
  visibility: collapse;
  position: absolute;
  background-color: #ffffff;
  margin-top: 0;
  padding: 0;
  border: 1px solid rgba(155, 155, 155, 0.15);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  z-index: 99999999999;
  transition: all 0.3s;
  ${({ DropdownToggle }) =>
    DropdownToggle &&
    css`
      display: flex;
      flex-direction: column;
      visibility: visible;
      opacity: 1;
    `}
`;

const DropdownContentButtonTag = styled.button`
  padding: 0 15px;
  height: 36px;
  width: 100px;
  box-shadow: none;
  border-bottom: 1px solid rgba(155, 155, 155, 0.15);
  ${({ dragAndDropToggle }) =>
    dragAndDropToggle &&
    css`
      border: 3px solid #6327fe;
    `}
`;

const SortButton = ({
  setItemInInventory,
  setDragAndDropToggle,
  dragAndDropToggle,
}) => {
  const [DropdownToggle, setDropdown] = useState(false);

  return (
    <DropdownTag
      onMouseOver={() => setDropdown(true)}
      onMouseOut={() => setDropdown(false)}
    >
      <EffectButton plus="sortButton">정 렬</EffectButton>

      <DropdownContentWrapTag DropdownToggle={DropdownToggle}>
        <li>
          <DropdownContentButtonTag
            onClick={() => {
              setItemInInventory((prev) => ({
                ...prev,
                itemInList: prev.itemInList.sort((a, b) =>
                  a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
                ),
              }));
            }}
          >
            글자순 정렬
          </DropdownContentButtonTag>
        </li>
        <li>
          <DropdownContentButtonTag
            onClick={() => {
              setItemInInventory((prev) => ({
                ...prev,
                itemInList: prev.itemInList.sort(
                  (a, b) =>
                    prev.itemInInventoryCount[b.name] -
                    prev.itemInInventoryCount[a.name]
                ),
              }));
            }}
          >
            수량순 정렬
          </DropdownContentButtonTag>
        </li>
        <li>
          <DropdownContentButtonTag
            onClick={() => {
              setDragAndDropToggle((prev) => !prev);
            }}
            dragAndDropToggle={dragAndDropToggle}
          >
            커스텀정렬
          </DropdownContentButtonTag>
        </li>
      </DropdownContentWrapTag>
    </DropdownTag>
  );
};

export default SortButton;
