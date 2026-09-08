import { View, Text } from 'react-native';
import { styles } from './style';

export default function SectionAbout() {
    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Sobre Nós</Text>
            <Text style={styles.description}>
                Este é um componente de seção criado dinamicamente usando JavaScript e estilizado de forma modular no Expo.
            </Text>
        </View>
    );
}
