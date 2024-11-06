// const http = require("http")
// const myServer = http.createServer((req, res) => {
//     if (req.url === "/" && req.method === ("GET")) {
//         res.end("Home route")

//     } else if (req.url == "/user" && req.method == ("POST")) {
//         req.on("data",(chunk)=> {
//             let { name, email } = JSON.parse(chunk)
//             res.end(name)

//        })
//     }
//     else {
//     }
// })
// myServer.listen(3000,()=> {
//     console.log("Server is running")
// })

// ========== buffer data =============//
// const fs = require("fs")
// fs.readFile("newfile.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
// const fs = require("fs")
// fs.readFile("newfile.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data.toString())
//     }
// })

// let buffer = Buffer.from("hello dunia")
// console.log(buffer.toString())

// const fs = require("fs")
// fs.readFile("newfile.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// const fs = require("fs")
// fs.readFile("newfile.txt", (err, data) => {
//     if (err) {
//         console.log(err)

//     } else {
//         console.log(data.toString())
//     }
// })

// let buffer = Buffer.from("hello dunia")
// console.log(buffer.toString())

// ========stream=======//

// const fs = require("fs")

// const readfileStream = fs.createReadStream("newfile.txt", "utf-8")
// let writeFileStream = fs.createWriteStream("output.txt", "utf-8")

// readfileStream.pipe(writeFileStream)\

// const fs = require("fs")

// const readfileStream = fs.createReadStream("newfile.txt", "utf-8")
// const writeFileStream = fs.createWriteStream("about.txt")
// readfileStream.pipe(writeFileStream)

// const fs = require("fs")
// const readfileStream = fs.createReadStream("newfile.txt", "utf-8")
// const writeFileStream = fs.createWriteStream("about.txt", "utf-8")
// readfileStream.pipe(writeFileStream)

// =============Events==================

// const express = require("express")
// const app = express()
// const EventEmitter = require("events")
// const event = new EventEmitter()
// const port = 8000

// app.get("/", (req, res) => {
//     res.send("home route")
// })
// app.post("/user", (req, res) => {
//     res.send("user route")
// })
// app.listen(port, () => {
//     console.log("Server is running")
// })

// const express = require("express")
// const app = express()
// const port = 8000
// const EventEmitter = require("events")
// const event = new EventEmitter()
// event.on("visit", () => {
//     console.log("visited user 1")
// })
// app.get("/", (req, res) => {
//     res.send("home route")
//     event.emit("visit")
// })
// app.post("/user", (req, res) => {
//     res.send("user route")
// })
// app.listen(port, () => {
//     console.log("Server is running")
// })
// const express = require("express")
// const app = express()
// const port = 8000
// const EventEmitter = require("events")
// const event = new EventEmitter()
// let count = 0

// event.on("visit", () => {
//     count++
//     console.log(`visited user ${count}`)
// })
// app.get("/", (req, res) => {
//     res.send("home route")
//     event.emit("visit")
// })
// app.listen(port, () => {
//     console.log("Server is running")
// })

// const express = require("express")
// const app = express()
// const port = 8000
// const EventEmitter = require("events")
// const event = new EventEmitter()
// let count = 0
// event.on("visit", () => {
//     count++
//     console.log(`visited person ${count}` )
// })
// app.get("/", (req, res) => {
//     res.send("home route")
//     event.emit("visit")
// })
// app.listen(port, () => {
//     console.log("Server is running")
// })

// const express = require("express");
// const app = express();
// const port = 8000;
// const EventEmitter = require("events")
// const event = new EventEmitter()
// const count = 0;
// event.on("visit", () => {
//     count++
//     console.log(`visited person ${count}`)
// })
// app.get("/", (req, res) => {
//   res.send("home route");
//   event.emit("visit")
// });
// app.listen(port, () => {
//   console.log("Server is running");
// });



//============== dynamic routing &query ========//
const express = require("express");
const app = express();
const port = 8000;
 app.get("/", (req, res) => {
  res.send("home route");

 });
// app.get("/user/:id", (req, res) => {
//     console.log(req.params.id)
//     res.send(`user route${req.params.id}`);
// })
// app.get("/user", (req, res) => {
  
//     let {name, id}= req.query
//     res.send({
//         username: name,
//         userid:id
//    })
// })
app.get("/user/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`user route is ${req.params.id}`)
})

app.get("/user", (req, res) => {
    let {name, id, age}=req.query
    res.send({
        username: name,
        userid: id,
        userage: age
    })
})
app.use((req,res) => {
    res.status(404).end("404 not found")
})
  app.listen(port, () => {
  console.log("Server is running");
});
