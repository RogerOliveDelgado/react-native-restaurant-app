import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceOptions } from "@reduxjs/toolkit";
import { keyBy, random } from "lodash";
import { ActionSheetIOS } from "react-native";
import { AlertState} from '../../interfaces/AppState';

//We should call the API/backend to carry the information
const initialAlertState: AlertState = {
  mainAlert: 2,
  bookingsAlert: 0,
  notificationsAlert: 17,
  settingsAlert: 9,
  profileAlert: 0,
};

const alertsSlice = createSlice({
  name: "availableCart",
  initialState: initialAlertState,
  reducers: {
    updateAlert(state: AlertState, action: PayloadAction<keyof AlertState>){
      state[action.payload]++
    }
  },
});

export const alertsActions = alertsSlice.actions;

export default alertsSlice;
