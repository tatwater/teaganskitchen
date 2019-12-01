export const actionTypes = {
  OPEN_MAIN_NAV: 'OPEN_MAIN_NAV',
  CLOSE_MAIN_NAV: 'CLOSE_MAIN_NAV',
}

export function openMainNav() {
  return {
    type: actionTypes.OPEN_MAIN_NAV,
  }
}
export function closeMainNav() {
  return {
    type: actionTypes.CLOSE_MAIN_NAV,
  }
}
