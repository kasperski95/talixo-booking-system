import { UPDATE_DDM_VISIBILITY, CHANGE_LANGUAGE, UPDATE_WINDOW_WIDTH, UPDATE_BOOKING } from '../constants/action-types'

export function updateDdmVisibility(payload) { return {type: UPDATE_DDM_VISIBILITY, payload}; }
export function changeLanguage(payload) { return {type: CHANGE_LANGUAGE, payload}; }
export function updateWindowWidth(payload) { return {type: UPDATE_WINDOW_WIDTH, payload}; }
export function updateBooking(payload) { return {type: UPDATE_BOOKING, payload}; }