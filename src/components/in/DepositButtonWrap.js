import styled from 'styled-components';
import EffectButton from '../common/EffectButton';

const DepositButtonWrapTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

const DepositButtonWrap = ({ onMoneyDeposit, onCoinDeposit }) => {
  return (
    <DepositButtonWrapTag>
      <EffectButton plus="deposit" onClick={onMoneyDeposit}>
        금액입금
      </EffectButton>
      <EffectButton plus="deposit" onClick={onCoinDeposit}>
        코인입금
      </EffectButton>
    </DepositButtonWrapTag>
  );
};

export default DepositButtonWrap;
