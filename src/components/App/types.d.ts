import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import { StaticRouterProps } from 'react-router';

export interface AppProps {
  Router: React.ComponentClass<Record<string, unknown>>;
  routerProps?: BrowserRouterProps | StaticRouterProps;
}
