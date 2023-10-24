const setError = (status, menssage) => {
  const error = new Error()
  error.status = status
  error.message = menssage
  return error
}

module.exports = { setError }
