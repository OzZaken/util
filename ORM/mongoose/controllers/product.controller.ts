import { Product, IProduct } from '../models/product.model'

const createProduct = async (product: IProduct): Promise<IProduct> => {
    const newProduct = new Product(product)
    return await newProduct.save()
}

const readProduct = async (id: string): Promise<IProduct | null> => {
    return await Product.findById(id).exec()
}

const updateProduct = async (id: string, product: Partial<IProduct>): Promise<IProduct | null> => {
    return await Product.findByIdAndUpdate(id, product, { new: true }).exec()
}

const deleteProduct = async (id: string): Promise<void> => {
    await Product.findByIdAndDelete(id).exec()
}

export {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
}
