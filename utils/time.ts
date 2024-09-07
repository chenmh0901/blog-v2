import dayjs from 'dayjs'

export const formateDate = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm:ss').format('MMMM D,YYYY')
}
