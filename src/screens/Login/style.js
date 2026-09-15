import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerHome:{
        gap: 110,
        paddingHorizontal: 20
    },
    contentHome:{
        gap: 40
    },
    containerForm:{
        gap: 40
    },
    containerInputs:{
        gap: 25
    },
    input:{
        borderWidth: 1,
        borderColor: "#2D3133",
        borderRadius: 7
    },
    buttonLogin:{
        backgroundColor: "#375EE7",
        borderRadius: 7,
        paddingVertical: 15
    },
    txtLogin:{
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center"
    },
    txtNaoTemConta:{
        textAlign: "center",        
    },
    txtCriarConta:{
        color: "#375EE7",
        textDecorationLine: "underline"
    },
    txtTitulo:{
        color: "#2D3133",
        fontSize: 40,
        fontWeight: 700
    },
    txtHighlights:{
        color: "#375EE7"
    }
})