var sass = require('node-sass')
var fs = require('fs')



const userStyleTemplate = x => `
/* ==UserStyle==
@name         Redmine Dark
@namespace    ryan28561
@version      1.0.0
@author       ryan28561
@updateURL    https://raw.githubusercontent.com/ryan28561/styles/master/canvas/output.user.css?token=AJEVBO655CNR5QS3TV2ZPVC7LJGKK
@advanced color primary-color "Primary color" #360297
==/UserStyle== */
@-moz-document domain("usu.instructure.edu") {
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
