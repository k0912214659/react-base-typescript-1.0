import React from 'react';
import { Provider } from 'react-redux';
import createAppStore from '@Reducers/_InitializeStore/createAppStore';
import createAppModel from '@Reducers/_InitializeModel/createAppModel';
import { AppProps } from '@Components/App/types';
import App from '@Components/App';

export interface CreateProviderParams {
  Router: AppProps['Router'];
  routerProps?: AppProps['routerProps'];
  appKey: number;
}

export default function MainAppProvider(params: CreateProviderParams): React.FC {
  const {
    Router,
    appKey,
    routerProps,
  } = params;
  const initialState = createAppModel();
  const initialStore = createAppStore({ initialState });

  return (): React.ReactElement => (
    <Provider store={initialStore}>
      <App key={appKey} Router={Router} routerProps={routerProps} />
    </Provider>
  );
}
