import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

const withTheme = (node) => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'Basis Grotesque Pro'
            },
          }}
        >
          {node}
        </ConfigProvider>
      </PersistGate>
    </Provider>
  )
}

export default withTheme;
