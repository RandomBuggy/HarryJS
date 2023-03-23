const fs = require('fs')
const path = require('path')

const replaceThis = "harry"
const replaceWith = "john"
const directory = __dirname
const preview = true

try {
    fs.readdir("data", (err, data) => {
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            let oldFile = path.join(directory,item)
            let newFile = path.join(directory, item.replaceAll(replaceThis, replaceWith))
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("rename successful")
                })
            }
            else {
                if (oldFile !== newFile) {
                    console.log(`${oldFile} will be replace to ${newFile}`)
                }
            }
        }
    })
}

catch (err) {
    console.log(err)
}
