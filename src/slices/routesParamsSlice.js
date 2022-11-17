import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  routesDistance: ['1 км', '1 км', '1 км'],
  routesDuration: ['1 ч', '1 ч', '1 ч'],
}

export const routesParamsSlice = createSlice({
  name: 'routesParamsSlice',
  initialState,
  reducers: {
    updateRoutesInfo(state, action) {
      state.routesDistance = action.payload.routesDistance;
      state.routesDuration = action.payload.routesDuration;
    }
  },
})

export const { updateRoutesInfo } = routesParamsSlice.actions

export default routesParamsSlice.reducer
