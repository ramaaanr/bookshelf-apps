const isStorageExist = () => {
  if (typeof Storage === undefined) {
    alert("BROWSER TIDAK MENDUKUNG");
    return false;
  }
  return true;
};

export { isStorageExist };
