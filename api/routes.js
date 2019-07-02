// business.route.js

const express = require('express');
const router = express.Router();

// controller
const business = require('./controllers/business.js')

router.get('/business', business.index)
router.post('/business/add', business.add)
router.get('/business/edit/:id', business.edit)
router.put('/business/update/:id', business.update)
router.delete('/business/delete/:id', business.delete)

module.exports = router;
