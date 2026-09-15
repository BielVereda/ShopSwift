import { Button, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from './components/Card/index';
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { Home } from './screens/Home';
import { Products } from './screens/Products';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Login/>      */}
      {/* <Cadastro/> */}
      {/* <Home/> */}
      <Products/>
      
    </SafeAreaView>
  );
}