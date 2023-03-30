import { User } from "../models/user.model"

// $all: matches arrays that contain all elements specified in the query.
const findUsersWithFriendsIn = async (friends: string[]) => {
  const users = await User.find({ friends: { $all: friends } })
  return users
}
const usersWithFriendsIn = await findUsersWithFriendsIn(["John", "Jane"])

// $elemMatch: matches documents that contain an array field with at least one element that matches all the specified query criteria.
const findUsersWithFriendNamedAndAge = async (name: string, age: number) => {
  const users = await User.find({
    friends: {
      $elemMatch: { // like Array.some() but more powerful as it because it allows you to specify multiple conditions that must all be satisfied by the same array element.
        $and: [
          { $eq: ["$name", name] },
          { $gte: ["$age", age] }
        ]
      }
    }
  })
  return users
}

// $size: matches documents that contain an array field with a specific number of elements.
const findUsersWithNumFriends = async (numFriends: number) => {
  const users = await User.find({ friends: { $size: numFriends } })
  return users
}

// $in: matches documents where the value of a field equals any value in the specified array.
const findUsersInStates = async (states: string[]) => {
  const users = await User.find({ state: { $in: states } })
  return users
}
const usersInStates = await findUsersInStates(["California", "New York"])

// $nin: matches documents where the value of a field does not equal any value in the specified array.
const findUsersNotInStates = async (states: string[]) => {
  const users = await User.find({ state: { $nin: states } })
  return users
}
const usersNotInStates = await findUsersNotInStates(["California", "New York"])

// $slice: limits the number of elements in an array field that are returned in a query result.
const findUsersWithTwoFriends = async () => {
  const users = await User.find({}, { friends: { $slice: 2 } })
  return users
}
const usersWithTwoFriends = await findUsersWithTwoFriends()

// $addToSet: adds elements to an array field only if they do not already exist in the array.
const addFriendToUser = async (userId: string, friend: string) => {
  const user = await User.findByIdAndUpdate(userId, { $addToSet: { friends: friend } }, { new: true })
  return user
}
const updatedUser = await addFriendToUser("123", "Jane")
