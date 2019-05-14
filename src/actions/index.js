import {
  UPDATE_DDM_VISIBILITY,
  CHANGE_LANGUAGE,
  UPDATE_WINDOW_WIDTH,
  UPDATE_BOOKING,
  UPDATE_DATEPICKER_VISIBILITY,
  UPDATE_POPUP_HIDER_VISIBILITY,
  SET_CALLBACK_OF_POPUP_HIDER,
  UPDATE_OPTIONS_EXPANSION,
  UPDATE_ERRORS,
 } from '../constants/action-types'

export function updateDdmVisibility(payload) { return {type: UPDATE_DDM_VISIBILITY, payload}; }
export function changeLanguage(payload) { return {type: CHANGE_LANGUAGE, payload}; }
export function updateWindowWidth(payload) { return {type: UPDATE_WINDOW_WIDTH, payload}; }
export function updateBooking(payload) { return {type: UPDATE_BOOKING, payload}; }
export function updateDatepickerVisibility(payload) { return {type: UPDATE_DATEPICKER_VISIBILITY, payload};}
export function updatePopupHiderVisibility(payload) { return {type: UPDATE_POPUP_HIDER_VISIBILITY, payload}}
export function setCallbackOfPopupHider(payload) { return {type: SET_CALLBACK_OF_POPUP_HIDER, payload}}
export function updateOptionsExpansion(payload) { return {type: UPDATE_OPTIONS_EXPANSION, payload}}
export function updateErrors(payload) { return {type: UPDATE_ERRORS, payload}}
