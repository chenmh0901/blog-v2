import { createDirectus, rest } from '@directus/sdk'

export const dirStaticConfig = {
  postCollection: 'Blog_article',
  postTags: [
    'Frontend',
    'Algorithms',
    'Other',
    'Interview',
    'Lifelong'
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
  api_url: 'https://api.niniix.cn',
}

export const dirAssetsSrc = (src: string) => {
  return `${dirStaticConfig.api_url}/assets/${src}`
}

export const client = createDirectus(dirStaticConfig.api_url).with(rest())
