import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ContainerProducts = styled.View`
    flex: 1;
    padding: 10px 16px 0 16px;
    background-color: #FFFFFF;
`;


export const Header = styled.View`
    margin-bottom: 15px;
`;


export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
`;


export const InputSearch = styled.TextInput`
    flex: 1;
    height: 43px;

    border: 1px solid #2D3133;
    border-radius: 6px;

    padding: 0 10px;

    background-color: #FFFFFF;
`;


export const FilterButton = styled(TouchableOpacity)`
    width: 35px;
    height: 43px;

    justify-content: center;
    align-items: center;
`;


export const ProductsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    gap: 10px;

    padding-bottom: 30px;
`;


export const ProductCard = styled.View`
    width: 48%;

    border: 1px solid #D4D4D4;
    border-radius: 6px;

    overflow: hidden;

    background-color: #FFFFFF;
`;


export const ProductImage = styled.Image`
    width: 100%;
    height: 110px;

    resize-mode: contain;

    background-color: #FFFFFF;
`;


export const ProductInfo = styled.View`
    padding: 7px;
`;


export const ProductName = styled.Text`
    font-size: 12px;
    font-weight: 700;

    color: #000000;

    line-height: 17px;
`;


export const ProductBottom = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
`;


export const ProductPrice = styled.Text`
    font-size: 14px;

    font-weight: 700;

    color: #375EE7;
`;


export const AddButton = styled(TouchableOpacity)`
    width: 25px;
    height: 25px;

    border-radius: 20px;

    background-color: #485BE5;

    justify-content: center;
    align-items: center;
`;


export const AddText = styled.Text`
    color: #FFFFFF;

    font-size: 22px;
    font-weight: 400;

    line-height: 24px;
`;