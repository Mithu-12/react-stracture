import styled from 'styled-components';
import TextInput from '../../UI/inputs/TextInput';
import Label from '../../UI/text/Text copy';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  error,
  onFocus,
  onBlur,
  onChange,
}) => {
  <Container>
    <Label>{label}</Label>
    <TextInput
      name={name}
      value={value}
      placeholder={placeholder ?? ''}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      onChange={onChange}
    ></TextInput>
  </Container>;
};

export default InputGroup;
