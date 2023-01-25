import { debounce } from "./debounce.js";

function searchName() {
  const searchInput = document.querySelector(".search-field__search-input");
  const val = searchInput.value.trim().toLowerCase();
  const searchedItems = document.querySelectorAll(".item");
  if (val !== "") {
    searchedItems.forEach(function (item) {
      if (item.innerText.toLowerCase().search(val) === -1) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  } else {
    searchedItems.forEach(function (item) {
      item.classList.remove("hide");
    });
  }
}

export const debouncedSearch = () => {
  const searchInput = document.querySelector(".search-field__search-input");
  searchInput.addEventListener("keyup", debounce(searchName, 1000));
};
