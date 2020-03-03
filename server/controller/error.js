const notFound = (req,res)=>{
    res.status(404).send("<h1>404!!  PAGE NOT FOUND</h1>")
}

const serverErr = (req,res)=>{
    res.status(500).send("<h1>500!!  SERVER ERROR</h1>")
}

module.exports = {notFound ,serverErr}