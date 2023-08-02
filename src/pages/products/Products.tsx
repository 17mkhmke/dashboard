import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { insuranceData } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "company",
    headerName: "Company",
    width: 200,
  },
  {
    field: "coverage",
    headerName: "Coverage",
    width: 200,
  },
  {
    field: "deductible",
    headerName: "Deductible",
    width: 200,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
  },
  {
    field: "premium",
    headerName: "Premium",
    width: 200,
  },
  {
    field: "isRenewable",
    headerName: "Is Renewable",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Insurance Data</h1>
        <button onClick={() => setOpen(true)}>Add New Insurance</button>
      </div>
      <DataTable slug="insurance" columns={columns} rows={insuranceData} />
      {open && <Add slug="insurance" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;