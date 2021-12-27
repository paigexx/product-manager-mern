const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.post("/api/product/create", ProductController.createProduct)
    app.get("/api/product", ProductController.allProduct)
    app.get("/api/product/:_id", ProductController.oneProduct)
    app.put("/api/product/update/:_id", ProductController.updateProduct)
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct)
}