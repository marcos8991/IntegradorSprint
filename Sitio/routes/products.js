var express = require('express');
var router = express.Router(); 


const { cart, detail , admin ,store, add, edit,update,destroy, filter} = require('../controllers/productsController');

const adminUserCheck = require('../middlewares/adminUserCheck')

//multer
const upload = require('../middlewares/multerImageProduct')

//validaciones
const productValidator = require('../validations/productValidator')


router.get('/productCart',cart);

router.get('/productDetail/:id', detail);
router.get('/admin',adminUserCheck, admin);

//añadir un producto
router.get('/add',adminUserCheck,add);
router.post('/add',upload.single('image'),productValidator, store)

//editar un producto
router.get('/edit/:id',adminUserCheck,edit);
router.put('/update/:id',upload.single('image'),productValidator,update)

//borrar un producto
router.delete('/destroy/:id',destroy)

//filtro
router.get('/', filter)


module.exports = router;