import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getStatus = async (id) => {
  const response = await axios
    .get(`${BASE_URL}/visa/status/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return response;
};

export const UploadDocuments = async (formData, id) => {
  console.log(formData, id);
  const response = axios
    .post(`${BASE_URL}/visa/uploads/${id}`, formData)
    .then((res) => {
      return res;
    })
    .catch((error) => console.error("Error:", error));

  return response;
};

export const FileList = async (id) => {
  const response = axios
    .get(`${BASE_URL}/visa/file/list/${id}`)
    .then((res) => {
      console.log("utils", res);
      return res;
    })
    .catch((error) => console.error("Error:", error));

  return response;
};

export const CreateForm = async (values, stage, id) => {
  console.log(values, stage, id);

  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    currentStage: stage,
    id: id,
    answers: values,
  };

  try {
    const response = await axios.post(
      "http://localhost:4000/visa/apply",
      requestBody,
      { headers }
    );
    console.log(response);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const UpdateForm = async (values, stage, id) => {
  console.log(values, stage, id);

  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    currentStage: stage,
    id: id,
    answers: values,
  };

  try {
    const response = await axios.post(
      "http://localhost:4000/visa/apply",
      requestBody,
      { headers }
    );
    console.log(response);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const ContactApi = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await axios
    .post(`${BASE_URL}/query`, data, { headers })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
  // return response;
};

export const Payment = async () => {
  //   let token = localStorage.getItem('token')
  // const headers = {
  //   "Content-Type": "application/json",
  //   'Authorization': `Bearer ${token}`
  // };
  let appId = localStorage.getItem("application_id");

  const response = await axios
    .get(`${BASE_URL}/order/${appId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

export const PaymentValidate = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const appId = localStorage.getItem("application_id");
  console.log(appId);

  const response = await axios
    .post(`${BASE_URL}/order/validate-order/${appId}`, data, {
      headers,
    })
    .then((res) => {

      if(res.status === 200)
      {
       axios.get(`${BASE_URL}/pdf/visa/${appId}`, {
      headers,
    })
      }
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
  // return response;
};
