import { User } from "../models/user.model"

const findUsersWithAgeOver18 = async () => {
    const users = await User.find({ $where: 'this.age > 18' })
    return users
  }
  
  const findUsersWithAgeOver25AndNameStartingWithJ = async () => {
    const users = await User.find({
      $where: function() {
        return this.age > 25 && this.name.startsWith("J")
      }
    })
    return users
  }
  
  const findUsersWithFriendNamedAndNotYoungerThan = async (name: string, age: number) => {
    const users = await User.find({
      $where: function() {
        const friend = this.friends.find((friend) => friend === name)
        return friend && this.age >= age
      }
    })
    return users
  }
  
  const users = await findUsersWithFriendNamedAndNotYoungerThan("John", 30)
  