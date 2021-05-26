// const xss = require('xss')

module.exports = async function (ctx) {
    console.log(ctx.path, process.env.VUE_ENV)
    if(ctx.path === '/getNewsList') {
        
        ctx.body = await new Promise(function(resolve){
            setTimeout(() => {
                resolve(require('./mock/news-list1.json'))
            }, 2000)
        }) 
        return;
    }
    if(ctx.path.startsWith('/getNewsDetail')) {
        if(ctx.query.newsId === '6921941954200617479') {
            const data = require('./mock/news-detail-6921941954200617479.json')

            data.data = xss(data.data)

            ctx.body = data
        } else {
            ctx.body = require('./mock/news-detail-a6928669811266601483.json')
        }

        if(ctx.query.newsId == 3333) {
            throw new Error('sssss')
        }

        return;
    }

    
    ctx.body = {
        error: 1,
        data: {},
    }
}