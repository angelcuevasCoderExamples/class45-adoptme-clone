const { Router} = require('express');
const { showHome, showPetList } = require('../controllers/views.controller');


const router = Router();

router.get('/', showHome);
router.get('/pets', showPetList)

module.exports = {
    viewsRouter: router
};