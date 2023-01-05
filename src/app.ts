import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import usersRoute from "./routes/users.routes"
import loginRoutes from "./routes/login.routes"
import handleError from "./errors/handleError"
import shedeulesRoute from "./routes/schedules.routes"
import propertiesRoutes from "./routes/properties.routes"
import categoriesRoutes from "./routes/categories.routes"

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/login', loginRoutes)
app.use('/schedules', shedeulesRoute)
app.use('/properties',propertiesRoutes)
app.use('/categories',categoriesRoutes)

app.use(handleError)
export default app