import React from 'react'
import { connect } from 'react-redux'
import url from 'url'
import RoomPrices from '../containers/RoomPrices'
import { fetchRoomPrices } from '../actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoomPrices: (hotelId, guideId) => dispatch(fetchRoomPrices(hotelId, guideId))
  }
}

class App extends React.Component {

  componentDidMount() {
    const { hotel_id, guide_id } = url.parse(window.location.href, true).query
    this.props.fetchRoomPrices(hotel_id, guide_id)
  }

  render() {
    return (
      <RoomPrices />
    )
  }

}

export default connect(undefined, mapDispatchToProps)(App)

