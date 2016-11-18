const createpage = require('../../lib/createpage')

const pageData = new createpage({
    data: {
        list: ['test1', 'test2', 'test3']
    },
    onLoad: function () {
        console.log('加载', wx)
    }
})
console.log(pageData)

Page(pageData)