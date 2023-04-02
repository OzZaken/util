import { User } from "../models/user.model"

const findUsersWithEmailPattern = async (emailPattern: RegExp) => {
  const users = await User.find({ email: { $regex: emailPattern } })
  return users
}

// end with ".com"
const findUsersWithComEmails = async () => {
  const users = await User.find({ email: { $regex: /\.com$/ } })
  return users
}

const findUsersWithEmailContainingWord = async (word: string) => {
  const users = await User.find({ email: { $regex: new RegExp(word, "i") } })
  return users
}

// Regex ($regex): match documents where the value of the specified field matches the specified regular expression.
const findUsersWithNameRegex = async (regex: RegExp) => {
  const users = await User.find({ name: { $regex: regex } })
  return users
}