import axios from 'axios'
import { API_URL } from '../constants/constants'
import { type Post } from '../interfaces/Post'

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(API_URL)

    if (Array.isArray(response.data)) {
      return response.data
    }
    return []
  } catch (error) {
    console.error(error)
    return []
  }
}
