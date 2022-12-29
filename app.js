import { renderDashboard } from "./view-dashboard.js";
import { renderDetail } from "./view-renderDetail.js";

console.log("hello world");

if (window.location.search.includes("?country=")) {
  document.querySelector(".filters").classList.add("hidden");

  renderDetail();
} else {
  renderDashboard();
}
