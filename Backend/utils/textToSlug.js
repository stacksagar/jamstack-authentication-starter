function textToSlug(text = "") {
  return text
    ?.trim()
    .toLowerCase()
    .split(" ")
    .filter((text) => text)
    .join("-")
    .split("?")
    .join("-")
    .split("&")
    .join("-and-")
    .split("/")
    .join("-");
}

module.exports = textToSlug;
