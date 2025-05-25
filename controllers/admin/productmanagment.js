const Product = require("../../models/Product")

exports.createProduct = async (req, res) => {
    const { name, price, categoryId, userId } = req.body
    try {
        const product = new Product(
            {
                name,
                price,
                categoryId,
                sellerId: userId
            }
        )
        await product.save()
        return res.status(200).json({
            success: true, message: 'Product created', data: product
        })
    } catch (err) {
        return res.status(500).json({
            success: false, message: "Server error"
        })
    }
}

exports.getProducts = async (req, res) => {
    try{
        const products = await Product.find()
            .populate("categoryId", "name") // 1. key, 2. project
            .populate("sellerId", "firstName email")

        return res.status(200).json({
            success: true, message: "Data fetched", data: products
        })    
    }catch(err){
        return res.status(500).json({
            success: false, message: "Server error"
        })
    }
}