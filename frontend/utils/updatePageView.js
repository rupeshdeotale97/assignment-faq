import API_URL from '../constants/costants'
// Storing page view on any route render
export default async function updatePageView (page) {
  return await fetch(
    `${API_URL}/page-views/${page}`,
    {
    method: "POST", 
    body: JSON.stringify({}), 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
  })
}