import React, { useEffect, useState } from "react";

import "../styles/Loading.css";

const Loading = () => {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (remaining < 99.9) {
      setTimeout(() => {
        setRemaining(remaining + 0.1);
      }, 2);
    }

    return () => clearTimeout(remaining);
  });

  return (
    <div className="Loading">
      {remaining < 99.9 ? (
        <div>
          Loading...
          <br />
          {remaining.toFixed(1)}%
        </div>
      ) : (
        <div>100%</div>
      )}
    </div>
  );
};

export default Loading;
