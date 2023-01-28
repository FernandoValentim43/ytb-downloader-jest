import { downloadAudio } from "./downloader.js";

let values = [
  "https://www.youtube.com/watch?v=wpqm-05R2Jk",
  "https://www.youtube.com/watch?v=gaA7RAy5rYg",
  "https://www.youtube.com/watch?v=XpdpW0z9xnQ",
  "https://www.youtube.com/watch?v=ZWijx_AgPiA",
  "https://www.youtube.com/watch?v=5rAOyh7YmEc",
  "https://www.youtube.com/watch?v=db5OQmod0JU",
  "https://www.youtube.com/watch?v=db5OQmod0JU",
  "https://www.youtube.com/watch?v=u6EuhylVHaw",
  "https://www.youtube.com/watch?v=omwXLXeTR4w",
];

for (let i = 0; i < values.length; i++) {
    downloadAudio(values[i]);
}
