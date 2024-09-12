import Buku from "../model/BukuModel.js";
import Pengguna from "../model/PenggunaModel.js";

export async function getAllBukus(req, res) {
  try {
    const data = await Buku.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getBukuShelf(req, res) {
  const { id } = req.query;
  try {
    const data = await Buku.findOne({
      where: {
        PenggunaId: id,
      },
      include: [
        {
          model: Pengguna,
          as: "Pengguna",
          required: true,
          attributes: ["name", "email"],
        },
      ],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function createBuku(req, res) {
  const { title, author, PenggunaId } = req.body;
  try {
    const newBuku = await Buku.create({ title, author, PenggunaId });
    res.status(201).send(newBuku);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating Buku");
  }
}

export async function updateBuku(req, res) {
  const { id } = req.query;
  const { title, author, PenggunaId } = req.body;
  try {
    const [updated] = await Buku.update(
      { title, author, PenggunaId },
      {
        where: { id },
      }
    );
    if (updated) {
      const updatedBuku = await Buku.findOne({ where: { id } });
      return res.send(updatedBuku);
    }
    return res.status(404).send("Buku not found");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating Buku");
  }
}

export async function deleteBuku(req, res) {
  const { id } = req.query;
  try {
    const deleted = await Buku.destroy({
      where: { id },
    });
    if (deleted === 0) {
      return res.status(404).send("Buku not found");
    }
    res.send("Buku deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting Buku");
  }
}
