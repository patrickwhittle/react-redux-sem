import { SET_ROOM_PRICE } from './actionTypes'
import RoomPrice from 'ba-common-interface-js/com/bookassist/model/RoomPrice'

export const setRoomPrice = (roomPrice) => {
  return {
    type: SET_ROOM_PRICE,
    roomPrice
  }
}

export const fetchRoomPrice = (hotelId, guideId, roomPriceId) => {
  return (dispatch) => {
    return new RoomPrice().get({
      url: `http://rw.bookassist.com/rest/super/${guideId}/${hotelId}/room_price/${roomPriceId}` 
    })
    .then(roomPrice => roomPrice.toObject())
    .then(roomPrice => dispatch(setRoomPrice(roomPrice)))
  }
}

