import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { uiOpenModal, uiCloseModal } from '../../../../actions/ui'
import { getHistoryTemplates } from '../../../../actions/colors';
import './style/index.css'


export const ButtonLong = (props) => {

    const { modalOpen, option } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleClick = (text) => {

        modalOpen ? dispatch(uiCloseModal()) : dispatch(uiOpenModal(text));

        if (modalOpen && option !== text) {
            dispatch(uiOpenModal(text))
        } else if( text === 'Show Templates'){
            dispatch(getHistoryTemplates());
        }
    }

        return (

            <button onClick={() => { handleClick(props.text) }} className='buttonLong'>
                <p>{props.text}</p>
            </button>

        );
    };