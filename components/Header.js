import React from "react";
import { Text } from "react-native";
import { HeaderView, HeaderButton, HeaderTitle, colors } from "../styles/appStyles";
import { Entypo } from "@expo/vector-icons"; //For importing icons 

const Header = ({handleClearAllTodos}) => {
    return(
        <HeaderView>
            <HeaderTitle>Tasks</HeaderTitle>
            <HeaderButton onPress={handleClearAllTodos}>
                <Entypo name = "trash" size={25} color={colors.tertiary}/>

            </HeaderButton>
        </HeaderView>
    );
}
export default Header;