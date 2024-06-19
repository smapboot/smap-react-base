import React from "react";

export const string2HTML = source => {
  return <div dangerouslySetInnerHTML={{ __html: source }} />
}