import { Order, IOrder } from '../models/order.model'

const order: IOrder = new Order({
  service: 'Cleaning',
  customer: 'John Doe',
  price: 50,
})

order.save()
  .then((savedOrder: IOrder) => {
    console.log(`Saved order: ${savedOrder}`);
  })
  .catch((error: any) => {
    console.error(`Error saving order: ${error}`);
  });

const createOrder = async (order: IOrder): Promise<IOrder> => {
    const newOrder = new Order(order)
    return await newOrder.save()
}

const readOrder = async (id: string): Promise<IOrder | null> => {
    return await Order.findById(id).exec()
}

const updateOrder = async (id: string, order: Partial<IOrder>): Promise<IOrder | null> => {
    return await Order.findByIdAndUpdate(id, order, { new: true }).exec()
}

const deleteOrder = async (id: string): Promise<void> => {
    await Order.findByIdAndDelete(id).exec()
}

export {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder,
}