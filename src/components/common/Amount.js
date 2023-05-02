import styled from 'styled-components';

const Strong = styled.strong`
  display: block;
  text-align: ${(props) => (props.align ? 'right' : 'left')};
  font-size: 12px;
  margin-top: 6px;
`;

const Amount = ({ align, text1, number, text2 }) => {
  return (
    <Strong align={align}>
      {text1}
      <span>{number}</span>
      {text2}
    </Strong>
  );
};

export default Amount;
