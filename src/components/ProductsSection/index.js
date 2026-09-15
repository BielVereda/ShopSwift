import { Text, View } from "react-native"
import { BoxProducts, ContainerProducts, TextHighlight, TextTitle } from "./style"
import { CardProducs } from "./CardProducts"
import imageProduct from '../../../assets/shrek.jpg'

export const ProductsSection = () => {
    return (
        <BoxProducts>

            <TextTitle>Nossos <TextHighlight>Produtos</TextHighlight></TextTitle>

            <ContainerProducts>
                <CardProducs
                    image={imageProduct}
                    name="Shrek Nazista"
                    price="666,66" />
                <CardProducs
                    image={imageProduct}
                    name="Shrek Nazista"
                    price="666,66" />
                <CardProducs
                    image={imageProduct}
                    name="Shrek Nazista"
                    price="666,66" />
                <CardProducs
                    image={imageProduct}
                    name="Shrek Nazista"
                    price="666,66" />
            </ContainerProducts>

        </BoxProducts>
    )
}