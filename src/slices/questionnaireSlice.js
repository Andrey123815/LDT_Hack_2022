import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questionnaireChoice: {
    tripTeamType: 'Один',
    additionalMembers: [],
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
      const newArr = state.questionnaireChoice.additionalMembers.slice();
      if (newArr.includes(action.payload)) {
        state.questionnaireChoice.additionalMembers = [newArr[0] === action.payload ? newArr[1] : newArr[0]].filter(item => item);
        return;
      }
      newArr.push(action.payload);
      state.questionnaireChoice.additionalMembers = newArr.filter(item => item);
    },
    updateInterests(state, action) {
      state.questionnaireChoice.interests = Object.fromEntries(Object.entries(action.payload).filter(([key, val]) => val));
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
