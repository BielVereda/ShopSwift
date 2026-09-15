import { Image, ScrollView, Text, TextInput, View } from "react-native"
import { BoxProducts, ContainerPrice, ProductImage, ProductPrice, ProductsDescription, ProductTitle } from "./style"
import filter from '../../../assets/filter.png'

export const Producs = ({image, name, price}) => {
    return(
        <BoxProducts>
            <ScrollView>
                <View>
                    <TextInput>
                        
                    </TextInput>
                </View>
            </ScrollView>

        </BoxProducts>
    )
}