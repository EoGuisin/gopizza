import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from 'react-native';


import { Container } from "./styles";

export function ButtonBack({..._rest}: TouchableOpacityProps ) {
    const { COLORS } = useTheme();
    return (
        <Container>
            <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
        </Container>
    )
}