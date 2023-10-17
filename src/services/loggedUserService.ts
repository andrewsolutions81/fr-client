export const isTokenStored = (): boolean => {
  const cookies = document.cookie;
  return cookies.includes("token=");
}
