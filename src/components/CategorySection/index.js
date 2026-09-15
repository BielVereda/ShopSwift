import { ScrollView, Text, View } from "react-native"
import { ContainerCategory, Scroll, TextHighlight, TextTitle } from "./style"
import { CardCategory } from "./CardCategory"
import iconTenis from '../../../assets/tenisIcon.png'
import iconEletronicos from '../../../assets/eletricosIcon.png'
import iconCamisetas from '../../../assets/camisetasIcon.png'
import iconJogos from '../../../assets/jogosIcon.png'

export const CategorySection = () => {
    return(
        <ContainerCategory>
            <TextTitle>Nossas <TextHighlight>Categorias</TextHighlight></TextTitle>
            
            <Scroll horizontal showsHorizontalScrollIndicator={false}>
                <CardCategory image={iconTenis} name="Tênis"/>
                <CardCategory image={iconEletronicos} name="Eletrônicos"/>
                <CardCategory image={iconCamisetas} name="Camisetas"/>
                <CardCategory image={iconJogos} name="Jogos"/>
            </Scroll>

        </ContainerCategory>
    )
}