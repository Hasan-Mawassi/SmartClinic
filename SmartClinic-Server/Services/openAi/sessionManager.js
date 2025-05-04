const sessions = {}; 


export function getSession(userName) {
  if (!sessions[userName]) {
    sessions[userName] = {};
  }
  return sessions[userName];
}


export function clearSession(userName) {
  delete sessions[userName];
}

export function expireSessionAfter(userName, ms = 5 * 60 * 1000) {
  setTimeout(() => {
    clearSession(userName);
    console.log(`Session expired for user ${userName}`);
  }, ms);
}
