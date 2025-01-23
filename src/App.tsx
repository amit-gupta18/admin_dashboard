import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {dataProvider, liveProvider } from './providers';
import { authProvider } from "./providers";
import routerBindings, { CatchAllNavigate , DocumentTitleHandler , UnsavedChangesNotifier} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import {BrowserRouter , Route , Routes , Outlet} from "react-router-dom"
import Layout from "./components/layout";
import { Home, Login, Register, ForgotPassword } from './pages'


function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              // using the auth provider for this app 
              authProvider={authProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "esWXcv-QKbF9x-FY3dOm",
                liveMode: "auto",
              }}
            >
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/"
                  element = {
                    // <Authenticated
                    //   key="authenticated-layout"
                    //   fallback={<CatchAllNavigate to="/" />}
                    // >
                      <Layout>
                        <Outlet />
                      </Layout>


                    //  </Authenticated>


                    }>
                      <Route index element={<Home />} />
                </Route>
              </Routes>
              
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}
export default App;