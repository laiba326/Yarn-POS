import { AntDesignOutlined } from "@ant-design/icons";
import React from "react";
import NewPartyForm from "../components/partyform/NewPartyForm";
import PartyForm from "../components/partyFom/PartyForm";

export const formElements = [
  { title: "Add Payment", icon: <AntDesignOutlined />, comp: <NewPartyForm /> },
  { title: "Add Party", icon: <AntDesignOutlined />, comp: <PartyForm /> },
];
