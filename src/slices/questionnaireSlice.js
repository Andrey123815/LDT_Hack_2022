import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questionnaireChoice: {
    tripTeamType: '',
    additionalMembers: '',
    interests: {},
    transport: 'Пешком',
    freeTime: 1,
  },
  completed: false
}

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    updateTripTeamType(state, action) {
      state.questionnaireChoice.tripTeamType = action.payload;
    },
    updateAdditionalMembers(state, action) {
      state.questionnaireChoice.additionalMembers = action.payload;
    },
    updateInterests(state, action) {
      state.questionnaireChoice.interests = action.payload;
    },
    updateTransport(state, action) {
      state.questionnaireChoice.transport = action.payload;
    },
    updateFreeTime(state, action) {
      state.questionnaireChoice.freeTime = action.payload;
    },
    completeQuests(state) {
      state.completed = true;
    },
  },
})

export const {
  updateTripTeamType,
  updateAdditionalMembers,
  updateFreeTime,
  updateInterests,
  updateTransport,
  completeQuests
} = questionnaireSlice.actions

export default questionnaireSlice.reducer
