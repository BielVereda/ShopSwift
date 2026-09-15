import { Image, ScrollView, TouchableOpacity } from "react-native";

import logo from "../../../assets/logo.png";
import filter from "../../../assets/filter.png";

import Shrek from "../../../assets/shrek.jpg";
import fotoDoPau from "../../../assets/fotoDoPau.png";
import mcqueenChupaDedo from "../../../assets/mcqueenChupaDedo.png";
import pcGamer from "../../../assets/pcGamer.png";
import pedroOfWar from "../../../assets/pedroOfWar.png";
import reiJulianCadeirante from "../../../assets/reiJulianCadeirante.png";
import cincaoParaAlimento from "../../../assets/cincaoParaAlimento.png";

import {
    ContainerProducts,
    Header,
    SearchContainer,
    InputSearch,
    FilterButton,
    ProductsContainer,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductBottom,
    ProductPrice,
    AddButton,
    AddText
} from "./style";


const products = [
    {
        image: pedroOfWar,
        name: "Pedro of War",
        price: "666,66"
    },
    {
        image: cincaoParaAlimento,
        name: "Cincão para comprar alimento",
        price: "5,00"
    },
    {
        image: mcqueenChupaDedo,
        name: "McQueen chupa dedo",
        price: "99,00"
    },
    {
        image: pcGamer,
        name: "PC Gamer",
        price: "78,00"
    },
    {
        image: reiJulianCadeirante,
        name: "Rei Julian Cadeirante",
        price: "99,00"
    },
    {
        image: fotoDoPau,
        name: "Foto do pau",
        price: "69,00"
    },
    {
        image: Shrek,
        name: "Shrek",
        price: "666,66"
    }
];


export const Producs = () => {

    return (
        <ContainerProducts>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* LOGO */}
                <Header>
                    <Image source={logo} />
                </Header>


                {/* TÍTULO */}
                <ProductInfo>
                    <ProductName>
                        Faça a festa em nossa loja
                    </ProductName>

                    <ProductName highlight>
                        com produtos incríveis!
                    </ProductName>
                </ProductInfo>


                {/* PESQUISA + FILTRO */}
                <SearchContainer>

                    <InputSearch
                        placeholder=""
                    />

                    <FilterButton>
                        <Image source={filter} />
                    </FilterButton>

                </SearchContainer>


                {/* PRODUTOS */}
                <ProductsContainer>

                    {products.map((product, index) => (

                        <ProductCard key={index}>

                            <ProductImage
                                source={product.image}
                            />

                            <ProductInfo>

                                <ProductName>
                                    {product.name}
                                </ProductName>

                                <ProductBottom>

                                    <ProductPrice>
                                        R${product.price}
                                    </ProductPrice>

                                    <AddButton>

                                        <AddText>
                                            +
                                        </AddText>

                                    </AddButton>

                                </ProductBottom>

                            </ProductInfo>

                        </ProductCard>

                    ))}

                </ProductsContainer>

            </ScrollView>

        </ContainerProducts>
    );
};