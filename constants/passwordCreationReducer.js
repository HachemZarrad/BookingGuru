//THIS FILE HAS NO RELATION TO REDUX. THE MAIN USE IS USEREDUCER HOOK 

import Actions from './passwordCreationActions';

const CAPITALLETTERS = /[A-Z]/g;
const DIGITS = /\d/g;

export default (state, action) => {
    switch (action.type) {
        case (Actions.SET_PASSWORD_INPUT_DIRTY):
            return { ...state, pristine: false };
        case (Actions.SHOW_PASSWORD):
            return { ...state, passwordHidden: !state.passwordHidden };
        case (Actions.VALIDATE_TEN_CHARACTERS): {
            let confirm = false;
            if (action.payload.length >= 10) confirm = true;
            return { ...state, tenCharacters: confirm, tenCharactersColor: confirm ? 'green' : 'red' };
        }
        case (Actions.VALIDATE_ONE_NUMBER): {
            let confirm = false;
            if (action.payload.match(DIGITS)) confirm = true;
            return { ...state, oneNumber: confirm, oneNumberColor: confirm ? 'green' : 'red' };
        }
        case (Actions.VALIDATE_ONE_CAPITAL): {
            let confirm = false;
            if (action.payload.match(CAPITALLETTERS)) confirm = true;
            return { ...state, oneCapital: confirm, oneCapitalColor: confirm ? 'green' : 'red' };
        }
        case (Actions.SHOW_RETYPED_PASSWORD):
            return { ...state, retypedPasswordHidden: !state.retypedPasswordHidden };
        case (Actions.ACCEPT_PASSWORD):
            return { ...state, password: action.payload };
        case (Actions.CANCEL_PASSWORD):
            return { ...state, password: '', passwordAccepted: false };
        case (Actions.CONFIRM_PASSWORD_MATCH): {
            let confirm = false;
            if (action.payload === state.password) confirm = true;
            return { ...state, passwordMatchConfirmed: confirm, retypedPassword: action.payload };
        }
        default:
            return state;
    }
};
