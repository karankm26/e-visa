import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  FormLabel,
  Container,
  Alert,
} from "@mui/material";
import { FileList, UploadDocuments } from "../utils";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function DocumentsUpload() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [UploadSuccess, setUploadSuccess] = useState(false);
  const [files,setFiles] = useState([])  
  const [fileList,setFileList] = useState([])

  useEffect(()=>{
    getFilesList()
  },[])

  const getFilesList = async () =>{
    const file = await FileList(id)
    setFileList(file.data.file)
  }

  const handleFile = (name,file) => {
    console.log(name,file)
    let data = files
    let index = data.findIndex(ele=>ele.name==name)
    if(index==-1)
    {
      data.push({
        name: name,
        file: file
      })
    }else{
      data[index] = {
        name: name,
        file: file
      }
    }
    setFiles(data)
  }

  const handleFileUpload = async () => {
    if(files.length!=fileList.length)
    {
      alert("Please upload all files")
      return
    }
  //   console.log(passportPhoto);
  //   console.log(addhhar);
  //   console.log(id);

    setIsloading(true);
    let formData = new FormData();
    for(let i=0;i<files.length;i++)
    {
      formData.append("files", files[i].file[0], files[i].file[0].name);
    }
  //   formData.append("files", addhhar[0], addhhar[0].name);
    const res = await UploadDocuments(formData, id);
  //   console.log(res);
    if (res.status === 200) {
      setUploadSuccess(true);
      setIsloading(false);
      setTimeout(() => {
        setUploadSuccess(false);
        navigate(`/payment/${id}`);
      }, 5000);
    }
  };
  return (
    <>
      {isloading && <Loader />}
      <Container>
        <Card sx={{ width: "100%" }} className="card-form mt-5">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
              padding: "0 70px 0 70px ",
              boxSizing: "border-box",
              marginBottom: "60px",
              marginTop: "50px",
            }}
          >
            {UploadSuccess && (
              <Alert severity="success">Documents Uploaded Successfully</Alert>
            )}
            <Typography>
              <h2>Document Upload</h2>{" "}
            </Typography>



            <div className="row mt-4">
              {
                fileList.map(ele=>{
                  return(
                    <div className="col-lg-6" style={{marginBottom:"20px"}}>
                    <div className="text-start">
                      <FormLabel required>{ele.name}</FormLabel>
                    </div>
                    <input
                      type="file"
                      className="form-control"
                      accept={ele.accept}
                      onChange={(e) => handleFile(ele.name,e.target.files)}
                    />
                  </div>
                  )
                })
              }
            </div>
            {/* <div className="row mt-4">
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Pancard Card</FormLabel>
              </div>
              <input
                type="file"
                className="form-control"
                onChange={handleFileUploadChange}
              />
            </div>
            <div className="col-lg-6">
              <div className="text-start">
                <FormLabel required> Voter ID Card</FormLabel>
              </div>
              <input
                type="file"
                className="form-control"
                onChange={handleFileUploadChange}
              />
            </div>
          </div> */}
            <Button
              className="px-5 mt-3"
              variant="contained"
              size="large"
              type="submit"
              onClick={handleFileUpload}
            >
              Upload
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default DocumentsUpload;
