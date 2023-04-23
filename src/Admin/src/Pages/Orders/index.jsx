// import { Avatar, Rate, Space, Table, Typography } from "antd";
import {useEffect, useState} from "react";
import {getAllForm, getCustomers, getInventory} from "../../API";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu/index";
import AppFooter from "../../Components/AppFooter";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
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
  TableSortLabel,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {userData} from "../../utils/data";
import Loader from "../../Components/Loader";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      const res = await getAllForm();
      setFormData(res.forms);
      if (res) {
        setIsloading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const columns = [
    {id: "index", label: "S.No", minWidth: 50},

    {id: "name", label: "Name", minWidth: 100},
    {id: "unique", label: "Unique Id", minWidth: 170},
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
      id: "paid",
      label: "Payment",
      minWidth: 170,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(index, name, unique, email, status, paid) {
    // const density = population / size;
    console.log(paid);
    return {
      index,
      name,
      unique,
      email,
      status,
      paid,
    };
  }

  // const rows = userData.map((item, index) =>
  //   createData(
  //     index + 1,
  //     item.name,
  //     item.uniqueId,
  //     item.email,
  //     item.status,
  //     item.verify,
  //     item.payment
  //   )
  // );
  const rows = formData.map((item, index) =>
    createData(
      index + 1,
      `${item.first_name} ${item.last_name}`,
      item._id,
      item.email,
      item.status,
      item.paid ? item.paid + "paid" : "not paid"
    )
  );
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
  const unsortableColumns = ["status", "phone", "gender", "viewButton"];
  const handleSort = (property) => {
    if (unsortableColumns.includes(property)) {
      return;
    }

    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };
  return (
    <>
      {isloading && <Loader />}
      <Box sx={{display: "flex"}}>
        <SideMenu></SideMenu>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader />
          <Typography variant="h5">Orders</Typography>

          <Paper sx={{width: "100%"}}>
            <TableContainer sx={{maxHeight: 617}}>
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
        {/* <div className="content">
          <Space size={20} direction="vertical">
            <Typography.Title level={4}>Customers</Typography.Title>
            <Table
              loading={loading}
              columns={[
                {
                  title: "uniqueId",
                  dataIndex: "unique_id",
                },
                {
                  title: "status",
                  dataIndex: "status",
                },
                {
                  title: "First Name",
                  dataIndex: "first_name",
                },
                {
                  title: "LastName",
                  dataIndex: "first_name",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                },

                {
                  title: "gender",
                  dataIndex: "gender",
                },
              ]}
              dataSource={dataSource}
              pagination={{
                pageSize: 5,
              }}
            ></Table>
          </Space>
        </div> */}
      </Box>
    </>
  );
}
export default Orders;
