"use strict";
var _a;
exports.__esModule = true;
exports.removeMessage = exports.addMessage = exports.selectMessageList = exports.messageListSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.messageListSlice = toolkit_1.createSlice({
    name: 'messageList',
    initialState: [],
    reducers: {
        addMessage: function (state, action) {
            state.push(action.payload);
        },
        removeMessage: function (state, action) {
            state.filter(function (message) { return message !== action.payload; });
        }
    }
});
var selectMessageList = function (state) { return state.messageList; };
exports.selectMessageList = selectMessageList;
exports.addMessage = (_a = exports.messageListSlice.actions, _a.addMessage), exports.removeMessage = _a.removeMessage;
exports["default"] = exports.messageListSlice.reducer;
