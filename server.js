
// require ou import yaani lezme texporti hajet bch timportihom fi haja okhra 
// hajty bhaja lezem naaytlha 
//wela nheb naayet module wela package wela hajet par defaut mawjoudin fi node 

//

// import http from 'http';
// // mawjoud par defaut fi node 
// //hne bch nwali nkhdem ken bl les import export maadesh f require  fi jsonnn 

// /// request cest la demande client  et response 
// const server = http.createServer((req,res)=> {  
//     res.end("hello chaima")
// })


// server.listen(process.env.PORT || 5000) // ken endek variable denvirnmmet Port ikhdem sinon ikhdem le 5000 yetaalhom devops bch projet ykhdem win nheb





import http from 'http';

import app from "./app.js"
const server = http.createServer(app)
const Port = process.env.PORT || 5000

const PORT = 5000; // You can change the port number if needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
