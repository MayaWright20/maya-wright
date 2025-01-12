import { createContext } from 'react';

const ANIMATIONS_LENGTH = 6;
const ANIMATIONS = new Array(ANIMATIONS_LENGTH);
const ANIMATIONS_ARRAY = [...ANIMATIONS];

export const ModelActionsLengthContext = createContext(ANIMATIONS_ARRAY);
