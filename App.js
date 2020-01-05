import React, { useState } from 'react'
import styled from 'styled-components/native'

import ListItem from './src/ListItem'

const Container = styled.SafeAreaView`
  flex:1;
`
const ContainerList = styled.FlatList`

`

const App = () => {
  const [List, setList] = useState([
    {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Jhon Do', msg:'Hello! This is a basic List.'},
    {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Fulano de Tal', msg:'Who Exemplifies the creation of a component'},
    {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Woman', msg:'And using useState to make it dynamic'},
    {key:'4', img:'https://www.b7web.com.br/avatar2.png', nome:'Fulano de Tal', msg:'Well, in the moment we are static'},
    {key:'5', img:'https://www.b7web.com.br/avatar3.png', nome:'Woman', msg:'But, with states, in the future, we talk through the internet'},
    {key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Jhon Do', msg:'And that is wall guys! ;)'},
  ])

  return(
    <Container>
      <ContainerList 
        data={ List }
        renderItem={({item})=><ListItem data={ item } />}
      />
    </Container>
  )
}
export default App
