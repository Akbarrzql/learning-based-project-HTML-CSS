// create function object
function Person(nis, name, email, alamat, jurusan) {
  this.nis = nis;
  this.name = name;
  this.email = email;
  this.alamat = alamat;
  this.jurusan = jurusan;
}

const amri = new Person(111, "Amri Iqra", "amriiqosamudraalfatihah@gmail.com", "Nusa Tenggara Barat", "PPLG");
//Value
amri.value = `NIS : ${amri.nis}
Nama : ${amri.name} 
Email : ${amri.email} 
Alamat : ${amri.alamat} 
Jurusan : ${amri.jurusan}`;

const akbar = new Person(888, "Akbar Rizqullah", "akbarrizqullah228@gmail.com", "Semarang", "PPPLG");
//Value
akbar.value = `NIS : ${akbar.nis}
Nama : ${akbar.name}
Email : ${akbar.email}
Alamat : ${akbar.alamat}
Jurusan : ${akbar.jurusan}`;

const jati = new Person(333, "Sejati Adli", "sejatiadli@gmail.com", "Kudus", "PPLG");
//Value
jati.value = `NIS : ${jati.nis}
Nama : ${jati.name}
Email : ${jati.email}
Alamat : ${jati.alamat}
Jurusan : ${jati.jurusan}`;
const bimo = new Person(222, "Bimo", "bimoadibramantyo@gmail.com", "Tanggerang", "PPLG");
//Value
bimo.value = `NIS : ${bimo.nis}
Nama : ${bimo.name}
Email : ${bimo.email}
Alamat : ${bimo.alamat}
Jurusan : ${bimo.jurusan}`;

const firdaus = new Person(444, "Firdaus", "firdaus@gmail.com", "Kota Demak", "PPLG");
//Value
firdaus.value = `NIS : ${firdaus.nis}
Nama : ${firdaus.name}
Email : ${firdaus.email}
Alamat : ${firdaus.alamat}
Jurusan : ${firdaus.jurusan}`;
// button click
document.getElementById("btnnis").addEventListener("click", function () {
  // get value nis input
  let nisValue = document.getElementById("nis").value;
  //logic if else
  if (nisValue == amri.nis) {
    document.getElementById("result").value = amri.value;
  } else if (nisValue == akbar.nis) {
    document.getElementById("result").value = akbar.value;
  } else if (nisValue == jati.nis) {
    document.getElementById("result").value = jati.value;
  } else if (nisValue == bimo.nis) {
    document.getElementById("result").value = bimo.value;
  } else if (nisValue == firdaus.nis) {
    document.getElementById("result").value = firdaus.value;
  } else if (nisValue == "") {
    document.getElementById("result").value = "Masukan angka nis";
  } else {
    document.getElementById("result").value = "NIS tidak ditemukan";
  }
});
