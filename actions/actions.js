import { OrderedMap, fromJS } from 'immutable'
import RoomPrice from 'ba-common-interface-js/com/bookassist/model/RoomPrice'
import Restables from 'ba-common-interface-js/com/bookassist/model/Restables'
import { SET_ROOM_PRICES } from './actionTypes'

export const setRoomPrices = (roomPrices) => {
  return {
    type: SET_ROOM_PRICES,
    roomPrices
  }
}

export const fetchRoomPrices = (hotelId, guideId) => {
  return (dispatch) => {
    const restables = new Restables(RoomPrice)
    return restables.get({
      url: `http://rw.bookassist.com/rest/super/${guideId}/${hotelId}/room_price` 
    })
    .then(roomPrices => {
      roomPrices = roomPrices.toObject()
      return OrderedMap(fromJS(roomPrices.map(r => [ r.id.toString(), r ])))
    })
    .then(roomPrices => dispatch(setRoomPrices(roomPrices)))
  }
}

