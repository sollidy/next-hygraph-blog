import moment from 'moment'

export const timeAgo = (time: string) => {
  return moment(time).fromNow()
}
