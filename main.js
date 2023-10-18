document.title = "project-js-8";
document.body.style.cssText = `
margin: 0;
padding: 0;
font-family: sans-serif;
`;
let div = document.querySelector("div");
div.style.cssText = `
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 30px;
margin: 30px;
`;
// online
let online_text = document.createElement("div");
online_text.innerHTML = "Online Now";
online_text.style.color = "green";
// offline
let offline_text = document.createElement("div");
offline_text.innerHTML = "Offline Now";
offline_text.style.color = "gray";
let ul_offline = document.createElement("ul");
let li_offline_one = document.createElement("li");
li_offline_one.innerHTML = "Checking the network cables, modem, and router";
let li_offline_two = document.createElement("li");
li_offline_two.innerHTML = "Reconnecting to Wi-Fi";
let li_offline_three = document.createElement("li");
li_offline_three.innerHTML = "Running Windows Network Diagnostics";
ul_offline.append(li_offline_one);
ul_offline.append(li_offline_two);
ul_offline.append(li_offline_three);
let reload_btn = document.createElement("a");
reload_btn.innerHTML = "Reload";
reload_btn.style.cssText = `
padding: 10px;
outline: none;
background-color: #666;
color: #fff;
border-radius: 20px;
cursor: pointer;
font-size: 15px;
`;
reload_btn.onclick = function (params) {
        window.location.reload();
}
offline_text.append(ul_offline);
offline_text.append(reload_btn);
window.onload = function (params) {
        if(window.navigator.onLine) {
                console.log("User Is Online");
                div.append(online_text);
        } else {
                console.log("User Is Offline");
                div.append(offline_text);
        };
        if (window.innerWidth <= 343) {
                div.style.fontSize = "10px";
        };
};
window.addEventListener("online", function (params) {
        console.log("User Is Online");
        div.append(online_text);
        offline_text.remove();
});
window.addEventListener("offline", function (params) {
        console.log("User Is Offline");
        div.append(offline_text);
        online_text.remove();
});