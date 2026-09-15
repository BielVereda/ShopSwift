import styled from 'styled-components/native'

export const ContainerCategory = styled.View`
    gap: 10px;
`

export const TextTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;        
`

export const TextHighlight = styled.Text`
    color: #375EE7;
`

export const Scroll  = styled.ScrollView.attrs({
    contentContainerStyle:{
        gap: 20
    }
})``