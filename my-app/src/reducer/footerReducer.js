export default function footerReducer(state,action) {
    switch (action.type) {
        case 'SET_VAL':
            return {
                ...state,
                val: action.value
            }
        default:
            return state;
    }
}