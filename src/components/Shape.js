import React from "react";

function Shape({ att }) {
  const styles = {
    width: att.w,
    height: att.h,
    position: att.pos,
    top: att.top,
    bottom: att.bottom,
    left: att.left,
    right: att.right,
    color: att.color,
    margin: att.m,
    padding: att.padding,
    border: att.b,
    borderRadius: att.br,
    background: att.bg,
    boxShadow: att.bs,
    cursor: att.p,
    transition: att.t,
    overflow: att.overflow,
    zIndex: att.zIndex,
  };
  return <div style={styles} className={att.cl}>{att.child}</div>;
}

export default Shape;
