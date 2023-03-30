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
  