import { User } from "../models/user.model"

// Less Than ($lt)  
const findUsersYoungerThan = async (age: number) => {
  const users = await User.find({ age: { $lt: age } })
  return users
}
// Less Than or Equal To ($lte) 
const findUsersWithAgeLessThanOrEqual = async (age: number) => {
  const users = await User.find({ age: { $lte: age } })
  return users
}

// Greater Than ($gt): match documents where the value of the specified field is greater than.
const findUsersOlderThan = async (age: number) => {
  const users = await User.find({ age: { $gt: age } })
  return users
}

// Greater Than or Equal To ($gte):match documents where the value of the specified field is greater than or greater than equal to the specified value.
const findUsersWithAgeGreaterThanOrEqual = async (age: number) => {
  const users = await User.find({ age: { $gte: age } })
  return users
}

// In ($in): used to match documents where the value of the specified field matches any of the values specified in an array.
const findUsersByAges = async (ages: number[]) => {
  const users = await User.find({ age: { $in: ages } })
  return users
}

const findUsersByEmails = async (emails: string[]) => {
  const users = await User.find({ email: { $in: emails } })
  return users
}

// Not Equal To ($ne): match documents where the value of the specified field is not equal to the specified value.
const findUsersNotWithEmail = async (email: string) => {
  const users = await User.find({ email: { $ne: email } })
  return users
}

// Not In ($nin):match documents where the value of the specified field does not match any of the values specified in an array.
const findUsersWithoutAges = async (ages: number[]) => {
  const users = await User.find({ age: { $nin: ages } })
  return users
}

// Modulo ($mod): match documents where the value of the specified field is equal to the specified value modulo the divisor.
const findUsersWithAgeMod = async (divisor: number, remainder: number) => {
  const users = await User.find({ age: { $mod: [divisor, remainder] } })
  return users
}

// Exists ($exists): match documents where the specified field exists or does not exist.
const findUsersWithField = async (field: string) => {
  const users = await User.find({ [field]: { $exists: true } })
  return users
}

const findUsersWithoutField = async (field: string) => {
  const users = await User.find({ [field]: { $exists: false } })
  return users
}

// Text: search for documents that match a specified text.
const findUsersWithText = async (text: string) => {
  const users = await User.find({ $text: { $search: text } })
  return users
}