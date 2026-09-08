import { View, Text } from 'react-native';
import { styles } from './style';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2026 Meu Projeto Expo. Todos os direitos reservados.</Text>
        </View>
    );
}