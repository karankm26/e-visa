// import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  ChangeStatus,
  GetCSVData,
  UploadDocument,
  UploadVisa,
  getAllForm,
  getCustomers,
  getInventory,
} from "../../API";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu/index";
import AppFooter from "../../Components/AppFooter";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  TableSortLabel,
  InputLabel,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { downloadExcel } from "react-export-table-to-excel";
import Loader from "../../Components/Loader";
import { ExportToCsv } from "export-to-csv";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [statusData, setStatusData] = useState(null);
  const [open, setOpen] = useState(false);
  const [openExcelDownloadBox, setOpenExcelDownloadBox] = useState(false);
  const [openCSVDownloadBox, setOpenCSVDownloadBox] = useState(false);

  const [formData, setFormData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [CSVDownloadData, setCSVDownloadData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [UploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsloading(true);
    const res = await getAllForm();
    setFormData(res.forms);
    if (res) {
      setIsloading(false);
    }
  };

  const handleFileUploadChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const formData = new FormData();
    formData.append("file", event.target.files[0], event.target.files[0].name);
    setSelectedFile(formData);
  };

  const changeStatus = async (status,id) =>{
    console.log(statusData);
    const res = await ChangeStatus({ status: status },id);
    getData()
  }

  const handleFileUpload = async (id) => {
    console.log(selectedFile);
    const res = await UploadVisa(selectedFile, id);
    console.log(res.status);
    if (res.status === 200) {
      setUploadSuccess(true);
      getData()
      setTimeout(() => {
        setOpen(false);
        setUploadSuccess(false);
      }, 2000);
    }
  };

  const handleClickOpen = (id) => {
    console.log(id);
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  const columns = [
    { id: "index", label: "S.No", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 100 },
    { id: "unique", label: "Unique Id", minWidth: 170 },
    {
      id: "email",
      label: "Email",
      minWidth: 130,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
      // options: ["Approved", "Pending", "Rejected"],
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 170,
      align: "left",
      format: (value) => value.toFixed(2),
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "left",
      format: (value) => value.toFixed(2),
    },
    {
      id: "viewButton",
      label: "View",
      minWidth: 100,
      align: "center",
    },
  ];

  function createData(
    index,
    name,
    unique,
    email,
    status,
    phone,
    gender,
    viewButton
  ) {
    // const density = population / size;
    return {
      index,
      name,
      unique,
      email,
      status: (
        <FormControl>
          <Select
            size="small"
            name="status"
            value={status}
            // value={statusData == null ? status : statusData}
            onChange={(e) => setStatusData(e.target.value)}
          >
            <MenuItem
              value={"approved"}
              onClick={() => handleClickOpen(unique)}
            >
              Approved
            </MenuItem>
            <MenuItem value={"pending"}  onClick={() => changeStatus("pending",unique)} >Pending</MenuItem>
            <MenuItem value={"rejected"}  onClick={() => changeStatus("rejected",unique)} >Rejected</MenuItem>
          </Select>
        </FormControl>
      ),
      phone,
      gender,
      viewButton: (
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/admin/customers/${unique}`)}
        >
          View
        </Button>
      ),
    };
  }

  const rows = formData.map((item, index) =>
    createData(
      index + 1,
      `${item?.tabOne?.givenName} ${item?.tabOne?.surname}`,
      item.application_id,
      item?.tabOne?.email,
      item?.status,
      item?.tabOne?.phone,
      item?.tabOne?.gender
    )
  );
  console.log(formData);
  // console.log(rows);
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log(userData);
  const unsortableColumns = ["status", "phone", "gender", "viewButton"];

  const handleSort = (property) => {
    if (unsortableColumns.includes(property)) {
      return;
    }

    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  // Export To Excel
  const handleCSVDownload = async () => {
    console.log(CSVDownloadData, "Downloading Excel...");
    const header = [
      "S.No",
      "Email",
      "Name",
      "Gender",
      "Nationality",
      "Passport Type",
      "Status",
      "Date of Arrival",
      "Initiated Date",
      "Visa Type",
      "Paid",
    ];
    const filteredStatus = formData.filter(
      (item) => item.status === CSVDownloadData
    );
    const selectedProperties = filteredStatus.map((item, index) => {
      return {
        "S.No": index + 1,
        Email: item?.tabOne?.email,
        Name: `${item?.tabOne?.givenName} ${item?.tabOne?.surname}`,
        Gender: item?.tabOne?.gender,
        Nationality: item?.tabOne?.nationality,
        "Passport Type": item?.tabOne?.passport_type,
        Status: item.status,
        "Date of Arrival": new Date(item.dateOfArrival).toLocaleString(),
        "Initiated Date": new Date(item.createdAt).toLocaleString(),
        "Visa Type": item.visaType,
        Paid: item.paid ? item.paid : "not paid",
      };
    });
    downloadExcel({
      fileName: `${CSVDownloadData} status report ${new Date().toLocaleString()}`,
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: selectedProperties,
      },
    });
  };
  //  Export to CSV
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "My Awesome CSV",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);
  const handleExportClick = () => {
    console.log(CSVDownloadData, "Downloading CSV...");
    const filteredStatus = formData.filter(
      (item) => item.status === CSVDownloadData
    );
    csvExporter.generateCsv(filteredStatus);
  };
  return (
    <>
      {isloading && <Loader />}
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <div className="d-flex justify-content-between me-5">
            <Typography variant="h5">Customers</Typography>{" "}
            <div>
              {" "}
              <Button
                variant="contained"
                onClick={() => setOpenCSVDownloadBox(true)}
                className="me-2"
              >
                <DownloadIcon />
                CSV
              </Button>
              <Button
                variant="contained"
                onClick={() => setOpenExcelDownloadBox(true)}
              >
                <DownloadIcon />
                Excel
              </Button>
            </div>
          </div>

          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 617 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {columns.includes(column.id) ? (
                          column.format && typeof column.id === "number" ? (
                            column.format(column.id)
                          ) : (
                            column.id
                          )
                        ) : (
                          <TableSortLabel
                            active={orderBy === column.id}
                            direction={orderBy === column.id ? order : "asc"}
                            onClick={() => handleSort(column.id)}
                            hideSortIcon={unsortableColumns.includes(column.id)}
                          >
                            {column.label}
                          </TableSortLabel>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
      {/* Approved Visa Dailog */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {UploadSuccess ? (
            <>
              <DialogTitle id="alert-dialog-title">
                {"Visa Uploaded Successfully"}
              </DialogTitle>
              <div className="text-center">
                <CheckCircleOutlineIcon sx={{ fontSize: 70, color: "green" }} />
              </div>
            </>
          ) : (
            <>
              <DialogTitle id="alert-dialog-title">
                {"Upload the Visa"}
              </DialogTitle>
              <DialogContent>
                <input
                  type="file"
                  onChange={handleFileUploadChange}
                  accept=".pdf"
                  className="form-control"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={() => handleFileUpload(open)} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
      {/* Excel Download Dialog */}
      <div>
        <Dialog
          open={openExcelDownloadBox}
          onClose={() => setOpenExcelDownloadBox(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Download the Excel Reports"}
          </DialogTitle>
          <DialogContent>
            <FormControl size="small" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Select the Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="tourist_duration"
                // value={values.selectedStatus || ""}
                onChange={(e) => setCSVDownloadData(e.target.value)}
                label="Select the Status"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em> Select the Status</em>
                </MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending </MenuItem>
                <MenuItem value="rejected">Rejected </MenuItem>
              </Select>
            </FormControl>{" "}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenExcelDownloadBox(false)}>
              Cancel
            </Button>
            <Button onClick={handleCSVDownload} autoFocus>
              Download
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* CSV Download Dialog */}
      <div>
        <Dialog
          open={openCSVDownloadBox}
          onClose={() => setOpenCSVDownloadBox(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Download the CSV Reports"}
          </DialogTitle>
          <DialogContent>
            <FormControl size="small" fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label" required>
                Select the Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="tourist_duration"
                // value={values.selectedStatus || ""}
                onChange={(e) => setCSVDownloadData(e.target.value)}
                label="Select the Status"
                defaultValue=""
              >
                <MenuItem value="" selected>
                  <em> Select the Status</em>
                </MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending </MenuItem>
                <MenuItem value="rejected">Rejected </MenuItem>
              </Select>
            </FormControl>{" "}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenCSVDownloadBox(false)}>Cancel</Button>
            <Button onClick={handleExportClick} autoFocus>
              Download
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default Customers;
