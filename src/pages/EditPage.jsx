import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const refMeme = useRef();

  function addText() {
    setCount(count + 1);
  }

  return (
    <div>
      <div
        style={{ width: "600px", border: "2px solid black" }}
        ref={refMeme}
        className="meme  mt-5 mb-5"
      >
        <img src={params.get("url")} alt="Meme Image" width="250px" />
      </div>
      {Array(count)
        .fill(0)
        .map((e) => (
          <Text />
        ))}
      <Button onClick={addText} style={{ margin: "15px" }}>
        Add Text
      </Button>
      <Button onClick={(e) => exportComponentAsJPEG(refMeme)} variant="success">
        Save
      </Button>
    </div>
  );
};

export default EditPage;
