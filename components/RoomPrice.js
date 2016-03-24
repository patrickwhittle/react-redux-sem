import React from 'react'
import { Table } from 'react-bootstrap'

const RoomPrice = ({roomPrice}) => (
  <Table striped condensed >
    <thead>
      <tr>
        <td colSpan='2'>
          <h4>RoomPrice {roomPrice.id} Details</h4>
        </td>
      </tr>
    </thead>
    <tbody>
      {Object.keys(roomPrice)
        .filter(key => typeof roomPrice[key] != "object")
        .map(key => (
        <tr key={key}>
          <td>{key}</td>
          <td colSpan='2'>{roomPrice[key]}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default RoomPrice

