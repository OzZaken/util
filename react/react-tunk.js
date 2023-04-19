// ---------------------------------   Heading   ---------------------------------  
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

const increment = createAction('counter/increment');
console.log(increment(2));

// Output: {type: 'counter/increment', payload: 2}
// Define actions
export const getUsersRequest = createAction('GET_USERS_REQUEST')
export const getUsersSuccess = createAction('GET_USERS_SUCCESS')
export const getUsersFailure = createAction('GET_USERS_FAILURE')

// Define thunk
export const getUsers1 = () => async (dispatch) => {
  dispatch(getUsersRequest())
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(getUsersSuccess(response.data))
  } catch (error) {
    dispatch(getUsersFailure(error.message))
  }
}

// ---------------------------------   diff   ---------------------------------  

const CACHE_TTL = 60000 // 1 minute cache
let usersCache = {
  data: null,
  timestamp: null,
}

export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  const { data: cachedData, timestamp } = usersCache
  
  const isCacheExpired = timestamp && Date.now() - timestamp > CACHE_TTL

  if (cachedData && !isCacheExpired) return cachedData

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    usersCache = {
      data: response.data,
      timestamp: Date.now()
    }
    return response.data
  } catch (error) {
    // Handle errors
    return thunkAPI.rejectWithValue(error.message)
  }
})
