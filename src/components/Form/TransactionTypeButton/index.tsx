import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Icon, 
  Title,
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
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
      {...rest}
    >
      <Icon
        name={icons[type]}
        type={type}
      />
      <Title>
        {title}
      </Title>

    </Container>
  );
}