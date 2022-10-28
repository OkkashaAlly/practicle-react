import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slice/ui";
import dataSlice from "./slice/data";
import inputSlice from "./slice/inputs";
import blockchainSlice from "./slice/blockchainSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    data: dataSlice,
    input: inputSlice,
    blockchain: blockchainSlice
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['blockchain/updateData'],
        ignoredPaths: ['blockchain.provider']
      }
    })
});

export default store;
