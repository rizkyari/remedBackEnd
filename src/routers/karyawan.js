const router = require('express').Router()
const conn = require('../connection/connection')

//TAMBAH KARYAWANs
router.post('/addkaryawan',async (req,res)=>{
    var sql = `INSERT INTO karyawan SET ?;`
    
    var sql2 = `SELECT * FROM karyawan`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage) // Error pada post data

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err) // Error pada select data

            res.send(result)
        })
    })
})

//EDIT KARYAWAN
router.patch('/karyawan/:karId', (req, res) => { 
    const sql = `UPDATE karyawan SET ? WHERE id = ?`
    
    const data = [req.body, req.params.karId]

    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.mess)

        res.send(result)
    })
})

//DELETE MOVIE
router.delete('/karyawan/delete', (req, res) => { 
    const sql = `DELETE FROM karyawan WHERE id = ?`
    const data = req.body.id

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//VIEW ALL MOVIES
router.get('/karyawan/semuakaryawan', (req, res) => { 
    const sql = `SELECT * FROM karyawan`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.message) // Error pada query SQL

        const movies = result // Result berupa array of object

        if(!movies) return res.send("Movie not found") // Movie tidak ditemukan

        res.send({
            movies
        })
    })
})

module.exports = router