import { UPDATE_DDM_VISIBILITY, CHANGE_LANGUAGE, UPDATE_WINDOW_WIDTH } from '../constants/action-types'

const initialState = {
  lang: 'en',
  windowWidth: parseInt(document.documentElement.clientWidth)
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case UPDATE_DDM_VISIBILITY: 
      state={...state, dropdownMenuVisible: action.payload}
      break

    case CHANGE_LANGUAGE:
      state={...state, lang: action.payload}
      break

    case UPDATE_WINDOW_WIDTH:
      state={...state, windowWidth: action.payload}
      break

    default: break
  }

  return state
}