import { IUser,User } from './models/user.model'
import { createUser, readUser, updateUser, deleteUser } from './controllers/user.controller'

// ------------------------------ CREATE ------------------------------ 

// Create a new user
const user = createUser({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password'
})

user.then((user: IUser) => {
  console.log(user)
}).catch((err: Error) => {
  console.error(err)
})

// Create a new order
const order = createOrder({
  user: 'user_id',
  service: 'Some service',
  price: 100.0,
})

order.then((order: IOrder) => {
  console.log(order)
}).catch((err: Error) => {
  console.error(err)
})

// ------------------------------ Read ------------------------------ 
// Find all users
readUser().then((users: IUser[]) => {
  console.log(users)
}).catch((err: Error) => {
  console.error(err)
})

// Find all orders
readOrder().then((orders: IOrder[]) => {
  console.log(orders)
}).catch((err: Error) => {
  console.error(err)
})

// ------------------------------ Update ------------------------------ 
// Update a user
updateUser('user_id', { name: 'Jane Doe' }).then(() => {
  console.log('User updated successfully')
}).catch((err: Error) => {
  console.error(err)
})

// Update an order
updateOrder('order_id', { price: 150.0 }).then(() => {
  console.log('Order updated successfully')
}).catch((err: Error) => {
  console.error(err)
})

// ------------------------------ Delete ------------------------------ 
// Delete a user
deleteUser('user_id').then(() => {
  console.log('User deleted successfully')
}).catch((err: Error) => {
  console.error(err)
})

// Delete an order
deleteOrder('order_id').then(() => {
  console.log('Order deleted successfully')
}).catch((err: Error) => {
  console.error(err)
})