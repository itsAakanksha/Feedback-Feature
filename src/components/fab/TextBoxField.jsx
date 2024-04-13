import React, { useState, useRef } from "react";
import svg from "../../../config";

function TextBoxField() {
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [attachDisabled, setAttachDisabled] = useState(false);
  const fileInputRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAttach = (e) => {
    const file = e.target.files[0];
    if (attachments.length < 2) {
      setAttachments([...attachments, file]);
      if (attachments.length === 1) {
        setAttachDisabled(true);
      }
    }
  };

  const handleRemoveAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
    setAttachDisabled(false);
  };

  return (
    <div className="text-box-field">
      <div className="text-area-container">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Write here..."
          maxLength={1000}
          rows={5}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAttach}
          ref={fileInputRef}
        />
        <button
          type="button"
          className="attach-button"
          disabled={attachDisabled}
          onClick={() => fileInputRef.current.click()}
        >
          Attach
          <img src={svg.attach} alt="" />
        </button>
      </div>
      {attachments.length > 0 && (
        <div className="attachments">
          {attachments.map((file, index) => (
            <div key={index} className="attachment">
              <img
                src={URL.createObjectURL(file)}
                alt="Attachment"

                width="50"
                height="50"
              />
              <button onClick={() => handleRemoveAttachment(index)} className="remove-btn">
                <img className="att-close" src={svg.close} alt="" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextBoxField;
