const path = require('path')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const KoaMount = require('koa-mount')
const ApiRequest = require('./api')
// const { isProd } = require('../utils/env')
// const router = isProd ? require('./router.prod') : require('./router.dev')

const app = new Koa()


const port = process.env.PORT || 3000

// ajax
app.use(KoaMount('/api', ApiRequest))

// 静态资源
app.use(KoaMount('/assets', KoaStatic(path.resolve(__dirname, '../dist/assets'))))

// 页面路由
// app.use(router.routes())



app.listen(port, () => {
    console.log(`server started at port: ${port}`)
})