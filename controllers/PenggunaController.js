import Pengguna from "../model/PenggunaModel.js";

export async function getAllPengguna(req, res) {
  try {
    const data = await Pengguna.findAll();

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPenggunaById(req, res) {
  const id = req.query.id; // Mendapatkan ID dari req.query.id
  console.log(id);
  try {
    const data = await Pengguna.findOne({
      where: { id }, // Mencari pengguna berdasarkan ID
    });

    if (data.length === 0) {
      return res.status(404).send("Pengguna not found");
    }

    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving Pengguna");
  }
}

export async function createPengguna(req, res) {
  try {
    const newPengguna = await Pengguna.create(req.body);
    res.status(201).send(newPengguna);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function updatePengguna(req, res) {
  try {
    const updatedPengguna = await Pengguna.update(req.body, {
      where: { id: req.query.id },
    });
    if (updatedPengguna[0] === 0) {
      return res.status(404).send("Pengguna not found");
    }
    res.send("Pengguna updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating Pengguna");
  }
}

export async function deletePengguna(req, res) {
  try {
    const deletedPengguna = await Pengguna.destroy({
      where: { id: req.query.id },
    });
    if (deletedPengguna === 0) {
      return res.status(404).send("Pengguna not found");
    }
    res.send("Pengguna deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting Pengguna");
  }
}
