var sass = require('node-sass')
var fs = require('fs')



const userStyleTemplate = x => `
/* ==UserStyle==
@name         Redmine Dark
@namespace    ryan28561
@version      1.0.0
@author       ryan28561
@advanced color primary-color "Primary color" #360297
==/UserStyle== */
@-moz-document domain("redmine.lightningkite.com") {
${x}
}
`


sass.render({
  file: 'src/main.scss',
  outputStyle: 'nested',
  outFile: 'output.css',
}, (err, result) => {
  if (err) {
    console.log(`ERROR: ${err}`)
  } else {
    fs.writeFile('output.user.css', userStyleTemplate(result.css), (err) => {
      if (err) {
        console.log(`Error on file write: ${err}`)
      }
    })
    console.log(result)
  }
})
