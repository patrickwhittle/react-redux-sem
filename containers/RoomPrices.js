import  { connect } from 'react-redux'
import RoomPrices from '../components/RoomPrices'

const mapStateToProps = ({roomPrices}) => {
  return {
    roomPrices
  }
}

export default connect(mapStateToProps)(RoomPrices)

