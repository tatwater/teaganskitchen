export const actionTypes = {
  RESPOND: 'RESPOND',
}

export function respond(response) {
  return {
    type: actionTypes.RESPOND,
    response
  }
}
