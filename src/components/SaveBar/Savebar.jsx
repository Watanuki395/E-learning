import {
    CustomCard,
    CustomCardContent,
    CustomButton
} from "../../styles/globalStyles";


import {StyledButtonGrid, SaveBarContainer} from "./styles";

const SaveBar = ({btnNames}) => {

    return (
        <SaveBarContainer>
            <CustomCard>
                <CustomCardContent
                gcolumns="1fr"
                id="profile-preferences"
                >
                <StyledButtonGrid>
                    {btnNames? btnNames.map((item, index)=>{
                        return <CustomButton key={item.name +'_'+index} 
                        type={item.type}
                        endIcon={item.icon}
                        > 
                        {item.name}
                        </CustomButton>
                    }):''}
                </StyledButtonGrid>
                </CustomCardContent>
            </CustomCard>
        </SaveBarContainer>

    );
};

export default SaveBar;
