import { API } from './../hooks'


// const API = "http://13.60.46.66";
// export const getRequest = async (url:string) =>{
// 	const res = await fetch(`${API}${url}`,{
// 		next: { revalidate: 60 },
// 	})
// 	return res.json();
// }


// const API = "http://13.60.46.66"

export const getRequest = async (url: string) => {
  try {
    const res = await fetch(`${API}${url}`, {
      next: { revalidate: 60 },})
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`)}
    return res.json()} catch (error) {
    console.error("API error:", error)
    return null
  }
}
