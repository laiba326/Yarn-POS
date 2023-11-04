import React from "react";
import SideBar from "./components/SideBar";
import PartyForm from "./components/partyform/PartyForm";
import NewPartyForm from "./components/partyform/NewPartyForm";
export default function App() {
  return (
    <>
      <SideBar />
      <NewPartyForm />
    </>
  );
}
