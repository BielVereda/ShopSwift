import styled from "styled-components/native";

export const BoxProducts = styled.View`
    border: 1px solid #D4D4D4;
    border-radius: 7px;
    width: 175px;
`

export const ProductImage = styled.Image`
    width: 174px;
    height: 111px;
    border-radius: 7px 7px 0 0; 
`

export const ProductsDescription = styled.View`
    padding: 10px;
    gap: 10px;
`

export const ProductTitle = styled.Text`
    font-size: 18px;
    font-weight: 700;
`

export const ContainerPrice = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const ProductPrice = styled.Text`
    color: #375EE7;
    font-weight: 700;
    font-size: 20px;
`