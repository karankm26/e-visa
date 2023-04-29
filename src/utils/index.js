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
    .post("https://evisa-backend.onrender.com/visa/uploads/" + id, formData)
    .then((res) => {
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
