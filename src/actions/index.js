import {
  UPDATE_DDM_VISIBILITY,
  CHANGE_LANGUAGE,
  UPDATE_WINDOW_WIDTH,
  UPDATE_BOOKING,
  UPDATE_DATEPICKER_VISIBILITY,
  UPDATE_POPUP_HIDER_VISIBILITY,
 } from '../constants/action-types'

export function updateDdmVisibility(payload) { return {type: UPDATE_DDM_VISIBILITY, payload}; }
export function changeLanguage(payload) { return {type: CHANGE_LANGUAGE, payload}; }
export function updateWindowWidth(payload) { return {type: UPDATE_WINDOW_WIDTH, payload}; }
export function updateBooking(payload) { return {type: UPDATE_BOOKING, payload}; }
export function updateDatepickerVisibility(payload) { return {type: UPDATE_DATEPICKER_VISIBILITY, payload};}
export function updatePopupHiderVisibility(payload) { return {type: UPDATE_POPUP_HIDER_VISIBILITY, payload}}
