import React from "react";

import { Image, PlaceHolder, PlaceHolderTitle } from './styles';

type Props = {
    uri: string |   null;
}

export function Photo({ uri }: Props ) {
    if (uri) {
        return <Image source={{ uri }} />;
    }

    return (
        <PlaceHolder>
            <PlaceHolderTitle>Nenhuma foto carregada</PlaceHolderTitle>
        </PlaceHolder>
    )

}