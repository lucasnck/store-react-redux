const INITIAL_STATE = { status: "" }

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'MENU_TOGGLE':
            return {
                ...state, status: state.status === 'active' ? '' : "active"
            }
        default:
            return state
    }

}