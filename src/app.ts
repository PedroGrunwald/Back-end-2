import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import usersRoute from "./routes/users.route"
import loginRoutes from "./routes/login.routes"
import handleError from "./errors/handleError"

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/login', loginRoutes)

app.use(handleError)
export default app