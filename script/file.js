const bgTheme = document
  .getElementById("theme-btn")
  .addEventListener("click", function () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
  });

let date = new Date();
const day = date.toLocaleDateString("en-us", { weekday: "short" });
const month = date.toLocaleDateString("en-us", {
  month: "short",
  day: "2-digit",
});
const year = date.getFullYear();
document.getElementById("datePara").innerHTML = `${day}, <br>${month} ${year}`;

document
  .getElementById("blog-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./blogs.html";
  });

let completeTask = 0;
function task(buttonId, title) {
  document.getElementById(buttonId).addEventListener("click", function () {
    alert("Board Updated Successfully.");
    completeTask++;
    if (completeTask === 6) {
      alert("congrats!! You have the completed all the current task.");
    }
    const taskCount = stringConvertIntById("task-count");
    const navCount = stringConvertIntById("nav-count");
    const taskCountSum = taskCount - 1;
    document.getElementById("task-count").innerText = taskCountSum;
    const navCountSum = navCount + 1;
    document.getElementById("nav-count").innerText = navCountSum;
    document.getElementById(buttonId).setAttribute("disabled", true);
    const activity = document.getElementById("history-page");
    const div = document.createElement("div");
    div.innerHTML = `
  <p class="bg-[#F4F7FF] text-start p-3 rounded-lg mt-4">You have Complete The Task ${title} at ${time}</p>
      `;
    activity.appendChild(div);
  });
}

task("shopease-btn", "Fix Mobile Button Issue");
task("cloudsync-btn", "Add Dark Mode");
task("swiftpay-btn", "Optimize Home page");
task("meta-btn", "Add new emoji 🤲");
task("google-llc-btn", "Integrate OpenAI API");
task("glassdoar-btn", "Improve Job searching");

const clearhistory = document
  .getElementById("history-clear")
  .addEventListener("click", function () {
    document.getElementById("history-page").innerHTML = "";
  });
