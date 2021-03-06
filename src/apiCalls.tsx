import { IPost } from './types';

export const postForm = (newPost: {}) => {
  return fetch(`https://shine-api.herokuapp.com/api/v1/posts`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
    .then(response => {
      return response.json()
    })
}

export const getPosts = () => {
  return fetch('https://shine-api.herokuapp.com/api/v1/posts')
    .then(response => response.json())
}

export const getPost = (id: string) => {
  return fetch(`https://shine-api.herokuapp.com/api/v1/posts/${id}`)
    .then(response => response.json())
}

export const addReplyCall = (newPost: IPost) => {
  return fetch(`https://shine-api.herokuapp.com/api/v1/posts/${newPost.pid}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
    .then(response => {
      return response.json()
    })
}

