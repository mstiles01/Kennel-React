const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owner/${id}`)
    .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owner`)
    .then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/owner/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}