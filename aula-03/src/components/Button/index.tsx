import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick, ...rest }: ButtonProps) => {
  return (
    <Container
      onClick={onClick}
      {...rest} 
    >
      <span>{title}</span>
    </Container>
  );
};
