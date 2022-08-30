const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((cart) => cart.id === action.payload.id)

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case "RMV_CART":
            const data = state.carts.filter(d => d.id !== action.payload)
            return {
                ...state,
                carts: data
            }
        case "RMV_ONE":
            const itemIndex_Red = state.carts.findIndex((cart) => cart.id === action.payload.id)

            if (state.carts[itemIndex_Red].qnty > 1) {
                state.carts[itemIndex_Red].qnty -= 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[itemIndex_Red].qnty === 1) {
                const data = state.carts.filter(d => d.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            }
            break
        default:
            return state
    }
}