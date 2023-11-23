import { DollarOutlined, FormOutlined } from "@ant-design/icons";
import React from "react";
import NewPartyForm from "../components/partyform/NewPartyForm";
import PartyForm from "../components/partyFom/PartyForm";

export const formElements = [
  { title: "Add Payment", icon: <DollarOutlined />, comp: <NewPartyForm /> },
  { title: "Add Party", icon: <FormOutlined />, comp: <PartyForm /> },
];
