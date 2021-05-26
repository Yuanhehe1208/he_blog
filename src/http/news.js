import http from './index'

export const getNewsList = () => {
  http.get('./getNewsList')
}