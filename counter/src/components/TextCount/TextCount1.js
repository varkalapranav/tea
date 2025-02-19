import React, { useEffect, useState } from "react";

const TextCount1 = () => {
  const [formData, setFormData] = useState({
    textArea: "",
  });

  const [textLen, setTextLen] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [word, setWord] = useState(0);

  const handletype = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // setAlpha((prev) => {
    //   if (value[value.length - 1] >= "a" && value[value.length - 1] <= "z")
    //     return (prev = prev + 1);
    //   return prev;
    // });

    // setWord((prev) => {
    //   const char = value[value.length - 1];
    //   if (char == " " || char == "\t" || char == "\n") return (prev = prev + 1);
    //   return prev;
    // });

    const alpha = value.replace(/[^a-zA-Z]/g, "").length;
    setAlpha(alpha);

    // Update word count dynamically
    const word = value.trim().split(/\s+/).filter(Boolean).length;
    setWord(word);
  };

  useEffect(() => {
    const count = formData.textArea.length;
    setTextLen(count);
  }, [formData.textArea]);

  // useEffect(() => {
  //   setAlpha((prev) => {
  //     const char = formData.textArea[formData.textArea.length - 1];
  //     if (char >= "a" && char <= "z") prev = prev + 1;
  //     return prev;
  //   });
  // }, [formData.textArea]);

  return (
    <div>
      <form>
        <textarea
          name="textArea"
          value={formData.textArea}
          onChange={handletype}
        ></textarea>
      </form>
      <p>Char_Count:{textLen}</p>
      <p>alpha_count:{alpha}</p>
      <p>word_count:{word}</p>
    </div>
  );
};

export default TextCount1;
