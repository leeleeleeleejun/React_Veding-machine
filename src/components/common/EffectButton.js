import styled, { css } from 'styled-components';

const EffectButtonTag = styled.button`
  width: 30%;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 5px;
  &:active {
    box-shadow: none;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${(props) => {
    switch (props.plus) {
      case 'deposit':
        return css`
          width: 45%;
          padding: 6px 4px;
        `;
      case 'getButton':
        return css`
          color: #ffffff;
          background: #6327fe;
        `;
      case 'sortButton':
        return css`
          width: 50px;
          height: 32px;
        `;
      default:
        return null;
    }
  }}
`;

export default EffectButtonTag;
