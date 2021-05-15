import Order from '../models/Order.js'
// @desc Get all orders
// @route /api/v1/transactions
// @access PUBLIC
const getTransactions = async (req, res, next) => {
    try {
        const orders = await Order.find();

        return res.json({
            success:true,
            count: orders.length,
            data: orders
        })
    } catch(err) {
        return res.sendStatus(500).json({
            success:false,
            error:'Server error'
        })
    }
}

// @desc Add order
// @route /api/v1/transactions
// @access PUBLIC
const addTransaction = async (req, res, next) => {
    try{
        const { name, amount } = req.body

        const order = await Order.create(req.body)

        return res.status(201).json({
            succes:true,
            data:{name, amount}
        })
    } catch(err) {
        // console.log(err) if we donst send a response api hangs
        if (err.name== 'ValidationError'){
            // we got this by using a list in schema
            const messages = Object.values(err.errors).map(val=>val.message)

            return res.status(400).json({ //client error
                success:false,
                error: messages
            })
        }else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'            })
        }
    }  
}


// @desc Delete order
// @route /api/v1/transactions/:id
// @access PUBLIC
const deleteTransaction =  async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)

        if(!order) {
            return res.status(404).json({ //Not found error
                success:false,
                error: 'No order with id found'
            })
        }

        await order.remove()

        return res.status(200).json({
            success:true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'            
        })
    }
}   


export {getTransactions, addTransaction, deleteTransaction}