import { Image, ScrollView } from "react-native"
import { Container, HighlightsSection, Scroll, TextHighlight, TitleHighlight } from "./style"
import logo from '../../../assets/logo.png'
import destaque1 from '../../../assets/destaque1.png'
import destaque2 from '../../../assets/destaque2.png'
import destaque3 from '../../../assets/destaque3.png'
import { CategorySection } from "../../components/CategorySection"
import { ProductsSection } from "../../components/ProductsSection"

export const Home = () => {
    return(
        <ScrollView>
            
            <Container>

                <Image source={logo} />

                <HighlightsSection>

                    <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>
                    
                    <Scroll horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={destaque1}/>
                        <Image source={destaque2}/>
                        <Image source={destaque3}/>
                    </Scroll>

                </HighlightsSection>

                <CategorySection/>

                <ProductsSection/>

            </Container>
        </ScrollView>
    )
}