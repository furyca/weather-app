import { useSelector } from 'react-redux'
import style from './Location.module.scss'

const Location = () => {
  const location = useSelector(state => state.weatherSlice.location)
  return (
    <div className={style.location}>
      <h3>{location}</h3>
    </div>
  )
}

export default Location