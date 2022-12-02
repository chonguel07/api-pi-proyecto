import { pool } from "../db.js"

export const getDenuncias = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM tb_denuncia')
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedBillArray"                             
              }
            }
          }
      }
  */
    res.json(rows)
}

export const getDenuncia = async(req,res) =>{
    const [rows] = await pool.query('SELECT * FROM tb_denuncia WHERE id = ?',[req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Denuncia no encontrada'
    })
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/Bill"
              }
            }
          }
      }
  */
    res.json(rows[0])
}


export const createDenuncias = async (req,res) => {
    const {nombres,edad,dni,telefono,domicilio,tipo,agresor,sexoagresor,genero,telefonoagresor,localizacion,calle,fecha,hechos,estado}=req.body
    const[rows]=await pool.query('INSERT INTO tb_denuncia (nombres,edad,dni,telefono,domicilio,tipo,agresor,sexoagresor,genero,telefonoagresor,localizacion,calle,fecha,hechos,estado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [nombres,edad,dni,telefono,domicilio,tipo,agresor,sexoagresor,genero,telefonoagresor,localizacion,calle,fecha,hechos,estado])
    /* #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }

     #swagger.responses[200] = {
        description: "Operacion exitosa",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }
  */
    res.send({
      id: rows.insertId,
      nombres,
      edad,
      dni,
      telefono,
      domicilio,
      tipo,
      agresor,
      sexoagresor,
      genero,
      telefonoagresor,
      localizacion,
      calle,
      fecha,
      hechos,
      estado,
    })
}

export const updateDenuncias = async(req,res) => {
    const { id } = req.params
    const { nombres,edad,dni,telefono,domicilio,tipo,agresor,sexoagresor,genero,telefonoagresor,localizacion,calle,fecha, hechos, estado } = req.body
    
    const [result] = await pool.query('UPDATE tb_denuncia SET nombres = IFNULL(?,nombres), edad = IFNULL(?,edad), dni = IFNULL(?,dni), telefono = IFNULL(?,telefono), domicilio = IFNULL(?,domicilio), tipo = IFNULL(?,tipo), agresor = IFNULL(?,agresor), sexoagresor = IFNULL(?,sexoagresor), genero = IFNULL(?,genero), telefonoagresor = IFNULL(?,telefonoagresor), localizacion = IFNULL(?,localizacion), calle = IFNULL(?,calle), fecha = IFNULL(?,fecha), hechos = IFNULL(?,hechos), estado = IFNULL(?,estado) WHERE id = ?',
    [nombres, edad, dni, telefono, domicilio, tipo, agresor, sexoagresor, genero, telefonoagresor, localizacion, calle, fecha, hechos, estado, id])

    console.log(result)

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Denuncia no encontrada'
    })
    const [rows] = await pool.query('SELECT * FROM tb_denuncia WHERE id = ?',[id])
    /* #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }

     #swagger.responses[200] = {
        description: "Operacion exitosa",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }
  */
    res.json(rows[0])
}


export const deleteDenuncias = async(req,res) => {
const [result] = await pool.query('DELETE FROM tb_denuncia WHERE id = ?',[req.params.id])

if(result.affectedRows <= 0) return res.status(404).json({
    message:'Denuncia no encontrada'
})
/* #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }

     #swagger.responses[200] = {
        description: "Operacion exitosa",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }
  */
res.sendStatus(204)
}