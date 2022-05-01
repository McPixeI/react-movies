export const useSkeleton = (length = 5, type = 'media') => {
  return Array.from({ length: length }, (v, index) => ({
    id: `loading-${type}-${index}`
  }))
}
