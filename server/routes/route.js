const express = require('express');
const router = express.Router();
const service = require('../service/service');

router.get('/jogadores', async function(req,res){
    const jogadores = await service.getJogadores();
    res.json(jogadores);
});

router.post('/jogadores/create', async function(req,res){
    const data = await service.saveJogadores(req.body)
    res.end();

});

router.post('/update', async function(req,res){
    const data = await service.updateJogadores(req.body)
    res.end();
});

router.post('/delete', async function(req,res){
    const data = await service.deleteJogadores(req.body)
    res.end()
});



module.exports = router;