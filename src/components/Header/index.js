import { View, Text } from 'react-native';
import { styles } from './style';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu App Expo</Text>
        </View>
    );
}