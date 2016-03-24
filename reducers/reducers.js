import { OrderedMap } from 'immutable'
import { reducer as formReducer } from 'redux-form'
import { SET_ROOM_PRICES } from '../actions/actionTypes'

export const roomPrices = (state=OrderedMap(), action) => {
  switch (action.type) {
    case SET_ROOM_PRICES:
      return action.roomPrices
    default:
      return state
  }
}

export const form = formReducer

