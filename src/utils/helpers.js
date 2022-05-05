export const truncateText = (text, n = 300) => {
  return text?.length > n ? text.substr(0, n - 1) + '...' : text
}
