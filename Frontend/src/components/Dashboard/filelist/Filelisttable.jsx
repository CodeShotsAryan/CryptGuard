import React from "react";
import SideNav from "../SideNav";
import RightSection from "../RightSection";
import "./Filelisttable.css";
import { Table } from "@radix-ui/themes";
import {  useSelector } from "react-redux";

function Filelisttable() {

  const files = useSelector((state)=>state.files);

  return (
    <div className="container">
      <div>
        <SideNav />
      </div>
      <div className="table-container">
        <Table.Root variant="surface" >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>File</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Type of file</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {files.map((file , index) => (
              <Table.Row key={index}>
              <Table.RowHeaderCell>{file.name}</Table.RowHeaderCell>
              <Table.Cell>{file.type}</Table.Cell>
              <Table.Cell>{file.size}</Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>

        </Table.Root>
      </div>
      <div>
        <RightSection />
      </div>
    </div>
  );
}

export default Filelisttable;
