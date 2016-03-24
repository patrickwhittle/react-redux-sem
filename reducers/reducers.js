import { SET_ROOM_PRICE } from '../actions/actionTypes'

export const roomPrice = (state={}, action) => {
  switch (action.type) {
    case SET_ROOM_PRICE:
      return action.roomPrice
    default:
      return state
  }
}

