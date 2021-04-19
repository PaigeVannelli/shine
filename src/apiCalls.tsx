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
  // .then(data => console.log(data))
}

export const addReplyCall = (newPost: IPost) => {
  console.log('1newPost', newPost)
  return fetch(`https://shine-api.herokuapp.com/api/v1/posts/${newPost.pid}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
    .then(response => {
      console.log('2newPost', newPost)
      console.log(response)
      return response.json()

    })
}

