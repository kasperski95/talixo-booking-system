import moment from 'moment'
import {
  UPDATE_DDM_VISIBILITY,
  CHANGE_LANGUAGE,
  UPDATE_WINDOW_WIDTH,
  UPDATE_BOOKING,
  UPDATE_DATEPICKER_VISIBILITY,
  UPDATE_POPUP_HIDER_VISIBILITY,
  SET_CALLBACK_OF_POPUP_HIDER,
  UPDATE_OPTIONS_EXPANSION
 } from '../constants/action-types'



const initialState = {
  lang: 'en',
  windowWidth: parseInt(document.documentElement.clientWidth),
  booking: {
    from: '',
    to: '',
    date: moment().format('YYYY-MM-DD'),
    time: moment().add(3, 'hours').format('HH:mm'),
    voucher: '',
    passengers: 1,
    luggage: 0,
    equipment: 0,
    animals: 0,
    children: 0,
    perHourBooking: 0
  },

  errors: {
    from: '',
    to: '',
    time: '',
    voucher: ''
  },

  optionsExpanded: true,
  datepickerVisibility: false,
  popupHiderVisibility: false
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

    case UPDATE_DATEPICKER_VISIBILITY:
      state = {...state,
        datepickerVisibility: action.payload,
        popupHiderVisibility: action.payload
      }
      break

    case UPDATE_POPUP_HIDER_VISIBILITY:
      if (action.payload === true)
        state = {...state,
          popupHiderVisibility: true,
        }
       else 
        state = {...state,
          popupHiderVisibility: false,
          datepickerVisibility: false,
        }
      break

    case SET_CALLBACK_OF_POPUP_HIDER:
      state = {...state, callbackOfPopupHider: action.payload}
      break

    case UPDATE_OPTIONS_EXPANSION:
      state = {...state, optionsExpanded: action.payload}
      break

    default: break
  }

  return state
}