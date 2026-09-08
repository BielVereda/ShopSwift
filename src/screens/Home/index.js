import { Container } from "react-native"
import { Image } from "react-native"
import { ScrollView } from "react-native-web"

import logo from "../../assets/images/logo.png"
import destaque1 from "../../assets/images/destaque1.png"
import destaque2 from "../../assets/images/destaque2.png"
import destaque3 from "../../assets/images/destaque3.png"

import camisetasIcon from "../../assets/icons/camisetasIcon.png"
import eletricosIcon from "../../assets/icons/eletricosIcon.png"
import jogosIcon from "../../assets/icons/jogosIcon.png"
import tenisIcon from "../../assets/icons/tenisIcon.png"

import { HighlightsSection, TitleHighlight, TextHighlight } from "./style"

export const Home = () => {
    return(
    <Container>

        <Image source={logo} />

        <HighlightsSection>
            <TitleHighlight>Nosso <TextHighlight>Destaques</TextHighlight></TitleHighlight>

            <ScrollView horizontal showHorizontalScrollIndicator={false}>
                <Image source={destaque1} />
                <Image source={destaque2} />
                <Image source={destaque3} />
            </ScrollView>
        </HighlightsSection>

    </Container>
    )
}