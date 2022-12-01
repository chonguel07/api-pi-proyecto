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
            tipo: {
              type: "string",
              description: "tipo de la denuncia",
              example: "6"
            },
            nombre: {
              type: "string",
              description: "nombre de denuncia",
              example: "fisica"
            },
            dni: {
              type: "string",
              description: "dni de la victima",
              example: "Maria Jose"
            },
            telefono: {
              type: "string",
              description: "telefono de la victima",
              example: "76543210"
            },
                     
          },
          example: {
            id: 6,
            tipo: "fisica",
            nombre: "Maria Jose",
            dni: "76543210",
            telefono: "987654321"
          }
        }
      }
    },
    definitions: {
      myReferencedBillArray: [{ $ref: "#/definitions/Bill" }]
    }
  };
  
  swaggerAutogen(outputFile, endpointsFiles, doc);