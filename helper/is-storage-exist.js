/**
 * *isStorageExist*
 * fungsi digunakan untuk melakukan pemeriksaan apakah
 * browser mendukung Web Storage
 * */
const isStorageExist = function () {
  if (typeof Storage === undefined) {
    alert("BROWSER TIDAK MENDUKUNG");
    return false;
  }
  return true;
};

export { isStorageExist };
