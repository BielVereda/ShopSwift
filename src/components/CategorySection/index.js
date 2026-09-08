import type { Container } from "../../screens/Home/style"
import { CardCategory } from "../CardCategory"
import { TextCategory, ContainerCategory, TextHighlight, TextTitle } from "./style"

export const CategorySection = () => {
    return(
        <ContainerCategory>
            <TextTitle>Nossas<TextHighlight>Categorias</TextHighlight></TextTitle>

            <View>
                <CardCategory image={} name="Tênis"/>
                <CardCategory image={} name="Eletrônicos"/>
                <CardCategory image={} name="Camisetas"/>
                <CardCategory image={} name="Jogos"/>
                <CardCategory image={} name="Eletrodomésticos"/>
            </View>

        </ContainerCategory>
    )
}