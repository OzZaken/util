import { User } from "../models/user.model"

// $or: 
const findUsersByAgeOrEmail = async (age: number, emailPattern: RegExp) => {
  const users = await User.find({
    $or: [{ age: { $gte: age } }, { email: { $regex: emailPattern } }],
  })
  return users
}

// $and: : This operator is used to combine multiple conditions and returns documents that match all the conditions.
const findUsersWithAgeBetween = async (startAge: number, endAge: number) => {
  const users = await User.find({
    $and: [{ age: { $gte: startAge } }, { age: { $lte: endAge } }]
  })
  return users
}

const findUsersWithAgeAndEmail = async (minAge: number, maxAge: number, emailPattern: RegExp) => {
  const users = await User.find({
    $and: [
      { age: { $gte: minAge } },
      { age: { $lte: maxAge } },
      { email: { $regex: emailPattern } },
    ],
  })
  return users
}
const usersWithAgeAndEmail = await findUsersWithAgeAndEmail(16, 26, /sdsd/)

const findUsersNotNamed = async (...names: string[]) => {
  const users = await User.find({
    $and: names.map((name) => ({ name: { $ne: name } }))
  })
  return users
}
const usersNotNamed = await findUsersNotNamed("John", "Jane", "Bob")