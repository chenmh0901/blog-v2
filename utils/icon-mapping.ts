const techIcons = {
  // portfolio maintain
  vue: 'logos:vue',
  react: 'logos:react',
  angular: 'logos:angular-icon',
  javascript: 'logos:javascript',
  typescript: 'logos:typescript-icon',
  nodejs: 'logos:nodejs-icon',
  html5: 'vscode-icons:file-type-html',
  css3: 'vscode-icons:file-type-css',
  git: 'logos:git-icon',
  github: 'mdi:github',
  docker: 'logos:docker-icon',
  mysql: 'logos:mysql',
  sass: 'logos:sass',
  webpack: 'logos:webpack',
  vite: 'logos:vitejs',
  tailwindcss: 'logos:tailwindcss-icon',
  element: 'logos:element',
  daisyui: 'logos:daisyui',
  prettier: 'logos:prettier',
  shadcnui: 'simple-icons:shadcnui',
  ionic: 'logos:ionic-icon',
  nginx: 'skill-icons:nginx',
  vscode: 'logos:visual-studio-code',
  postman: 'logos:postman-icon',
  notion: 'logos:notion-icon',
  antd: 'logos:ant-design',
  flutter: 'vscode-icons:file-type-flutter',
  eslint: 'logos:eslint',
  capacitor: 'logos:capacitorjs-icon',
  vueuse: 'logos:vueuse',
  nuxtjs: 'logos:nuxt-icon',
  pwa: 'logos:pwa',

  // post
  frontend: 'skill-icons:html',
  algorithms: 'mdi:math-compass',
  other: 'mdi:emoticon-happy-outline',
  lifelong: 'mdi:bed-king',
  interview: 'mdi:badge-account-horizontal',
  cs: 'mdi:laptop',

  // book

  '文学': 'ic:baseline-face',
  '科技': 'ic:baseline-fire-truck',
  '心理': 'ic:baseline-favorite',
  '历史': 'ic:outline-directions-railway-filled',
  '管理': 'ic:twotone-home-work',
  '法律': 'ic:baseline-balance',
  '金融': 'ic:baseline-attach-money',

}

const iconFillColor = {
  algorithms: '#009900',
  tool: '#990088',
  other: '#bb0000',
  course: '#00aaaa',
  backend: '#bb3300',
  game: '#009900',
  lifelong: '#ff0000',
  cs: '#333333',
  '文学': '#009900',
  '科技': '#990088',
  '心理': '#bb0000',
  '历史': '#00aaaa',
  '管理': '#bb3300',
  '法律': '#009900',
  '金融': '#ff0000',
}

const postTagColor = {
  algorithms: '#009900',
  frontend: '#009900',
  interview: '#990088',
  other: '#bb0000',
  lifelong: '#775599',
  cs: '#333333',
}

export const getIconName = (tech?: string) => {
  const lowerCase = tech?.toLowerCase() as string
  return (techIcons as any)?.[`${lowerCase}`] || 'mdi:help-circle'
}

export const getIconFillColor = (tech?: string) => {
  const lowerCase = tech?.toLowerCase() as string
  return (iconFillColor as any)?.[`${lowerCase}`] || '#000000'
}

export const getTagColor = (tag?: string) => {
  const lowerCase = tag?.toLowerCase() as string
  return (postTagColor as any)?.[`${lowerCase}`] || '#000000'
}
