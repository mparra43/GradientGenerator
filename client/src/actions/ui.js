import { types } from '../types/types';



export const switchLightMode = () => ({ type: types.uiLightMode });

export const switchDarkMode = () => ({ type: types.uiDarkMode });

export const uiOpenModal = (option) => ({ type: types.uiOpenModal, payload:option });

export const uiCloseModal = () => ({ type: types.uiCloseModal });