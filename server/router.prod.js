const VueServerRenderer = require('vue-server-renderer')
const KoaRouter = require('koa-router')
const fs = require('fs')
const path = require('path')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')


const router = new KoaRouter()


const template = fs.readFileSync(path.resolve(__dirname, '../public/server.html'), 'utf-8')

router.get('/(.*)', async ctx => {
    ctx.body = await new Promise((resolve, reject) => {

        const render = VueServerRenderer.createBundleRenderer(serverBundle, {
            runInNewContext: false,
            template,
            clientManifest,
        })

        const context = {url: ctx.path}
        render.renderToString(context, (err, html) => {
            if(err) {
                reject(err)
            }
            resolve(html)
        })
    })
})

module.exports = router