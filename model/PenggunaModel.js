import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Profile from "./ProfileModel.js";
import Buku from "./BukuModel.js";

const Pengguna = db.define(
  // memberikan nama model dengan nama Pengguna, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama table yang jamak
  "Pengguna",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Pengguna",
  }
);

// relasi Pengguna ke profile

// artinya Pengguna hanya memiliki satu Profile
Pengguna.hasOne(Profile, {
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// Profile dimiliki satu Pengguna
Profile.belongsTo(Pengguna, {
  foreignKey: "PenggunaId",
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// relasi Pengguna ke Buku

// artinya Pengguna bisa memiliki banyak buku
Pengguna.hasMany(Buku, {
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// Buku dimiliki satu Pengguna
Buku.belongsTo(Pengguna, {
  foreignKey: "PenggunaId",
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

export default Pengguna;
