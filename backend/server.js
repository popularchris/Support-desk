const express=require('express')
const colors=require('colors')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 8000
const { errorHandler }=require('./middleware/errorMiddleware')
const connectDB=require('./config/db.js')

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))