import React from 'react'
import { Table } from 'react-bootstrap'

const RoomPrices = ({roomPrices}) => (
  <Table striped condensed >
    <thead>
      <tr>
        <td colSpan='2'>
          <h4>Room Descriptions</h4>
        </td>
      </tr>
      <tr>
        <td>ID</td>
        <td>Name</td>
      </tr>
    </thead>
    <tbody>
      {roomPrices.map(roomPrice => (
        <tr key={roomPrice.id}>
          <td>{roomPrice.id}</td>
          <td>{roomPrice.shortDesc}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default RoomPrices

