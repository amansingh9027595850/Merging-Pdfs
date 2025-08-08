const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();


const mergerPdfs = async (p1 , p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2

//   await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
//   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
//   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
//   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

  // Set metadata

  // await merger.setMetadata({
  //   producer: "pdf-merger-js based script",
  //   author: "John Doe",
  //   creator: "John Doe",
  //   title: "My live as John Doe"
  // });
 let time = new Date().getTime();
  await merger.save(`public/${time}.pdf`); //save under given name and reset the internal document
  return time; // return the time for redirecting to the saved file
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
module.exports = {mergerPdfs}