import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { DeleteLabel } from "./styles"

import { Container, Header, Title } from "./styles";

export function Product() {
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <Header>
                <Title>Cadastrar</Title>
                <TouchableOpacity>
                    <DeleteLabel>Deletar</DeleteLabel>
                </TouchableOpacity>
            </Header>

        </Container>
    )
}