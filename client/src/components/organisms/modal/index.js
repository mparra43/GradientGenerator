import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatColor } from '../../../utils/index'
import { ButtonText } from '../../atoms/index';
import { SectionButtons } from '../../molecules/index';
import { uiCloseModal } from '../../../actions/ui';
import { saveTemplate } from '../../../actions/colors';
import './style/index.css';

export const Modal = () => {

    const dispatch = useDispatch();

    const { primaryColor, secondaryColor, templates } = useSelector(state => state.color);
    const { modalOpen, option } = useSelector(state => state.ui);
    const [formValues, setFormValues] = useState({ name: '', creator: '', });
    const { name, creator } = formValues;
    const textButtonsColors = { text: 'Colors',  primaryColor, secondaryColor }


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        dispatch(uiCloseModal());
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(saveTemplate(name, creator, `${primaryColor},${secondaryColor}`));
        closeModal();
    }




    return (
        <div style={{
            position: 'fixed',
            top: '23%',
            left: '50%',
            bottom: '25px',
            right: 'auto',
            width: '320px',
            height: '58%',
            padding: '20px 32px 20px 32px',
            background: '#fff',
            borderRadius: '8px',
            display: modalOpen ? 'block' : 'none'

        }}>
            <h1>{option === 'Save Template' ? 'Save a new template' : 'Template History'}</h1>
            <hr />
            {option === 'Save Template' ?
                <form onSubmit={handleSubmitForm}>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        name='name'
                        autoComplete='off'
                        value={name}
                        onChange={handleInputChange}
                    />
                    <label>Creator</label>
                    <input
                        type='text'
                        className='form-control'
                        name='creator'
                        autoComplete='off'
                        value={creator}
                        onChange={handleInputChange}
                    />

                    <SectionButtons{...textButtonsColors} />

                    <div>
                        <ButtonText  {...{ text: 'save' }} />
                    </div>
                </form> :
                templates.templates?.map((item) => (
                    <div key={item._id}>
                        <SectionButtons  {...
                            {
                                text: item.name,
                                primaryColor: formatColor('primaryColor', item.colors),
                                secondaryColor: formatColor('secondaryColor', item.colors),
                                optionC: 'Use',
                                additionalText: item.creator
                            }
                        } />
                    </div>

                ))


            }

        </div >
    )
}

