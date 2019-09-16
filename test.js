const http = require("http")
const server = http.createServer((req,res)=>
{
    res.setHeader("Content-Type", "application/json")
    if(req.url === '/user')
    {
        res.end("{'name':'abc' ,'rollno':'123'}")
    }
    else if(req.url === '/order')
    {
        res.end("{'item_name':'cde','quantity':'3'}")
    }
})
server.listen(3000)
