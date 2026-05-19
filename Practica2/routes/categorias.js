const express = require('express');
const router = express.Router();
const db = require('../db');
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM categorias';
    db.query(sql, (err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json(result);
    });
});
// POST NUEVA CATEGORIA
router.post('/', (req, res) => {
    const { nombre, descripcion } = req.body;
    const sql = `
        INSERT INTO categorias(nombre, descripcion)
        VALUES (?, ?)
    `;
    db.query(sql, [nombre, descripcion], (err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json({
            mensaje: 'Categoría registrada',
            result
        });
    });
});
// GET POR ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = `
        SELECT * FROM categorias
        WHERE id = ?
    `;
    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json(result);
    });
});
// PATCH ACTUALIZAR
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    const sql = `
        UPDATE categorias
        SET nombre = ?, descripcion = ?
        WHERE id = ?
    `;
    db.query(sql, [nombre, descripcion, id], (err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json({
            mensaje: 'Categoría actualizada'
        });
    });
});
// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = `
        DELETE FROM categorias
        WHERE id = ?
    `;
    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(500).json(err);
        }
        res.json({
            mensaje: 'Categoría eliminada'
        });
    });
});
module.exports = router;