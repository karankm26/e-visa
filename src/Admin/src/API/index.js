import axios from "axios";
const API_BASE_URL = "https://evisa-backend.onrender.com";
export const getOrders = () => {
  return fetch("http://localhost:4000/getstatus?status=pending").then((res) =>
    res.json()
  );
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("http://localhost:4000/getstatus?status=completed").then((res) =>
    res.json()
  );
};

export const getCustomers = () => {
  return fetch("http://localhost:4000/getData").then((res) => res.json());
};

const getById = async () => {
  return await fetch("http://localhost:4000/getById/:id").then((res) =>
    res.json()
  );
};

export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

export const updateCompleted = async () => {
  return await fetch("http://localhost:4000/update/:id").then((res) =>
    res.json()
  );
};

export const login = async (body) => {
  const response = await axios
    .post(`https://evisa-backend.onrender.com/admin/login`, body)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });

  return response;
};

export const getAllFormById = async (id) => {
  const token = localStorage.getItem("token");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = "";

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: raw,
    redirect: "follow",
  };
  const response = await fetch(
    "https://evisa-backend.onrender.com/admin/forms/" + id,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));

  return response;
};

export const ChangeStatus = async (body, id) => {
  console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = JSON.stringify(body);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://evisa-backend.onrender.com/admin/forms/" + id,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return response;
};

export const getAllForm = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const headers = { Authorization: `Bearer ${token}` };

  const response = await axios
    .get(`https://evisa-backend.onrender.com/admin/forms?visaType=tourist`, {
      headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });

  return response;
};

export const GetCSVData = async (status) => {
  // console.log(values);
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(
      `https://evisa-backend.onrender.com/admin/forms/csv?status=${status}`,
      { headers }
    );
    // console.log(response);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const UploadVisa = async (formDate, id) => {
  const token = localStorage.getItem("token");
  console.log(formDate, id, token);
  const response = axios
    .post("https://evisa-backend.onrender.com/admin/upload/" + id, formDate, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => console.error("Error:", error));

  return response;
};
