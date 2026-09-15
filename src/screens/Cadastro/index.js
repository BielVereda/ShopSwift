import { Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import {
    Container,
    ContentCadastro,
    CreateAccountButton,
    FormContainer,
    Input,
    InputsContainer,
    TextButton,
    TextHighlight,
    TextLabel,
    TextLogin,
    TextNavigation,
    TextTitle,
} from "./style";

export const Cadastro = () => {
    return (
        <Container>
            <Image source={logo} />

            <ContentCadastro>
                <TextTitle>
                    Crie uma conta <TextHighlight>e se surpreenda</TextHighlight>
                </TextTitle>

                <FormContainer>
                    <InputsContainer>
                        <View>
                            <TextLabel>E-mail:</TextLabel>
                            <Input />
                        </View>

                        <View>
                            <TextLabel>Senha:</TextLabel>
                            <Input />
                        </View>

                    </InputsContainer>

                    <CreateAccountButton>
                        <TextButton>Criar conta</TextButton>
                    </CreateAccountButton>

                </FormContainer>

                <TextLogin>Já tem conta? <TextNavigation>Fazer login</TextNavigation></TextLogin>

            </ContentCadastro>
        </Container>
    );
};