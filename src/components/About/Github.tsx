import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github(): React.ReactElement {
  const colourTheme = {
    light: ["#ecd9fc", "#c084f5", "#b265f6", "#b22ff4", "#8400b8"],
    dark: ["#2d1b69", "#5a2d8c", "#7c3aed", "#a855f7", "#c084fc"]
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="st-arafat"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;