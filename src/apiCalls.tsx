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
  return fetch('http://localhost:5000/api/v1/posts')
    .then(response => response.json())
}

export const getPost = (id: string) => {
  return fetch(`http://localhost:5000/api/v1/posts/${id}`)
  .then(response => response.json())
  // .then(data => console.log(data))
}

// export default {
//   getPosts,
//   postForm,
//   getPost
// }