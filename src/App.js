import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/Login'; // Puxe do caminho onde salvou a screen

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <LoginScreen />
    </SafeAreaProvider>
  );
}
