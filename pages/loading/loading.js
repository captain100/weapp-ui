var app = getApp()
console.log(app)
App({
    onLoad () {
        wx.showToast({
            title: '加载页面。。。',
            icon: 'loading',
            duration: 9000,
            success: () => {
                app.toIndex()
            }
        })    
        
    }
})