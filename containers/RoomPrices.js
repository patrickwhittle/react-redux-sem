import  { connect } from 'react-redux'
import RoomPrices from '../components/RoomPrices'

const mapStateToProps = ({roomPrices}) => {

  const fields = roomPrices.toList().map(r => r.get('id').toString()).toArray()

  const initialValues = roomPrices.toList().reduce((result, item) => {
    result[item.get('id')] = item.get('shortDesc')
    return result
  }, {})

  return {
    roomPrices,
    fields,
    initialValues
  }

}

export default connect(mapStateToProps)(RoomPrices)

