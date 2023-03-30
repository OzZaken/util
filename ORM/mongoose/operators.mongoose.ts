import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: string
  age: number
  email: string
  friends: string[]
}

const UserSchema: Schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  friends: [String],
})

const UserModel = mongoose.model<IUser>('User', UserSchema)

// ------------------------------ Comparison operators ------------------------------ 

// Less Than ($lt)  
const findUsersYoungerThan = async (age: number) => {
  const users = await UserModel.find({ age: { $lt: age } })
  return users
}
// Less Than or Equal To ($lte) 
const findUsersWithAgeLessThanOrEqual = async (age: number) => {
  const users = await UserModel.find({ age: { $lte: age } })
  return users
}

// Greater Than ($gt): match documents where the value of the specified field is greater than.
const findUsersOlderThan = async (age: number) => {
  const users = await UserModel.find({ age: { $gt: age } })
  return users
}

// Greater Than or Equal To ($gte):match documents where the value of the specified field is greater than or greater than equal to the specified value.
const findUsersWithAgeGreaterThanOrEqual = async (age: number) => {
  const users = await UserModel.find({ age: { $gte: age } })
  return users
}

// In ($in): used to match documents where the value of the specified field matches any of the values specified in an array.
const findUsersByAges = async (ages: number[]) => {
  const users = await UserModel.find({ age: { $in: ages } })
  return users
}

const findUsersByEmails = async (emails: string[]) => {
  const users = await UserModel.find({ email: { $in: emails } })
  return users
}

// Not Equal To ($ne): match documents where the value of the specified field is not equal to the specified value.
const findUsersNotWithEmail = async (email: string) => {
  const users = await UserModel.find({ email: { $ne: email } })
  return users
}

// Not In ($nin):match documents where the value of the specified field does not match any of the values specified in an array.
const findUsersWithoutAges = async (ages: number[]) => {
  const users = await UserModel.find({ age: { $nin: ages } })
  return users
}

// ------------------------------ Array operators ------------------------------ 

// $all: matches arrays that contain all elements specified in the query.
const findUsersWithFriendsIn = async (friends: string[]) => {
  const users = await UserModel.find({ friends: { $all: friends } })
  return users
}
const usersWithFriendsIn = await findUsersWithFriendsIn(["John", "Jane"])

// $elemMatch: matches documents that contain an array field with at least one element that matches all the specified query criteria.
const findUsersWithFriendNamedAndAge = async (name: string, age: number) => {
  const users = await UserModel.find({
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
const usersWithFriendNamedAndAge = await findUsersWithFriendNamedAndAge("John", 30)

const postsByJohn = await PostModel.find({ comments: { $elemMatch: { username: "john123" } } });

// $size: matches documents that contain an array field with a specific number of elements.
const findUsersWithNumFriends = async (numFriends: number) => {
  const users = await UserModel.find({ friends: { $size: numFriends } })
  return users
}
const usersWithThreeFriends = await findUsersWithNumFriends(3)

// ------------------------------ Logical operators ------------------------------ 
// $or: 
const findUsersByAgeOrEmail = async (age: number, emailPattern: RegExp) => {
  const users = await UserModel.find({
    $or: [{ age: { $gte: age } }, { email: { $regex: emailPattern } }],
  })
  return users
}

// $and: : This operator is used to combine multiple conditions and returns documents that match all the conditions.
const findUsersWithAgeBetween = async (startAge: number, endAge: number) => {
  const users = await UserModel.find({
    $and: [{ age: { $gte: startAge } }, { age: { $lte: endAge } }]
  })
  return users
}

const findUsersWithAgeAndEmail = async (minAge: number, maxAge: number, emailPattern: RegExp) => {
  const users = await UserModel.find({
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
  const users = await UserModel.find({
    $and: names.map((name) => ({ name: { $ne: name } }))
  })
  return users
}
const usersNotNamed = await findUsersNotNamed("John", "Jane", "Bob")


// ------------------------------ Element operators ------------------------------
const findUsersWithFriends = async () => {
  const users = await UserModel.find({ friends: { $exists: true } })
  return users
}

const findUsersWithoutEmail = async () => {
  const users = await UserModel.find({ email: { $exists: false } })
  return users
}

const findUsersWithNullAge = async () => {
  const users = await UserModel.find({ age: { $type: "null" } })
  return users
}

const findUsersWithNonNullAge = async () => {
  const users = await UserModel.find({ age: { $type: { $ne: "null" } } })
  return users
}

// ------------------------------ Regular Expression Operators ------------------------------
const findUsersWithEmailPattern = async (emailPattern: RegExp) => {
  const users = await UserModel.find({ email: { $regex: emailPattern } })
  return users
}

// end with ".com"
const findUsersWithComEmails = async () => {
  const users = await UserModel.find({ email: { $regex: /\.com$/ } })
  return users
}

const findUsersWithEmailContainingWord = async (word: string) => {
  const users = await UserModel.find({ email: { $regex: new RegExp(word, "i") } })
  return users
}

// ------------------------------ Miscellaneous operators ------------------------------
const findUsersWithAgeOver18 = async () => {
  const users = await UserModel.find({ $where: 'this.age > 18' })
  return users
}

const findUsersWithAgeOver25AndNameStartingWithJ = async () => {
  const users = await UserModel.find({
    $where: function() {
      return this.age > 25 && this.name.startsWith("J")
    }
  })
  return users
}

const findUsersWithFriendNamedAndNotYoungerThan = async (name: string, age: number) => {
  const users = await UserModel.find({
    $where: function() {
      const friend = this.friends.find((friend) => friend === name)
      return friend && this.age >= age
    }
  })
  return users
}

const users = await findUsersWithFriendNamedAndNotYoungerThan("John", 30)
