/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variabel ke ES6 variable
 */
import fruits from "../Models/Fruit.js";

/**
 * TODO 4:
 * - Buat method index.
 * - Refactor function ke ES6 Arrow Function
 * - Tampilkan data fruits.
 *
 * @hint - Gunakan looping for of
 */

// saya memindahkan looping for of ke function displayFruits agar bisa digunakan di function2 lain
const index = () => displayFruits();

/**
 * TODO 5:
 * - Buat method store.
 * - Refactor function ke ES6 Arrow Function
 * - Menambahkan data baru ke array fruits.
 *
 * @param {string} name - Nama buah.
 *
 * @hint - Gunakan method push
 */
const store = (name) => {
  if (!name) return "Parameter harus diisi !";

  fruits.push(name);

  displayFruits();
}

/**
 * TODO 6:
 * - Buat method update.
 * - Refactor function ke ES6 Arrow Function
 * - Memperbarui data fruits.
 *
 * @param {number} position - Posisi atau index yang ingin diupdate.
 * @param {string} name - Nama buah yang baru.
 */
const update = (position = -1, name) => {
  if (position < 0 || !name) return console.log( "Index posisi atau parameter harus diisi !");

  fruits[position] = name;

  displayFruits();
}

/**
 * TODO 7:
 * - Buat method destroy.
 * - Refactor function ke ES6 Arrow Function
 * - Menghapus data fruits.
 *
 * @param {number} position - Posisi atau index yang ingin dihapus
 *
 * @hint - Gunakan method splice
 */
function destroy(position = -1) {
  if (position < 0) return console.log("Index posisi harus diisi !");

  fruits.splice(position, 1);

  displayFruits();
}

/*
function to display fruits
*/
function displayFruits() {
  for (const fruit of fruits) {
    console.log(fruit)
  }
}

/**
 * TODO 8: export method index, store, update, dan destroy
 */
export {
  index,
  store,
  update,
  destroy
};
