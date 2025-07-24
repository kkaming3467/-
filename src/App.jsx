import React from "react";
import Calculator from "./Calculator";
import MBTI from "./MBTI";
import MinecraftCommands from "./MinecraftCommands";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40, gap: 40 }}>
      <h1>계산 시스템 & MBTI & 마인크래프트 명령어 웹사이트</h1>
      <Calculator />
      <MBTI />
      <MinecraftCommands />
    </div>
  );
}

export default App;
