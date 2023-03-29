import {
    CustomCard,
    CustomCardContent,
    CustomButton
} from "../../styles/globalStyles";


import {StyledButtonGrid, SaveBarContainer, CustomSpinner} from "./styles";

const SaveBar = ({btnNames, isSubmitting}) => {

    return (
        <SaveBarContainer>
            <CustomCard>
                <CustomCardContent
                gcolumns="1fr"
                id="profile-preferences"
                >
                <StyledButtonGrid>
                    {btnNames? btnNames.map((item, index)=>{
                        return <CustomButton 
                            key={item.name +'_'+index} 
                            type={item.type}
                            endIcon={!isSubmitting ? item.icon : <CustomSpinner/>}
                            disabled={isSubmitting}
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
