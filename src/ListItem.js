import React, { useState } from 'react'
import styled from 'styled-components/native'

const ButtonHigh = styled.TouchableHighlight`

`
const View = styled.View`
    height:60px;
    margin-left:10px;
    margin-right:10px;
    border-bottom-width:1;
    border-color:#CCC;
    flex:1;
    flex-direction:row;
`
const Image = styled.Image`
    width:40px;
    height:40px;
    margin-top:10PX;
    border-radius:20px;
`

const Info = styled.View`
    flex:1;
    flex-direction:column;
    justify-content:center;
    margin-left:15px;
`
const Nome = styled.Text`
    font-size:16px;
    font-weight:bold;
`
const Msg = styled.Text``
const ListItem = (props) => {
    //Para que o diálogo seja dinâmico
    const [msg, setMsg] = useState(props.data.msg)

    const click = () =>{
        alert(`Talk: ${props.data.msg}`)
    }
    return(
        <ButtonHigh onPress={click} underlayColor='#CCC'>
            <View>
                <Image source={{uri:props.data.img}}/>
                <Info>
                    <Nome>{props.data.nome}</Nome>
                    <Msg numberOfLines={1}>{ msg }</Msg>
                </Info>
            </View>
        </ButtonHigh>
    )
}

export default ListItem