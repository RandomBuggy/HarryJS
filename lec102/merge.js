const PDFMerger = require('pdf-merger-js');

let merger_obj = new PDFMerger();

const merger = async (f1, f2) => {
    let timeStamp = new Date().getTime()
    await merger_obj.add(f1)
    await merger_obj.add(f2)
    await merger_obj.save(`./public/${timeStamp}.pdf`)
    return timeStamp
}

module.exports = merger
