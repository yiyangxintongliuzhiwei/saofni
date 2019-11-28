const Utils = {
    initRem: function() {
        this._fixRem()
        window.addEventListener('resize', this._fixRem, false)
    },
    _fixRem: function() {
        let windowWidth =
            document.documentElement.clientWidth ||
            window.innerWidth ||
            document.body.clientWidth
        windowWidth = windowWidth > 800 ? 800 : windowWidth
        window.rootSize = 25 * (windowWidth / 375)
        let htmlNode = document.getElementsByTagName('html')[0]
        htmlNode.style.fontSize = window.rootSize + 'px'
    },
    
  
}

export default Utils
