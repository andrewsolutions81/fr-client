export const isLogged = (): boolean => {
  const cookies = document.cookie;
  return cookies.includes("token=");
}

export const isAdmin= ():boolean => {
  return true
}
