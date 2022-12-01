const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/denuncias.routes.js"];

const doc = {
    info: {
      title: 'Denuncia API',
      description: 'Proyecto Denuncia API',
    },
    servers: [
      {
        url: "https://api-pi-proyecto-production.up.railway.app/api"
      }
    ],
    components: {
      "@schemas": {
        Bill: {
          type: "object",
          properties: {
            id: {
                type: "int",
                description: "tipo de la denuncia",
                example: 6
              },
            nombres: {
              type: "string",
              description: "nombre",
              example: "Alberta Fernandez"
            },
            edad: {
              type: "string",
              description: "edad",
              example: "20"
            },
            dni: {
              type: "string",
              description: "dni de la victima",
              example: "87654321"
            },
            telefono: {
              type: "string",
              description: "telefono de la victima",
              example: "987654321"
            },
            domicilio: {
              type: "string",
              description: "domicilio de la victima",
              example: "Mz.B0.Lt 00"
            },      
            tipo: {
              type: "string",
              description: "tipo de denuncia",
              example: "Fisico"
            },
            agresor: {
              type: "string",
              description: "nombre del agresor",
              example: "Jose"
            },
            sexoagresor: {
              type: "string",
              description: "genero agresor",
              example: "Masculino"
            },
            genero: {
              type: "string",
              description: "genero",
              example: "Femenino"
            },
            telefonoagresor: {
              type: "string",
              description: "telefono del agresor",
              example: "966666666"
            }, 
            localizacion: {
              type: "string",
              description: "lugar de los hechos",
              example: "SJL"
            }, 
            calle: {
              type: "string",
              description: "calle",
              example: "Calle Durazno"
            }, 
            fecha: {
              type: "datetime",
              description: "fecha",
              example: "2022-10-10"
            },
            hechos: {
              type: "string",
              description: "descripcion de los hechos",
              example: "Ocurrio cuando estaba..."
            }, 
          },
          example: {
            id: 6,
            nombres: "Alberta Fernandez",
            edad: "20",
            dni: "87654321",
            telefono: "987654321",
            domicilio: "Mz.B0.Lt 00",
            tipo: "Fisico",
            agresor: "Jose",
            sexoagresor: "Masculino",
            genero: "Femenino",
            telefonoagresor: "966666666",
            localizacion: "SJL",
            calle: "Calle Durazno",
            fecha: "2022-10-10",
            hechos: "Ocurrio cuando estaba..."
          }
        }
      }
    },
    definitions: {
      myReferencedBillArray: [{ $ref: "#/definitions/Bill" }]
    }
  };
  
  swaggerAutogen(outputFile, endpointsFiles, doc);