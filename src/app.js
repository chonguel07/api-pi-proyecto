import express from 'express'
import denunciaRoutes from './routes/denuncias.routes.js'
import indexRoutes from './routes/index.routes.js'

const app=express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',denunciaRoutes)

app.use((req,res,next) =>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app;