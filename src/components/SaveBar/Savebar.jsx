import { useState, useEffect } from "react";
import {
    CustomCard,
    CustomCardContent,
    CustomButton
} from "../../styles/globalStyles";


import {StyledButtonGrid, SaveBarContainer} from "./styles";

const SaveBar = () => {

    return (
        <SaveBarContainer>
            <CustomCard>
                <CustomCardContent
                gcolumns="1fr"
                id="profile-preferences"
                >
                <StyledButtonGrid>
                    <CustomButton>Atras</CustomButton>
                    <CustomButton>Guardar</CustomButton>
                </StyledButtonGrid>
                </CustomCardContent>
            </CustomCard>
        </SaveBarContainer>

    );
};

export default SaveBar;
