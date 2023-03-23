let a = document.getElementsByTagName("div")[0];

a.insertAdjacentHTML("beforebegin", "<h6> beforebegin </h6>");
a.insertAdjacentHTML("afterbegin", "<h6>afterbegin</h6>");
a.insertAdjacentHTML("beforeend", "<h6>beforeend</h6>");
a.insertAdjacentHTML("afterend", "<h6>afterend</h6>");

a.remove();
