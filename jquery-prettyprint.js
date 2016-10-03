(function ( $ ) {
  $.prettyPrint = function(str, options) {
    if(typeof str !== 'string') return false
    options = options || { case: 'title' }
    var capitalizeFirstLetter = function(i) { return i.charAt(0).toUpperCase() + i.slice(1) }

    var arr
    if(str.indexOf('_') !== -1) arr = str.split('_')
    else if (str.indexOf('-') !== -1) arr = str.split('-')
    else if(/(?=[A-Z])/.test(str)) arr = str.split(/(?=[A-Z])/)
    else return str

    if(options.case === 'upper') return arr.join(' ').toUpperCase()
    else if(options.case === 'sentence') return capitalizeFirstLetter(arr.join(' ').toLowerCase())
    else if(options.case === 'lower') return arr.join(' ').toLowerCase()
    else if(options.case === 'title') return arr.map(capitalizeFirstLetter).join(' ')
    else return false
  }
} (jQuery) )
