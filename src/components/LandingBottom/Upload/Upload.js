import React, { useRef } from "react";

const Upload = () => {
  const inputRef = useRef(null);
  return (
    <div className="upload-con">
      <div className="upload-con__inner">
        <div className="left"></div>
        <div className="right">
          <div className="content">
            <div className="title">
              <span>Upload your files</span> online
            </div>
            <div className="sub">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy{" "}
              <span>
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </span>
            </div>
            <button>Send Files</button>
          </div>
        </div>
        <div className="upload-box">
          <div className="content">
            <div className="title">Upload your attachments</div>
            <div className="sub">Drag and drop your files here.</div>
            <div className="drop-zone">
              <img
                src={require("../../../assets/images/upload.svg")}
                alt="upload"
              />
              <div className="types">. PDF . JPG . PNG . DOC</div>
              <div className="alt">You can also upload files by.</div>
              <div onClick={() => inputRef.current.click()} className="click">
                clicking here
              </div>
              <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                name=""
                id=""
              />
            </div>

            <div className="options">
              <button>Upload Files</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
