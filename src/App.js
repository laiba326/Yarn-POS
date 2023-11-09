import React from "react";
import "./App.css";
import { Layout, Space } from "antd";
import SideMenu from "./components/layout/SideBar";

import RouteComp from "./router/routeComp";

import {
  footerStyle,
  siderStyle,
  contentStyle,
  headerStyle,
} from "./components/layout/layoutStyles";
const { Header, Footer, Sider, Content } = Layout;

//sale
// quantity in bags
// sku
//price
//date
//payment partial
//party name

//payment
// check,cash ,tc ,account transfer

// reports
//date wise sale
//date wise payments

//daily book

//purchase
// purchase rate
//
// party seprate acccount

//thermal printing
function App() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(37, 41, 60)",
      }}
    >
      <Space
        direction="vertical"
        style={{
          width: "100%",
          backgroundColor: "rgb(37, 41, 60)",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Sider style={siderStyle}>
            <SideMenu />
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>
              <RouteComp />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
