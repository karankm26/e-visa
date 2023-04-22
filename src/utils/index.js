import axios from "axios";

// export const CreateForm = async (id) => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   var raw = JSON.stringify({

//     first_name: "Anil",
//     last_name: "Yadav",
//     email: "anilyadav@gmail.com",
//     phone: "4234543545",
//     dateOfArrival: "2023-05-03",
//     nationality: "India",
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };
//   const response = await fetch(
//     "http://localhost:3001/visa/apply",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => console.log("error", error));

//   return response;
// };

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

// import axios from 'axios';

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

