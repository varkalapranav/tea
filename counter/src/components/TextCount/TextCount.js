import React, { useEffect, useState } from "react";

const TextCount = () => {
  const [formData, setFormData] = useState({
    textArea: "",
  });

  const [textLen, setTextLen] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const Count = formData.textArea.length;
    setTextLen(Count);
  }, [formData.textArea]);

  return (
    <div>
      <form>
        <textarea
          name="textArea"
          value={formData.textArea}
          onChange={handleChange}
        ></textarea>
        {console.log(formData.textArea)}
      </form>
      <p>textlen : {textLen}</p>
    </div>
  );
};

export default TextCount;
