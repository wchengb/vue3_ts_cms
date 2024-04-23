// 1.
// export const BASE_URL = 'http://codercba.com:8000'
// export const TIME_OUT = 10000

// 2.
// console.log(import.meta.env.DEV);  // 是否开发环境
// console.log(import.meta.env.PROD);  // 是否生产环境
// console.log(import.meta.env.SSR);  //  是否是服务器端渲染(server side render)


let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://123.207.32.32:5000'
} else {
  BASE_URL = 'http://codercba.com:5000'
}

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_NAME);


export const TIME_OUT = 10000
export { BASE_URL }

