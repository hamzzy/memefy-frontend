import {useDropzone,isDragReject} from 'react-dropzone';
import React, {Component, useEffect, useState} from 'react';
import UploadShape from '../assets/images/Shape.png';
import { Image} from "react-bootstrap";


const  DragAndDropPreviews=({ onDrop,acceptedFiles})=> {
    const maxSize = 1048576;
    // const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps,isDragReject} = useDropzone({
      maxFiles: 1,
      accept: 'image/* video/*',
      minSize: 0,
      maxSize,
      onDrop
    });


    
    const thumbs = acceptedFiles.map(file => (
      <div key={file.name}>
        
          <img
            src={file.preview}
            alt=''
            className='uploadImage'
          />
  
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      acceptedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }, [acceptedFiles]);
    // const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
    return (
      <>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()}   />
            {isDragReject && "File type not accepted, sorry!"}
            {/* {isFileTooLarge && (
              <div className="text-danger mt-2">
                File is too large.
              </div>
            )} */}
          {acceptedFiles.length === 0 && (
            <div className="FilesDragAndDrop__area d-flex flex-column align-items-center font pt-4">
              <Image src={UploadShape} className="mb-3" alt=''/>
              <p className="text-center fs-18 mb-4 fs-10">Drag and drop here<br/> or<br/> browse</p>
            </div>
          )}

          {acceptedFiles.length > 0 && (
            <div>
              {thumbs}
            </div>
           )}
        </div>
        
      </>
    );
}

export default  DragAndDropPreviews;