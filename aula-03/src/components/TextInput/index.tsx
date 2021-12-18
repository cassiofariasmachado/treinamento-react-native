import { InputHTMLAttributes } from 'react';
import { Container, InputField } from './styles';

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ ...rest }: TextInputProps) => {
  return (
    <Container>
      <InputField 
        {...rest}
      />
    </Container>
  );
};
