import  { connect } from 'react-redux'
import RoomPrice from '../components/RoomPrice'

const mapStateToProps = ({roomPrice}) => {
  return {
    roomPrice
  }
}

export default connect(mapStateToProps)(RoomPrice)

