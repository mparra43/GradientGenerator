const { Router } = require('express')
const { check } = require('express-validator');
const {validateParamsOfRequest} = require('../middlewares');

const { getTemplates, postTemplates} = require('../controller/template')

const router = Router();

router.get('/',getTemplates);
router.post('/', [
    check('name', ' The name template is required').not().isEmpty(),
    check('creator', 'The name of the creator is required').not().isEmpty(),
    check('colors', 'the colors are required').not().isEmpty(),
    validateParamsOfRequest
], postTemplates);


module.exports = router;