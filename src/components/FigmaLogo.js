import React from "react";
import Shape from "./Shape";

function FigmaLogo() {
  return (
    <div>
      <div style={{display: "flex", alignItems: "center"}}>
        <Shape 
        att={{
            w: "16px",
            h: "16px",
            br: "8px 0px 0px 8px",
            bg: "#ec4c1d",
        }}
        />
        <Shape 
        att={{
            w: "16px",
            h: "16px",
            br: "0px 8px 8px 0px",
            bg: "#f66d5c",
        }}
        />
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <Shape 
        att={{
            w: "16px",
            h: "16px",
            br: "8px 0px 0px 8px",
            bg: "#9c55f7",
        }}
        />
        <Shape 
        att={{
            w: "16px",
            h: "16px",
            br: "8px",
            bg: "#17b5f4",
        }}
        />
      </div>
      <Shape 
      att={{
          w: "16px",
          h: "16px",
          br: "8px 0px 8px 8px",
          bg: "#08c67c",
      }}
      />
    </div>
  );
}

export default FigmaLogo;
