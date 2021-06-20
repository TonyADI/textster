"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var MessageListSlice_1 = require("./components/MessageList/MessageListSlice");
exports["default"] = toolkit_1.configureStore({
    reducer: {
        messageList: MessageListSlice_1["default"]
    }
});
