import React from "react";
import "./_signature.scss";

const Signature = () => {
  return (
    <div className="signature">
      <div className="signature__copyright">
        Copyright © 2023 - Todos los derechos reservados - Desarrollado por{" "}
        <a
          href="mailto:info.sudevsolutions@gmail.com"
          className="signature__copyright__mailLink"
        >
          SU-DEV SOLUTIONS
        </a>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Signature;
