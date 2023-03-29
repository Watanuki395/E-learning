import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import {
  Container,
  Section,
  TextWrapper,
  CustomCard,
  CustomCardContent,
  CardHeading,
  StyledTextField
} from "../../styles/globalStyles";
import SaveBar from "../../components/SaveBar/Savebar";
import { MdOutlineSave } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { CustumAlert } from "../../components/Alert/Alert";


import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { ProfileGrid, StyledAvatar, StyledFormGrid, StyledFormGridRow } from "./styles";
import { updateUser } from "../../firebase/api";

const Profile = () => {

  const { user, userInfo } = useAuth();

  const [notify, setNotify] = useState({isOpen: false, title:'', message:'', type:''});

  const initialValues = {
    fname: userInfo.fname,
    lname: userInfo.lname,
    email: user.email
  };


  const validationSchema = Yup.object().shape({
    fname: Yup
      .string()
      .required("Campo Requerido")
      .max(255, `Máximo 255 caracteres`)
      .min(2, `Mínimo 2 caracteres`),
    lname: Yup
      .string()
      .required("Campo Requerido") 
      .max(255, `Máximo 255 caracteres`)
      .min(2, `Mínimo 2 caracteres`),
    email: Yup
      .string()
      .email("Correo Electrónico Inválido")
      .required("Campo Requerido")
      .max(255, `Máximo 255 caracteres`)
      .min(5, `Mínimo 2 caracteres`)
  });

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const handleSubmit = async (vals) => {
    if (vals && user.uid) {
        await updateUser(user.uid, vals);
        setNotify({
          isOpen:true,
          title:'Actualizacion con Exito',
          message:'Los datos se actualizaron correctamente',
          type:'success'
        });
    } else {
      setNotify({
        isOpen:true,
        title:'Actualizacion con Fallida',
        message:'Los NO  datos se actualizaron correctamente',
        type:'error'
      });
    }
  };



  let btnNames = [{name:'Limpiar', type:'reset', icon: <AiOutlineClear/>},
                  {name:'Actualizar', type:'submit', icon: <MdOutlineSave/>}
                ]

  return (
    <Section height="100%" position="relative">
      <Container>
          <CustumAlert
            notify={notify}
            setNotify={setNotify}
          />
        <CardHeading>Admin</CardHeading>
        <ProfileGrid>
          <CustomCard>
            <CustomCardContent gcolumns="1fr" id="profile-info">
              <TextWrapper>Información personal</TextWrapper>
              <CustomCardContent gcolumns="120px 1fr">
                <StyledAvatar { ...userInfo.fname && userInfo.lname ? {...stringAvatar( userInfo.fname +' '+ userInfo.lname )} : '' }/>
                <Formik
                  enableReinitialize 
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {({ errors, touched, isSubmitting, values }) => (
                    <Form>
                      <StyledFormGrid>
                        <StyledFormGridRow>
                          <Field
                            fullWidth
                            name="fname"
                            label="Nombre"
                            as={StyledTextField}
                            value={ values.fname? values.fname : ''}
                            //onChange={e=>{handleInputChange(e)}}
                            error={ Boolean(errors.fname) && Boolean(touched.fname) }
                            helperText={ Boolean(touched.fname) && errors.fname }
                            disabled={isSubmitting}
                          />
                          <Field
                            fullWidth
                            name="lname"
                            label="Apellidos"
                            value={ values.lname ? values.lname : ''}
                            //onChange={e=>{handleInputChange(e)}}
                            as={StyledTextField}
                            error={ Boolean(errors.lname) && Boolean(touched.lname) }
                            helperText={ Boolean(touched.lname) && errors.lname }
                            disabled={isSubmitting}
                          />
                      </StyledFormGridRow>
                      <Field
                        fullWidth
                        name="email"
                        label="Correo Electronico"
                        type="email"
                        value={values.email ? values.email : ''}
                        disabled
                        as={StyledTextField}
                        error={ Boolean(errors.email) && Boolean(touched.email) }
                        helperText={ Boolean(touched.email) && errors.email }
                      />
                      </StyledFormGrid>
                      <SaveBar btnNames={btnNames} isSubmitting={isSubmitting}/>
                      
                    </Form>
                  )}
                  
                </Formik>
              </CustomCardContent>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardContent
              gcolumns="1fr"
              id="profile-preferences"
            >
              <TextWrapper>Preferencias</TextWrapper>
              <div>aca van las preferencias  - TODO</div>
            </CustomCardContent>
          </CustomCard>
        </ProfileGrid>
        
      </Container>
    </Section>
  );
};

export default Profile;
