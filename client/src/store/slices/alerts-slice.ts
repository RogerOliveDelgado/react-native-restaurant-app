import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceOptions } from "@reduxjs/toolkit";
import { keyBy, random } from "lodash";
import { ActionSheetIOS } from "react-native";
import { AlertState} from '../../interfaces/AppState';

//We should call the API/backend to carry the information
const initialAlertState: AlertState = {
  main: 2,
  bookings: 0,
  notifications: 17,
  settings: 9,
  profile: 0,
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState: initialAlertState,
  reducers: {
    updateAlert(state: AlertState, action: PayloadAction<keyof AlertState>){
      state[action.payload]++
    }
  },
});

export const alertsActions = alertsSlice.actions;

export default alertsSlice;
