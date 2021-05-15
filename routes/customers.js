import express from 'express'
const router = express.Router()
import {getTransactions, addTransaction, deleteTransaction} from '../controllers/orders.js'

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction)

export default router