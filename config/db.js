import { createPool } from 'mysql2/promise'

//https://app.planetscale.com/william310391/productsdb/main


    
    


// const pool = createPool({
//     host: "us-east.connect.psdb.cloud",
//     user: "gqmat4q0ies7an6jawm9",
//     password: "pscale_pw_TZRptqHR8tR8dOctQphUyTF6fXHZVKwXki3T9nwbxFZ",
//     database: "productsdb",
//     port: 3306,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   });

// export { pool };


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'tutorial.2022',
    port: 23306,
    database: 'productsdb'
})

export { pool };