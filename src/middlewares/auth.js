let userAuth = (req,res,next) => {
    let email = "user@gmail.com"
    let password = "user123"
    let adminAuthorised = (email === "user@gmail.com" && password === "user123")
    if(!adminAuthorised){
        res.status(401).send("Wrong email or password")
    } else {
        next()
    }
}

let adminAuth = (req,res,next) => {
    let token = "xyz"
    let adminAuthorised = (token==="xyz")
    if(!adminAuthorised){
        res.status(401).send("Admin is not authorised")
    } else {
        next()
    }
}

module.exports = {
    userAuth,
    adminAuth
}
