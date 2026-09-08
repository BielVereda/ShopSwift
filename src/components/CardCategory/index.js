import { Image } from "react-native"
import { TextCategory} from "./style"

export const CardCategory = ({image, name}) =>  {
    return(
        <BoxCategory>

            <Image source={image}/>

            <TextCategory>{name}</TextCategory>

        </BoxCategory>
    )
}