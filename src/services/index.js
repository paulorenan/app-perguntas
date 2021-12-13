export const getQuestions = async (quantidade) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${quantidade}`)
  const data = await response.json()
  return data.results
}