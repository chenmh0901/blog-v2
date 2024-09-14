import { createDirectus, rest } from '@directus/sdk'

export const dirStaticConfig = {
  postCollection: 'Blog_article',
  postTags: [
    'Frontend',
    'Algorithms',
    'Interview',
    'CS',
    'Lifelong',
    'Other',
  ],
  bookColletion: 'Blog_book',
  bookTypes: [
    '文学',
    '科技',
    '历史',
    '管理',
    '法律',
    '金融',
    '心理',
  ],
  projectCollection: 'Blog_project',
  dailyTodoCollection: 'Blog_dailyTodo',
  bookTodoCollection: 'Blog_bookTodo',
  api_url: 'https://api.niniix.cn',
}

export const dirAssetsSrc = (src: string, width: number = 800, quality: number = 75) => {
  return `${dirStaticConfig.api_url}/assets/${src}?format=webp&width=${width}&quality=${quality}`
}

export const client = createDirectus(dirStaticConfig.api_url).with(rest())
