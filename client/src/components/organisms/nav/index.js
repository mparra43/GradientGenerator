import React from 'react';
import {useSelector} from "react-redux";
import {Title, Direction, Footer, SectionButtons } from '../../molecules/index';
import './style/index.css';

export const Navbar = () => {

    const {primaryColor, secondaryColor} = useSelector(state => state.color);
 

    
    const buttonStyleSettingsA ={
        text:'Style',
        optionA: 'Linear',
        optionB:'Radial',
    }
    const buttonStyleSettingsB= {
        text:'Output format',
        optionA: 'Hex',
        optionB:'Rgba',
    }

    const colorSection = {
        text:'Colors',
        primaryColor,
        secondaryColor,
        optionC: 'Random',
    }
    return (
        <div className='navbar'>
             <Title/>
             <SectionButtons{...buttonStyleSettingsA}/>
             <Direction/>
             <SectionButtons{...colorSection}/>
             <SectionButtons{...buttonStyleSettingsB}/>
             <Footer/>
        </div>
    )
}
