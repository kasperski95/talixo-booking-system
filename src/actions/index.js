import { UPDATE_DDM_VISIBILITY, CHANGE_LANGUAGE } from '../constants/action-types'

export function updateDdmVisibility(payload) { return {type: UPDATE_DDM_VISIBILITY, payload}; }
export function changeLanguage(payload) { return {type: CHANGE_LANGUAGE, payload}; }