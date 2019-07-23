import React, { useState, useEffect } from "react";

const PreloadEffectComponent = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => async () => await import("./test"), [hovered]);

  return (
    <h1 onMouseEnter={() => setHovered(true)}>import() useEffect Example</h1>
  );
};

export default PreloadEffectComponent;
