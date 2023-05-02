import styled from 'styled-components';

const MyMoneyTag = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  background-color: #eae8fe;
  margin-top: -22px;
  padding: 6px 10px;
  border-radius: 5px;
  font-weight: 500;
  margin-top: ${({ coin }) => !coin || '10px'};
`;

const MyMoney = ({ coin, text1, text2, number }) => {
  return (
    <MyMoneyTag coin={coin}>
      {text1}
      <span>
        <span>{number}</span>
        {text2}
      </span>
    </MyMoneyTag>
  );
};

export default MyMoney;
