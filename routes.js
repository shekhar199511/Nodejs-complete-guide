const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url=='/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /> <button type="submit">Submit</button></form></body>')
        return res.end()
    } 
    if(url=='/message' && method=="POST"){
        const body = []

        req.on('data', (chunks)=>{
            body.push(chunks)
        })

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString().split("=")[1]
            fs.writeFileSync('message.txt', parsedBody)
        })

        
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<body>Hi</body>')
    res.end()
}

module.exports = requestHandler