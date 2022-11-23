let delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
const input = document.querySelectorAll(
  "[data-testid=SearchBox_Search_Input]"
)[0];
input.addEventListener("keydown", (event) => {
  if (
    event.key === "Backspace" &&
    input.parentElement.children.length === 2 &&
    [" ", ""].includes(event.target.value)
  ) {
    input.parentElement.children[1].remove();
    input.style.paddingLeft = "0px";
  }
  if (event.target.value.includes(":from")) {
    event.target.value = event.target.value.replace(":from", "");
    let p = document.createElement("p");
    input.parentElement.style.position = "relative";
    p.style.position = "absolute";
    p.style.color = "gray";
    p.style.top = "-5px";
    p.style.left = "10px";
    p.innerHTML = ":from";
    input.style.paddingLeft = "50px";
    input.parentElement.appendChild(p);
  }

  let listener = new MutationObserver((mutations, _) => {
    let searchResults = document.querySelectorAll(
      "[data-testid=typeaheadResult]"
    );

    if (input.parentElement.children.length === 2) {
      searchResults.forEach((element) => {
        console.log(
          element.getElementsByClassName(
            "css-1dbjc4n r-1awozwy r-18u37iz r-1v8amoe"
          ).length
        );

        if (
          element.children[0].children[0].className !==
          "css-18t94o4 css-1dbjc4n r-1ny4l3l r-ymttw5 r-1f1sjgu"
        ) {
          element.children[0].remove();
        } else if (
          element.getElementsByClassName(
            "css-1dbjc4n r-1awozwy r-18u37iz r-1v8amoe"
          )[0].innerText !== "Following"
        ) {
          element.children[0].remove();
        }
      });
    }
  });
  listener.observe(document.getElementById("typeaheadDropdown-1"), {
    attributes: true,
    childList: true,
    subtree: true,
  });
});
