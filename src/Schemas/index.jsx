import * as Yup from "yup";

export const ApplySchema = Yup.object({
  familyName: Yup.string()
    .min(2)
    .max(30)
    .required("Pleae Enter Family Your Name"),
  firstGivenName: Yup.string()
    .min(2)
    .max(30)
    .required("Pleae Enter First Given Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  confirm_email: Yup.string()
    .email()
    .required("Please Enter Your Confirm Email"),

  phone: Yup.number().min(2).required("Please Enter Your Phone"),
  gender: Yup.string().required("Pleae Select Your Gender"),
  country_of_birth: Yup.string().required("Pleae Select Your Country"),
  city_of_birth: Yup.string().required("Pleae Select Your City of Birth"),
  country_of_citizenship: Yup.string().required(
    "Pleae Select Your Country of Citizenship"
  ),

  visible_identification_marks: Yup.string().required(
    "Pleae Select Your Vosible Identification Marks"
  ),
  country_of_passport: Yup.string().required(
    "Pleae Select Your Country of Passport"
  ),
  passport_number: Yup.string().required("Pleae Select Your Passport Number"),
  // date_of_issue: Yup.string().required("Pleae Select Your Date Of Issue"),
  place_of_issue: Yup.string().required("Pleae Select Your Place of Issue"),
  address: Yup.string().required("Pleae Select Your Town or City"),
  townOrCity: Yup.string().required("Pleae Select Your Place of Issue"),
  country_of_passport: Yup.string().required(
    "Pleae Select Your Country Of Passport"
  ),
  postalCode: Yup.string().required("Pleae Select Your Postal Code"),
  state_district: Yup.string().required("Pleae Select Your State or Province"),
  country_code: Yup.string().required("Pleae Select Your Country Code"),
  purpose_of_visit: Yup.string().required("Pleae Select Your Purpose of Visit"),
  passport_expiry_date: Yup.string().required("Pleae Select Your Expiry Date"),
  date_of_birth: Yup.string().required("Please Select Your DOB"),
  expected_date_of_arrival: Yup.string().required(
    "Pleae Select Expected Date of Arrival"
  ),
  passport_date_of_issue: Yup.string().required(
    "Pleae Select Your Passport Date of Issue"
  ),
  home_country: Yup.string().required("Pleae Select Your Home Country"),
  // place_of_issue: Yup.string().required("Pleae Select Your Place of Issue"),

  tourist_duration: Yup.string().when("purpose_of_visit", {
    is: "Tourist Visa",
    then: Yup.string().min(2).required("Please Enter Your tourist duration"),
    otherwise: Yup.string().min(2),
  }),
});
