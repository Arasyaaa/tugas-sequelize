import Buku from "../model/BukuModel.js";
import Profile from "../model/ProfileModel.js";
import Pengguna from "../model/PenggunaModel.js";
import clean from "./helpers/clean.js";

const createSeeder = async () => {
  await clean();
  const Pengguna1 = await Pengguna.create({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const Pengguna2 = await Pengguna.create({
    name: "Jane Doer",
    email: "johne.doe@bakso.com",
  });

  const profile = await Profile.create({
    age: 30,
    address: "kebon jeruk jalan pinggiran no 13",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae ex id iure commodi optio sed exercitationem nostrum odit magni? Corporis accusantium consectetur nostrum inventore minus hic itaque cumque? Et.",
    PenggunaId: Pengguna1.dataValues.id,
  });

  const profile2 = await Profile.create({
    age: 20,
    address: "vila dago jalan pinggiran no 20",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil maxime optio nobis dolorum sequi, similique facere! Veritatis, consequuntur? Asperiores perferendis accusantium alias temporibus ex?",
    PenggunaId: Pengguna2.dataValues.id,
  });

  const Buku1 = await Buku.create({
    name: "Buku masak",
    page: 12,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    PenggunaId: Pengguna1.dataValues.id,
  });

  const Buku2 = await Buku.create({
    name: "Buku ngoding",
    page: 18,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    PenggunaId: Pengguna1.dataValues.id,
  });

  const Buku3 = await Buku.create({
    name: "Buku komik",
    page: 30,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    PenggunaId: Pengguna2.dataValues.id,
  });

  const foundProfile = await Profile.findOne({
    where: {
      PenggunaId: Pengguna.dataValues.id,
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

  const findBukuByPengguna = await Buku.findAll({
    where: {
      PenggunaId: Pengguna.dataValues.id,
    },
    attributes: ["name", "page", "description"],
    include: [
      {
        model: Pengguna,
        as: "Pengguna",
        required: true,
        attributes: ["name", "email"],
      },
    ],
  });
  const findBukuByPengguna2 = await Buku.findAll({
    where: {
      PenggunaId: Pengguna2.dataValues.id,
    },
    attributes: ["name", "page", "description"],
    include: [
      {
        model: Pengguna,
        as: "Pengguna",
        required: true,
        attributes: ["name", "email"],
      },
    ],
  });

  return {
    Pengguna,
    profile,
    Buku,
    foundProfile,
    findBukuByPengguna,
    findBukuByPengguna2,
  };
};
const {
  Pengguna,
  profile,
  Buku,
  foundProfile,
  findBukuByPengguna,
  findBukuByPengguna2,
} = await createSeeder();

console.log("profile john");
console.log(foundProfile.dataValues);
console.log("punya si john");
findBukuByPengguna.map((data) => {
  console.log(data.dataValues);
});
console.log("punya si jane");
findBukuByPengguna2.map((data) => {
  console.log(data.dataValues);
});
