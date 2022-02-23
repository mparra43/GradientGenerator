import React from 'react';
import { ButtonText, Color } from '../../atoms/index';


export const SectionButtons = (props) => {



    return (
        <div style={{ marginTop:'10px'}}>
            <p>{props.text}</p>
            <div
                style={{
                    display: 'grid',
                    'gridTemplateColumns': props.optionC ? '80px 80px 80px' : '80px 80px',
                    gap: '5px',
                    padding: '0 0 15px 0'
                }}>

                {props.optionA ?
                    <ButtonText {...{ text: props.optionA}} /> :
                    <Color {...{ text: props.primaryColor }} />
                }
                {props.optionB ?
                    <ButtonText {...{ text: props.optionB }} /> :
                    <Color {...{ text: props.secondaryColor }} />
                }
                {props.optionC?
                 props.optionC ==='Use'?
                    <ButtonText {...{ text: props.optionC,primaryColor: props.primaryColor,  secondaryColor: props.secondaryColor}} /> :
                    <ButtonText {...{ text: props.optionC}} />: ''
                }
                {props.additionalText ?  <p>{props.additionalText}</p>:''}
            </div>
        </div>

    );
};