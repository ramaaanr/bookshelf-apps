const isBookAlreadyInBookshelf = function (id) {
  console.log(document.getElementById(id) == null);
  console.log(id);
  if (document.getElementById(id) == null) {
    return false;
  }
  return true;
};

export { isBookAlreadyInBookshelf };
