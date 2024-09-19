/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(groups)` | `/(groups)/criarredacao` | `/(groups)/editmodelo` | `/(groups)/login` | `/(groups)/newRedacao` | `/(groups)/visualizacao` | `/_sitemap` | `/criarredacao` | `/editmodelo` | `/login` | `/newRedacao` | `/visualizacao`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
