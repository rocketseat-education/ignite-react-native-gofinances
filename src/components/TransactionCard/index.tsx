import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export function TransactionCard(){
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>12/04/2020</Date>
      </Footer>

    </Container>
  )
}