import React from "react";

function TextInfo(props) {
  return (
    <div className="lang_en fontSizeTextInfo">
      <ul>
        <li>
          <strong>Beginner (Level 1, A1)</strong>— 500–600 words;
        </li>
        <li>
          <strong>Elementary (Level 1, A1)</strong>— 1000–1300 words;
        </li>
        <li>
          <strong>Pre-Intermediate (Level 2, A2)</strong> — 1400–1800 words;
        </li>
        <li>
          <strong>Intermediate (Level 3, B1)</strong>— 2-2,5 thousands words;
        </li>
        <li>
          <strong>Upper-Intermediate (Level 4, B2)</strong> — 3-4 thousands
          words;
        </li>
        <li>
          <strong>Advanced (Level 5, C1)</strong>— 4-7 thousands words;
        </li>
        <li>
          <strong>Proficiency (Level 6, C2)</strong>— 7-12 thousands words.
        </li>
      </ul>
      <div>Your text level is probably 1 </div>
    </div>
  );
}

export default TextInfo;
