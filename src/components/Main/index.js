import { View, Text } from 'react-native';
import { styles } from './style';

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo à Página Principal</Text>
        </View>
    );
}