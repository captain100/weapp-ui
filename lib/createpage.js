function CreatePage(options) {
    const onLoad = options.onLoad
    // this.data = options.data
    options.onLoad = function() {
        if (onLoad) {
            /* eslint-disable */
            onLoad.apply(this, arguments)
            /* eslint-enable */
        }
    }
    return options
}
CreatePage.prototype.constructor = CreatePage


module.exports = CreatePage