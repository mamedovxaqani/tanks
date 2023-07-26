import headerContainer from "./headerContainer";

function Header() {
  const headerTag = document.createElement("header");
  headerTag.classList.add("header");

  headerTag.append(headerContainer());

  return headerTag;
}

export default Header;
