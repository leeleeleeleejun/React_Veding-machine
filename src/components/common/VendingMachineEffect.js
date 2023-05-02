import styled, { css } from 'styled-components';

const VendingMachineEffect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  ${({ myCola }) =>
    myCola &&
    css`
      margin: 25px 0 10px;
    `}
`;

export default VendingMachineEffect;
