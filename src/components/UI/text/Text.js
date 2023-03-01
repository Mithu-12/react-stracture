import styled from 'styled-components';

const fontSizes = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.5rem',
};

const lineHeight = {
  sm: 1.2,
  md: 1.5,
  lg: 2.8,
};

const Text = styled.p`
  font-family: monospace;
  font-size: ${(props) => fontSizes[props.size] ?? '1rem'};
  line-height: ${(props) => lineHeight[props.line] ?? 1.3};
  color: #222;
`;

export default Text;
