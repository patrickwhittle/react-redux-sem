import React from 'react'
import { reduxForm } from 'redux-form'
import { Map, fromJS, List, Set } from 'immutable'
import { Table } from 'react-bootstrap'
import _filter from 'lodash/filter'
import RoomPrice from 'ba-common-interface-js/com/bookassist/model/RoomPrice'
import { setRoomPrices } from '../actions/actions.js'

const RoomPrices = ({roomPrices, fields, handleSubmit, submitting}) => {

  const onSubmit = (data, dispatch) => {
    const dirtyIds = _filter(fields, v => v.dirty).map(r => r.name)
    const dirtyRoomPrices = dirtyIds.map(id => roomPrices.get(id).set('shortDesc', data[id]).toJS()).map(r => new RoomPrice(r))
    return Promise.all(dirtyRoomPrices.map(r => {
      return r.save({ url: `http://rw.bookassist.com/rest/super/${r.guideId}/${r.hotelId}/room_price/${r.id}` })
    }))
    .then(jsons => {
      const serverRooms = Map(jsons.reduce((result, item) => {
        result[item.id] = item
        return result
      }, {}))
      dispatch(setRooms(roomPrices.merge(serverRooms)))
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Table striped condensed >
        <thead>
          <tr>
            <td colSpan='3'>
              <h4>Edit Room Descriptions</h4>
            </td>
          </tr>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {roomPrices.toList().map(room => (
            <tr key={room.get('id')}>
              <td>{room.get('id')}</td>
              <td colSpan='2'>
                <input style={{width:'100%'}} type='text' {...fields[room.get('id')]} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </form>
  )

}

export default reduxForm({form: 'dynamic'})(RoomPrices)

