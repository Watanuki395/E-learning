import React from "react";
import ReactPlayer from 'react-player';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import {
    CustomCard,
} from "../../styles/globalStyles";



export const Vplayer = ({youtubeLink}) =>{

    return(
        <CustomCard sx={{ maxWidth: 352, maxHeight: 198, margin:'1rem'}}>
            <CardActionArea>
                <ReactPlayer 
                    url= {youtubeLink? youtubeLink : ''} 
                    width="352px"
                    height="198px"
                />
            </CardActionArea>
        </CustomCard>
    )
}