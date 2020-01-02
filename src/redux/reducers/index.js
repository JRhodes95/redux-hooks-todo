import { combineReducers } from "redux";
import toDos from "./toDos";
import isSynced from "./syncData";

export default combineReducers({ toDos, isSynced });
