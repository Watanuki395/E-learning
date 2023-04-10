import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
    Container,
    Section,
    TextWrapper,
    CustomCard,
    CustomCardContent,
    CardHeading,
    StyledTextField,
    CustomButton,
    Row
} from "../../styles/globalStyles";
import Divider from '@mui/material/Divider';
import { CustumAlert } from "../../components/Alert/Alert";
import { Vplayer } from "../../components/Vplayer/Vplayer";
import { MultiSelectInput } from "../../components/MultiSelectInput/MultiSelectInput";
import { useNavigate } from "react-router-dom";
import { MdOutlineSave } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";


import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


import { MdArrowBackIos } from 'react-icons/md';
import { 
    StyledHeaderDiv, 
    AddContentGrid, 
    StyledFormGrid,
    StyledRadio
} from "./styles";
import SaveBar from "../../components/SaveBar/Savebar";
import { saveNewBlog } from "../../firebase/api";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";




const Content = () => {

    const { user } = useAuth();
    let navigate = useNavigate();
    const [notify, setNotify] = useState({isOpen: false, title:'', message:'', type:'info'});
    const [visibility, setVisibility] = useState(false);
    const [ytLink, setYtLink] = useState(undefined);
    const [topics, setTopics] = useState({});

    const initialValues = {
        blogTitle: '',
        content:'',
        ytLink:''
    };

    let btnNames = [{name:'Limpiar', type:'reset', icon: <AiOutlineClear/>},
        {name:'Actualizar', type:'submit', icon: <MdOutlineSave/>}
]

    const validationSchema = Yup.object().shape({
        blogTitle: Yup
            .string()
            .required("Campo Requerido")
            .max(255, `Máximo 255 caracteres`)
            .min(2, `Mínimo 2 caracteres`),
        content: Yup
            .string()
            .required("Campo Requerido")
            .max(1000, `Máximo 1000 caracteres, por favor revisa el contenido de tu articulo`)
            .min(100, `Mínimo 100 caracteres, No puedes publicar un articulo sin contenido`),
        ytLink: Yup
            .string()
            .required("Campo Requerido")
            .max(100, `Máximo 100 caracteres`)
            .min(5, `Mínimo 5 caracteres`),
    });

    const handleSubmit = async (vals) => {
        if (vals && user.uid ) {
            let data = vals;
            data = {... data, topics, visibility, createdBy:user.uid};
            await saveNewBlog(data);
            setNotify({
                isOpen:true,
                title:'Bien',
                message:'Los datos se ingresaron exitosamente',
                type:'success'
            });
        } else {
            setNotify({
                isOpen:true,
                title:'Actualizacion con Fallida',
                message:'Los NO  datos se ingresaron correctamente',
                type:'error'
            });
        }
    };

    const handleBackClick = () =>{
        navigate('/content');
    }

    const handleRadioSelectionChange = (event) => {
        setVisibility(event.target.value);
        console.log(event.target.value)
    };

    const handleAddLink = (value) => {
        if(value){
            setYtLink(value);
        }

    };

    return (
        <Section height="100%" position="relative">
            <Container>
                <CustumAlert
                    notify={notify}
                    setNotify={setNotify}
                />
                <StyledHeaderDiv>
                    <CustomButton onClick={handleBackClick}><MdArrowBackIos/></CustomButton>
                    <CardHeading>TODO: NOMBRE DEL POST</CardHeading>
                </StyledHeaderDiv>
                <AddContentGrid>
                    <CustomCard id="Add-content">
                        <CustomCardContent 
                        gcolumns="1fr"
                        id="content-section">
                            <CardHeading>Información personal</CardHeading>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values) => handleSubmit(values)}
                                >
                                {({ errors, touched, isSubmitting, values }) => (
                                    <Form>
                                    <StyledFormGrid>
                                        <Field
                                            fullWidth
                                            name="blogTitle"
                                            label="Title"
                                            as={StyledTextField}
                                            //value={ values.blogTitle ? values.blogTitle : ''}
                                            //onChange={e=>{handleInputChange(e)}}
                                            error={ Boolean(errors.blogTitle) && Boolean(touched.blogTitle) }
                                            helperText={ Boolean(touched.blogTitle) && errors.blogTitle }
                                            disabled={isSubmitting}
                                        />
                                        <Field
                                            fullWidth
                                            name="content"
                                            label="Contenido"
                                            placeholder="Escriba el contenido del articulo que desea publicar"
                                            as={StyledTextField}
                                            //value={''}
                                            //onChange={e=>{handleInputChange(e)}}
                                            error={ Boolean(errors.content) && Boolean(touched.content) }
                                            helperText={ Boolean(touched.content) && errors.content }
                                            disabled={isSubmitting}
                                            multiline
                                            rows={5}
                                        />

                                    <CardHeading>Atributos</CardHeading>
                                        <Field
                                            fullWidth
                                            name="ytLink"
                                            label="YouTube Link"
                                            as={StyledTextField}
                                            //onChange={e=>{handleInputChange(e)}}
                                            error={ Boolean(errors.ytLink) && Boolean(touched.ytLink) }
                                            helperText={ Boolean(touched.ytLink) && errors.ytLink }
                                            disabled={isSubmitting}
                                            InputProps={{endAdornment: <CustomButton onClick={ () => {handleAddLink(values.ytLink)}} variant="contained">Agregar</CustomButton> }}
                                            />
                                        {/* <Field
                                            fullWidth
                                            name="imgBackGround"
                                            label="Imagen para el post"
                                            as={StyledTextField}
                                            //onChange={e=>{handleInputChange(e)}}
                                            error={ Boolean(errors.imgBackGround) && Boolean(touched.imgBackGround) }
                                            helperText={ Boolean(touched.imgBackGround) && errors.imgBackGround }
                                            disabled={isSubmitting}
                                            InputProps={{endAdornment: <CustomButton onClick={ () => {handleAddLink(values.imgBackGround)}} variant="contained">Seleccionar</CustomButton> }}
                                            /> */}
                                        <MultiSelectInput 
                                        topics={topics}
                                        setTopics={setTopics}
                                        />
                                        
                                    </StyledFormGrid>


                                    <SaveBar btnNames={btnNames} isSubmitting={isSubmitting} setYtLink={setYtLink} />
                                    
                                    </Form>
                                )}
                                
                                </Formik>
                        </CustomCardContent>
                    </CustomCard>
                    <CustomCard id="Add-content">
                        <CustomCardContent 
                        gcolumns="1fr"
                        id="content-section">
                            <TextWrapper>Visibilidad del contenido</TextWrapper>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={visibility}
                                    onChange={handleRadioSelectionChange}
                                >
                                    <FormControlLabel value={true} control={<StyledRadio />} label="Visible" />
                                    <FormControlLabel value={false} control={<StyledRadio />} label="Oculto" />
                                </RadioGroup>
                            </FormControl>
                            <Divider  variant="fullWidth" flexItem sx={{borderColor:'white', paddingTop:'1rem', marginBottom:'1rem'}}/>
                            <TextWrapper>Vista previa del video</TextWrapper>
                            <Row justify="center">
                                {ytLink ? <Vplayer youtubeLink={ytLink}/> :  <TextWrapper margin='6rem'>Ningun video para mostrar</TextWrapper>}
                            </Row>

                        </CustomCardContent>
                    </CustomCard>
                </AddContentGrid>
            </Container>
        </Section>
    )

}

export default Content;