import moment from 'moment'
import { UPDATE_DDM_VISIBILITY, CHANGE_LANGUAGE, UPDATE_WINDOW_WIDTH, UPDATE_BOOKING } from '../constants/action-types'

const initialState = {
  lang: 'en',
  windowWidth: parseInt(document.documentElement.clientWidth),
  booking: {
    date: moment().format('YYYY-MM-DD'),
    hour: '12:00'
  }
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case UPDATE_DDM_VISIBILITY: 
      state = {...state, dropdownMenuVisible: action.payload}
      break

    case CHANGE_LANGUAGE:
      state = {...state, lang: action.payload}
      break

    case UPDATE_WINDOW_WIDTH:
      state = {...state, windowWidth: action.payload}
      break

    case UPDATE_BOOKING:
      state = {...state, booking: action.payload}
      break

    default: break
  }

  return state
}