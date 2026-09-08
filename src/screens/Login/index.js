import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { styles } from './style';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoGlowContainer}>
                        <Svg height="100" width="100" viewBox="0 0 100 100">
                            <Defs>
                                <RadialGradient
                                    id="glow"
                                    cx="50%"
                                    cy="50%"
                                    rx="50%"
                                    ry="50%"
                                    fx="50%"
                                    fy="50%"
                                >
                                    <Stop offset="0%" stopColor="#536DFE" stopOpacity="0.5" />
                                    <Stop offset="50%" stopColor="#536DFE" stopOpacity="0.3" />
                                    <Stop offset="100%" stopColor="#536DFE" stopOpacity="0" />
                                </RadialGradient>
                            </Defs>
                            <Rect x="0" y="0" width="100" height="100" fill="url(#glow)" />
                        </Svg>
                    </View>

                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Faça login e se{'\n'}
                        <Text style={styles.titleHighlight}>surpreenda!</Text>
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#94A3B8"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#94A3B8"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Não tem conta?</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.footerLink}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
