const INITIAL_STATE = {
    daftarCovid: {}
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DATA' : 
            return {
                ...state,
                daftarCovid: action.payload
            }
        default: 
            return state
    }
}

export default dataReducer