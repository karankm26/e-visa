import { useEffect } from "react";
const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    // if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
    // }
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  // const element = document.querySelector(".skiptranslate");
  // if (element.innerHTML.includes("Powered by ")) {
  //   console.log("first");
  //   // console.log(element.innerHTML.includes("Powered by "));
  // }
  return (
    <>
      <div id="google_translate_element"></div>
      {/* <h4>Start building your app. Happy Coding!</h4> */}
    </>
  );
};

export default GoogleTranslate;
