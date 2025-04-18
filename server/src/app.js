import express from "express"
import { config } from "dotenv"
import userRouter from "./modules/user/user.router.js"
import errorHandler from "./middleware/error-handling.middleware.js"
import categoryRouter from "./modules/category/category.router.js"
import routes from "./routes/all.router.js"
config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/sharh", userRouter)
// app.use("/sharh", categoryRouter)

app.use('/sharh', routes);

app.use(errorHandler)

app.all("/*splat", (req, res) => {
    res.status(404).send({
        message: `${req.url} urli topilmadi`
    })
})

export default app