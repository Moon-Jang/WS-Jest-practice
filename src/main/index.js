const express = require("express")
const app = express()
const port = process.env.NODE_ENV === "test" ? 18080 : 8080

app.get("/test", (req, res) => {
    res.status(200).json({ data: "test" })
})

app.listen(port, () => console.log(`listen at http://localhost:${port}`))

module.exports = app
