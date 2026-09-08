import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 28,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingBottom: 40,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 100,
        position: 'relative',
    },
    logo: {
        width: 180,
        height: 54, 
        resizeMode: 'contain',
    },
    logoGlowContainer: {
        position: 'absolute',
        // Valores ajustados para centralizar o novo brilho menor de 100px
        top: -23,  
        left: -15, 
        width: 100,
        height: 100,
        zIndex: -1,
        pointerEvents: 'none',
    },
    titleContainer: {
        marginBottom: 32,
    },
    titleText: {
        fontSize: 38,
        fontWeight: '800',
        color: '#000000',
        lineHeight: 46,
        letterSpacing: -0.5,
    },
    titleHighlight: {
        color: '#536DFE',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        color: '#475569',
        marginBottom: 10,
        fontWeight: '500',
    },
    input: {
        width: '100%',
        height: 58,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        paddingHorizontal: 18,
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
    },
    button: {
        width: '100%',
        height: 58,
        backgroundColor: '#536DFE',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 32,
        shadowColor: '#536DFE',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#64748B',
    },
    footerLink: {
        fontSize: 14,
        color: '#536DFE',
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
});
