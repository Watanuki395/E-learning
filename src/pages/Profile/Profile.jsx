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
  StyledTextField,
  CustomButton
} from "../../styles/globalStyles";
import SaveBar from "../../components/SaveBar/Savebar";
import { MdOutlineSave } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { CustumAlert } from "../../components/Alert/Alert";


import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { ProfileGrid, StyledAvatar, StyledFormGrid } from "./styles";
import { user } from "../../context/AuthContext";
import { getUser, updateUser } from "../../firebase/api";

const Profile = () => {

  const { user } = useAuth();

  const [myUser, setMyUser] = useState([]);
  const [alert, setAlert] = useState(false);

  const getMyUserById = async (id) => {
    try {
      const doc = await getUser(id);
      setMyUser({ ...doc.data() });
      console.log(myUser);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user.uid) {
    getMyUserById(user.uid);
    
    }
  }, [user.uid]);

  const initialValues = {
    fname: myUser.fname,
    lname: myUser.lname,
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
    console.log(vals);
    if (vals && user.uid) {
      await updateUser(user.uid, vals);
      setAlert(true);
      
    } else {
      toast("invalido", { type: "warning", autoClose: 1000 });
    }
  };

  let btnNames = [{name:'Limpiar', type:'reset', icon: <AiOutlineClear/>},
                  {name:'Actualizar', type:'submit', icon: <MdOutlineSave/>}
                ]

  return (
    <Section height="100%" position="relative">
      <Container>
      {alert && (
                <CustumAlert
                    message={'Nombre Actualizado Correctamente'}
                    title={"Bien"}
                    severity={"success"}
                />
            )}
        <CardHeading>Admin</CardHeading>
        <ProfileGrid>
          <CustomCard>
            <CustomCardContent gcolumns="1fr" id="profile-info">
              <TextWrapper>Información personal</TextWrapper>
              <CustomCardContent gcolumns="120px 1fr">
                <StyledAvatar {...stringAvatar("Gerardo Salas Montoya")}/>
                <Formik
                  enableReinitialize 
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {({ errors, touched, isSubmitting, values }) => (
                    <Form>
                      <StyledFormGrid>
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
                      <SaveBar btnNames={btnNames}/>
                      
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
