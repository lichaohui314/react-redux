import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/homeType"
const token = TOKEN
export const onChangeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value,
        token
    }
}
export const onAddItemAction = () => {
    return {
        type: ADD_ITEM,
        token
    }
}