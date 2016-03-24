import React from 'react'
import { connect } from 'react-redux'
import url from 'url'
import RoomPrice from '../containers/RoomPrice'
import { fetchRoomPrice } from '../actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoomPrice: (hotelId, guideId, roomPriceId) => dispatch(fetchRoomPrice(hotelId, guideId, roomPriceId))
  }
}

class App extends React.Component {

  componentDidMount() {
    const { hotel_id, guide_id, rp } = url.parse(window.location.href, true).query
    this.props.fetchRoomPrice(hotel_id, guide_id, rp)
  }

  render() {
    return (
      <RoomPrice />
    )
  }

}

export default connect(undefined, mapDispatchToProps)(App)

