import express from "express";
import {
  createPengguna,
  deletePengguna,
  getAllPengguna,
  getAllPenggunaById,
  updatePengguna,
} from "../controllers/PenggunaController.js";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/ProfileController.js";
import {
  createBuku,
  deleteBuku,
  getAllBukus,
  getBukuShelf,
  updateBuku,
} from "../controllers/BukuController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("test");
});

// Penggunas
router.get("/Penggunas", getAllPengguna);
router.get("/Pengguna", getAllPenggunaById);
router.post("/Penggunas/create", createPengguna);
router.put("/Penggunas/update", updatePengguna);
router.delete("/Penggunas/Delete", deletePengguna);

// profile
router.get("/profiles", getAllProfile);
router.get("/profile", getProfileById);
router.post("/profile", createProfile);
router.put("/profile", updateProfile);
router.delete("/profile", deleteProfile);

// Buku
router.get("/Bukus", getAllBukus);
router.get("/Buku", getBukuShelf);
router.get("/Buku", createBuku);
router.get("/Buku", updateBuku);
router.get("/Buku", deleteBuku);

export default router;
