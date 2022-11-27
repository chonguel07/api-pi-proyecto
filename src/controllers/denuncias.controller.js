import { pool } from "../db.js"

export const getDenuncias = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM denuncia')
    res.json(rows)
}

export const getDenuncia = async(req,res) =>{
    const [rows] = await pool.query('SELECT * FROM denuncia WHERE id = ?',[req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Denuncia no encontrada'
    })

    res.json(rows[0])
}


export const createDenuncias = async (req,res) => {
    const {tipo,nombre,dni,telefono}=req.body
    const[rows]=await pool.query('INSERT INTO denuncia (tipo,nombre,dni,telefono) VALUES (?,?,?,?)',
    [tipo,nombre,dni,telefono])
    
    res.send({
        id: rows.insertId,
        tipo,
        nombre,
        dni,
        telefono,
    })
}

export const updateDenuncias = async(req,res) => {
    const { id } = req.params
    const { tipo, nombre, dni, telefono } = req.body
    
    const [result] = await pool.query('UPDATE denuncia SET tipo = IFNULL(?,tipo), nombre = IFNULL(?,nombre), dni = IFNULL(?,dni), telefono = IFNULL(?,telefono) WHERE id = ?',
    [tipo, nombre, dni, telefono, id])

    console.log(result)

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Denuncia no encontrada'
    })
    const [rows] = await pool.query('SELECT * FROM denuncia WHERE id = ?',[id])

    res.json(rows[0])
}


export const deleteDenuncias = async(req,res) => {
const [result] = await pool.query('DELETE FROM denuncia WHERE id = ?',[req.params.id])

if(result.affectedRows <= 0) return res.status(404).json({
    message:'Denuncia no encontrada'
})

res.sendStatus(204)
}