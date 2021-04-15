export const postForm = (newPost: {}) => {
  return fetch(`http://localhost:5000/api/v1/posts`, {
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