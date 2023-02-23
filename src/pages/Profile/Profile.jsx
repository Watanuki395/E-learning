import { useState, useEffect } from "react";
import {
  Container,
  Section,
  TextWrapper,
  CustomCard,
  CustomCardContent,
  CardHeading,
  StyledTextField,
} from "../../styles/globalStyles";
import SaveBar from "../../components/SaveBar/Savebar";
import { MdOutlineSave } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";


import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { ProfileGrid, StyledAvatar, StyledFormGrid } from "./styles";

const Profile = () => {

  const initialValues = {
    fname: "",
    lname: "",
    email: ""
  };

  const [values, setValues] = useState(initialValues);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electrónico Inválido")
      .max(255, `Máximo 255 caracteres`),
    fname: Yup.string()
      .required("Campo Requerido")
      .min(8, `Mínimo 2 caracteres`),
    lname: Yup.string()
      .required("Campo Requerido")
      .min(8, `Mínimo 2 caracteres`),
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

  const [error, setError] = useState(false);

  const handleSubmit = async (vals) => {
    console.log(vals);
    setError(false);
  };

  let btnNames = [{name:'Limpiar', type:'reset', icon: <AiOutlineClear/>},
                  {name:'Guardar', type:'submit', icon: <MdOutlineSave/>},
                ]

  return (
    <Section height="100%" position="relative">
      <Container>
        <CardHeading>Admin</CardHeading>

        <ProfileGrid>
          <CustomCard>
            <CustomCardContent gcolumns="1fr" id="profile-info">
              <TextWrapper>Información personal</TextWrapper>
              <CustomCardContent gcolumns="120px 1fr">
                <StyledAvatar {...stringAvatar("Gerardo Salas Montoya")}/>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form>
                      <StyledFormGrid>
                      <Field
                        fullWidth
                        name="fname"
                        label="Nombre"
                        as={StyledTextField}
                        error={Boolean(errors.fname) && Boolean(touched.fname)}
                        helperText={Boolean(touched.fname) && errors.fname}
                      />
                      <Field
                        fullWidth
                        name="lname"
                        label="Apellidos"
                        as={StyledTextField}
                        error={
                          Boolean(errors.lname) && Boolean(touched.lname)
                        }
                        helperText={
                          Boolean(touched.lname) && errors.lname
                        }
                      />
                      <Field
                        fullWidth
                        name="email"
                        label="Correo Electronico"
                        type="email"
                        as={StyledTextField}
                        error={
                          Boolean(errors.email) && Boolean(touched.email)
                        }
                        helperText={Boolean(touched.email) && errors.email}
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
