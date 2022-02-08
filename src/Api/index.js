import axio from "axios"
import request from './untils'

const URL = "https://61d6f3ab35f71e0017c2e93a.mockapi.io"
export const getListNews = () => axio.get(`${URL}/News`)
export const updateNews = (payload) => axio.put(`${URL}/News/${payload.id}`, payload)
export const deleteNews = (id) => axio.delete(`${URL}/News/${id}`)
export const createNews = (payload) => axio.post(`${URL}/News`, payload)
export const loadDetailNews = (id) => axio.get(`${URL}/News/${id}`)

export const getListBook = () => axio.get(`${URL}/Book`)
export const updateBook = (payload) => axio.put(`${URL}/Book/${payload.id}`, payload)
export const deleteBook = (id) => axio.delete(`${URL}/Book/${id}`)
export const createBook = (payload) => axio.post(`${URL}/Book`, payload)
export const loadDetailBook = (id) => axio.get(`${URL}/Book/${id}`)


export const login = (payload) => {
  return request(`http://quanlycudan.modunsoft.com/api/Users/authenticate`, {
    method: "post",
    data: payload,
  })
}
