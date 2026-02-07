import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github(): React.ReactElement {
  const colourTheme = {
    light: ["#ecd9fc", "#c084f5", "#b265f6", "#b22ff4", "#8400b8"],
    dark: ["#2d1b69", "#5a2d8c", "#7c3aed", "#a855f7", "#c084fc"]
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Days I <strong className="text-gradient">Code</strong>
      </h1>
      <div className="w-full max-w-full overflow-x-auto bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 flex justify-center">
        <GitHubCalendar
          username="st-arafat"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;