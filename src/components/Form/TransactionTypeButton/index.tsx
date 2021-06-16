import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon, 
  Title,
  Button
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props){
  return(
    <Container
      isActive={isActive}
      type={type}
      
    >
      <Button
        {...rest}
      >
        <Icon
          name={icons[type]}
          type={type}
        />
        <Title>
          {title}
        </Title>
      </Button>

    </Container>
  );
}