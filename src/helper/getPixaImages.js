

export const getPixaImages = async (searchParam) =>{
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchParam}&image_type=photo`
  const response = await fetch(url)
  const result = await response.json()
  return result
}
