import * as React from 'react';
import { StyledAutocomplete } from './styles'
import Stack from '@mui/material/Stack';

import {
    StyledTextField
} from "../../styles/globalStyles";

export const MultiSelectInput = ({topics, setTopics}) => {

    const handleChange = (value) => {
        setTopics(value);
    }


    return (
        <Stack spacing={3} sx={{ width:'100%' }}>
        <StyledAutocomplete
            onChange={(event,value)=>{handleChange(value)}}
            multiple
            id="tags-outlined"
            options={blogCategories}
            getOptionLabel={(option) => option.title}
            //defaultValue={[blogCategories[5]]}
            filterSelectedOptions
            renderInput={(params) => (
            <StyledTextField
                {...params}
                label="Seleccione los temas relacionados"
                placeholder="Temas del Post"
            />
            )}
        />
        </Stack>
    );
}

const blogCategories = [
  { title: 'Excel', category: 'Basico' },
  { title: 'VBA', category: 'Intermedio' },
  { title: 'Formula', category: 'Avanzado' },
  { title: 'Macro', category: 'Basico' },
  { title: 'Base de datos', category: 'Basico' },
  { title: "Integración", category: 'Basico' },
  { title: 'Programación', category: 'Intermedio' },
  { title: 'Automatización', category: 'Intermedio' },
  { title: 'Dashboard', category: 'Intermedio' },
  { title: 'Educación', category: 'Avanzado' },
  { title: 'Limpieza de datos de datos', category: 'Avanzado' },
  { title: 'Otros', category: 'Avanzado' },
];