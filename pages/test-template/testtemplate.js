Page({
    data: {
        list: [
            {type: 'javascript高级程序设计'},
            {type: 'javascript标准参考教程'},
            {type: 'javascript400示例'},
            {type: 'docker的实战开发'},
            {type: '微微一笑很倾城'}
        ],
        clickType: null
    },
    onLoad:function() {
        console.log('加载')
    },
    click: function(e){
        console.log(e.currentTarget.dataset.type)
        this.setData({
            clickType: e.currentTarget.dataset.type
        })
    }
})