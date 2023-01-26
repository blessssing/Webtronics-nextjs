import { configureStore } from "@reduxjs/toolkit";
import FeedbackSlice from "../Slices/FeedbackSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction, Action } from "redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";

const combineReducer = combineReducers({ feedback: FeedbackSlice });

export const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

function makeStore() {
  return configureStore({
    reducer: masterReducer,
  });
}

export const store = makeStore();
export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
export const wrapper = createWrapper<RootStore>(
  makeStore
  // { debug: true }
);
