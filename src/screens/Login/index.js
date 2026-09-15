import { Image, Text, View, TextInput, Pressable } from 'react-native'
import { styles } from './style'
import logo from '../../../assets/logo.png'

export const Login = () => {
    return (

        <View style={styles.containerHome}>

            <Image source={logo} />

            <View style={styles.contentHome}>
                <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>

                <View style={styles.containerForm}>
                    
                    <View style={styles.containerInputs}>
                        <View>
                            <Text>E-mail:</Text>
                            <TextInput keyboardType='email-address' style={styles.input}/>
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <TextInput secureTextEntry={true} style={styles.input}/>
                        </View>
                    </View>

                    <Pressable style={styles.buttonLogin}>
                        <Text style={styles.txtLogin}>Entrar</Text>
                    </Pressable>
                </View>

                <Text style={styles.txtNaoTemConta}>Não tem uma conta? <Text style={styles.txtCriarConta}>Criar conta</Text></Text>
            </View>

        </View>

    )
}