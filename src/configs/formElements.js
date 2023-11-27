import {
  DollarOutlined,
  FormOutlined,
  ShoppingCartOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
import React from "react";
import NewPartyForm from "../components/partyform/NewPartyForm";
import PartyForm from "../components/partyFom/PartyForm";
import Sale from "../components/addSale/Sale";
import PurchaseForm from "../components/purchaseForm/PurchaseForm";
import SkuForm from "../components/purchaseForm/skuForm/SkuForm";
export const formElements = [
  { title: "Add Payment", icon: <DollarOutlined />, comp: <NewPartyForm /> },
  { title: "Add Party", icon: <FormOutlined />, comp: <PartyForm /> },
  { title: "Add Sale", icon: <FormOutlined />, comp: <Sale /> },
  {
    title: "Add Purchase",
    icon: <ShoppingCartOutlined />,
    comp: <PurchaseForm />,
  },
  {
    title: "Add Sku",
    icon: <BarcodeOutlined />,
    comp: <SkuForm />,
  },
];
