import { SET_ROOM_PRICES } from '../actions/actionTypes'

export const roomPrices = (state=[], action) => {
  switch (action.type) {
    case SET_ROOM_PRICES:
      return action.roomPrices
    default:
      return state
  }
}

