import request from '../helpers/request'

const getNoteList = async (page = 1, limit = 10) => {
  return request(`/api/notes/lists?page=${page}&limit=${limit}`)
}

const getNote = async (_id) => {
  return request(`/api/notes/?id=${_id}`)
}

const getNoteListByClassify = async (classify, limit) => {
  return request(`/api/notes/noteClassify?classify=${classify}& limit=${limit}`)
}

const getClassify = async () => {
  return request(`/api/classify/lists`)
}


export default {
  getNoteList,
  getNote,
  getNoteListByClassify,
  getClassify,
}
