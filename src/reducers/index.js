import { UPDATE_DDM_VISIBILITY, CHANGE_LANGUAGE } from '../constants/action-types'

const initialState = {
  lang: 'en'
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case UPDATE_DDM_VISIBILITY: 
      state={...state, dropdownMenuVisible: action.payload}
      break

    case CHANGE_LANGUAGE:
      state={...state, lang: action.payload}
      break

    default: break
  }

  return state
}