import React from "react";

const Transcript = ({ title, data }) => {
  return (
    <div className="transcript">
      {title && <h2>{title}</h2>}
      {data && (
        <pre className="data-pre">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Transcript