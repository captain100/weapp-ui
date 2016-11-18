App({
    onLaunch: function() { 
    // Do something initial when launch.
    },
    onShow: function() {
    // Do something when show.
    },
    onHide: function() {
    // Do something when hide.
    },
    toIndex: function() {
        wx.redirectTo({
            url: 'pages/index/index'
        })
    },
    globalData: 'I am global data'
})