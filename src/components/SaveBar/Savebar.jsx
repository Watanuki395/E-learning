import {
    CustomCard,
    CustomCardContent,
    CustomButton
} from "../../styles/globalStyles";


import {StyledButtonGrid, SaveBarContainer, CustomSpinner} from "./styles";

const SaveBar = ({btnNames, isSubmitting, setYtLink}) => {

    const handleClick = (e) => {

        setYtLink(false);
        console.log('Video was removed');
    };

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
                            name={item.name} 
                            type={item.type}
                            endIcon={isSubmitting && item.name == 'Actualizar' ? <CustomSpinner/> : item.icon}
                            disabled={isSubmitting}
                            onClick={(event)=>{handleClick(event)}}
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
