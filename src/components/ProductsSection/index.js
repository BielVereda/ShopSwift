import { Text, View } from "react-native"
import { BoxProducts, ContainerProducts, TextHighlight, TextTitle } from "./style"
import { CardProducs } from "./CardProducts"
import Shrek from '../../../assets/shrek.jpg'
import fotoDoPau from '../../../assets/fotoDoPau.png'
import mcqueenChupaDedo from '../../../assets/mcqueenChupaDedo.png'
import pcGamer from '../../../assets/pcGamer.png'
import pedroOfWar from '../../../assets/pedroOfWar.png'
import reiJulianCadeirante from '../../../assets/reiJulianCadeirante.png'
import cincaoParaAlimento from '../../../assets/cincaoParaAlimento.png'



export const ProductsSection = () => {
    return (
        <BoxProducts>

            <TextTitle>Nossos <TextHighlight>Produtos</TextHighlight></TextTitle>

            <ContainerProducts>
                <CardProducs
                    image={Shrek}
                    name="Shrek Nazista"
                    price="666,66" />
                <CardProducs
                    image={fotoDoPau}
                    name="Foto do Pau"
                    price="69,00" />
                <CardProducs
                    image={mcqueenChupaDedo}
                    name="McQueen Chupa Dedão"
                    price=" Catchau!" />
                <CardProducs
                    image={pcGamer}
                    name="PC Gamer (i9 + 2SSD 3TB DDL5)"
                    price="1000000" />
                <CardProducs
                    image={pedroOfWar}
                    name="Pedro Of War"
                    price="666,66" />
                <CardProducs
                    image={reiJulianCadeirante}
                    name="Rei Julian Cadeirante"
                    price="67,67" />
                <CardProducs
                    image={cincaoParaAlimento}
                    name="Cincão para comprar alimento"
                    price="5,00" />
            </ContainerProducts>

        </BoxProducts>
    )
}