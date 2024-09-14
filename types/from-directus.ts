export interface Post {
  id: number
  title: string
  sub_title: string
  content: string
  tag: string

  cover?: string
  date_updated: string
  date_created: string
}

export interface Book {
  id: number
  book_name: string
  book_author: string
  book_content: string
  book_type: string
  book_date: string
  status: string
  remark: string

  date_updated: string
  date_created: string
}

export interface Project {
  id: number
  name: string
  description: string
  tech_stack: string
  status: string
  url: string

  cover?: string
  date_updated: string
  date_created: string
}

export interface ITodo {
  id: number
  date: string
  content: string

  date_updated: string
  date_created: string
}
