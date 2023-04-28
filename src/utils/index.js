import axios from "axios";

export const getStatus = async (id) => {
  const response = await axios
    .get(`https://evisa-backend.onrender.com/visa/status/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return response;
};

export const CreateForm = async (values) => {
  console.log(values);

  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    applicantDetails: {
      first_name: values.firstGivenName,
      last_name: values.familyName,
      date_of_birth: values.date_of_birth,
      country_of_birth: values.country_of_birth,
      city_of_birth: values.city_of_birth,
      national_id_number: "USA10101010",
      religion: "Agnostic",
      educational_qualification: "Undergraduate",
      country_of_citizenship: values.country_of_citizenship,
      gender: values.gender,
      email: values.email,
      confirm_email: values.confirm_email,
    },
    passportDetails: {
      passport_number: values.passport_number,
      date_of_issue: values.passport_date_of_issue,
      date_of_expiry: values.passport_expiry_date,
      country_of_issue: values.country_of_passport,
    },
    travelDetails: {
      purpose_of_visit: values.purpose_of_visit,
      visa_duration: "30d",
      date_of_arrival: values.expected_date_of_arrival,
      port_of_arrival: "Mumbai",
    },
    addressDetails: {
      house_number_or_street: values.address,
      city: values.townOrCity,
      country: "United States of America (the)",
      state: values.state_district,
      postal_code: values.postalCode,
      telephone_number: values.phone,
      email: values.email,
    },
    familyDetails: {
      fatherDetails: {
        name: "george washington",
        nationality: "United States of America (the)",
        placeOfBirth: "Washington",
        countryOfBirth: "United States of America (the)",
      },
      motherDetails: {
        name: "georgina washington",
        nationality: "United States of America (the)",
        placeOfBirth: "Washington",
        countryOfBirth: "United States of America (the)",
      },
      maritalStatus: "single",
      spouse_parents_pakistan: false,
    },
  };

  try {
    const response = await axios.post(
      "https://evisa-backend.onrender.com/visa/apply",
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

export const CreateFormStage1 = async (values, stage) => {
  console.log(values, stage);

  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    currentStage: stage,
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
