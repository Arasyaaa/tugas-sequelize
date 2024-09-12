import Buku from "../../model/BukuModel.js";
import Profile from "../../model/ProfileModel.js";
import Pengguna from "../../model/PenggunaModel.js";

export default async function clean() {
  await Pengguna.destroy({
    where: {},
    force: true,
    cascade: true,
    restartIdentity: true,
  });
  await Profile.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Buku.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
