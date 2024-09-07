export interface Post {
  id: number
  title: string
  sub_title: string
  content: string
  tag: string

  cover?: string
  created_at: string
  updated_at: string
}

export interface Book {
  id: number
  name: string
  author: string
  content: string
  tag: string
  date: string

  cover?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: number
  name: string
  decription: string
  content: string
  tech_stack: string
  status: string

  cover?: string
  created_at: string
  updated_at: string
}
