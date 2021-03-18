//THIS FILE HAS NO RELATION TO REDUX. THE MAIN USE IS USEREDUCER HOOK 

export const passwordCreationReducer = (state, action) => {
    switch (action.type) {
        case (Actions.SET_PASSWORD_INPUT_DIRTY):
            return {...state, pristine: false};
        case (Actions.SHOW_PASSWORD):
            return { ...state, passwordHidden: !state.passwordHidden };
        case (Actions.VALIDATE_TEN_CHARACTERS):
            let confirmTenCharacters = false;
            if(action.payload.length >= 10) confirmTenCharacters = true;   
            return { ...state, tenCharacters: confirmTenCharacters, tenCharactersColor: confirmTenCharacters ? 'green' : 'red'};
        case (Actions.VALIDATE_ONE_NUMBER):
            let confirmOneNumber = false;
            if(action.payload.match(DIGITS)) confirmOneNumber = true;
            return { ...state, oneNumber: confirmOneNumber, oneNumberColor: confirmOneNumber ? 'green' : 'red'};
        case (Actions.VALIDATE_ONE_CAPITAL):
            let confirmOneCapital = false;
            if(action.payload.match(CAPITALLETTERS)) confirmOneCapital = true;
            return { ...state, oneCapital: confirmOneCapital, oneCapitalColor: confirmOneCapital ? 'green' : 'red'};
        case (Actions.SHOW_RETYPED_PASSWORD):
            return { ...state, retypedPasswordHiddden: !state.retypedPasswordHiddden };
        case (Actions.ACCEPT_PASSWORD):
            return { ...state, password: action.payload };
        case (Actions.CANCEL_PASSWORD):
            return { ...state, password: '', passwordAccepted: false };
        case(Actions.CONFIRM_PASSWORD_MATCH): 
            let confirmPasswordMatch = false;
            if (action.payload === state.password) confirmPasswordMatch = true;
            return  {...state, passwordMatchConfirmed: confirmPasswordMatch, retypedPassword: action.payload};
        default:
            return state;
    }
};
