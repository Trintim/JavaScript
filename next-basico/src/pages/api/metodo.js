export default (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({
            /* metodo: req.method */
            name: "Trintim"
        })
    } else {
        res.status(200).json({
            name: "Victor"
        })
    }

}