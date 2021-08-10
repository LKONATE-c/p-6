const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/sauces');
const auth = require('../middlleware/auth');
const multer = require('../middlleware/multer-config');


router.post('/', auth, multer, saucesCtrl.createThing);    
router.put('/:id', auth, multer, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);
router.get('/:id', auth, saucesCtrl.getOneThing); 
router.get('/', auth, saucesCtrl.getAllThings);



module.exports = router;