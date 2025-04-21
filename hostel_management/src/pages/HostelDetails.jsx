import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

export default function HostelDetails() {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
  const defaultColDef = {
    flex: 1,
  };

  return (
    <>
      <Box style={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            marginTop: 7,

            width: "100%",
          }}
        >
          <div
            className="ag-theme-alpine"
            style={{
              height: "500px",
              width: "100%",
            }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}
