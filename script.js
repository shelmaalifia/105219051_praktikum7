const dataKota = {
    'Jawa Barat' : `
    <option disabled="disabled" selected="selected">Pilih Kota</option>
    <option>Bandung</option>
    <option>Banjar</option>
    <option>Bekasi</option>
    <option>Bogor</option>
    <option>Cimahi</option>
    <option>Cirebon</option>
    <option>Depok</option>
    <option>Sukabumi</option>
    <option>Tasikmalaya</option>
    `,
    'Jawa Timur' : `
    <option disabled="disabled" selected="selected">Pilih Kota</option>
    <option>Batu</option>
    <option>Blitar</option>
    <option>Kediri</option>
    <option>Madiun</option>
    <option>Malang</option>
    <option>Mojokerto</option>
    <option>Pasuruan</option>
    <option>Probolinggo</option>
    <option>Surabaya</option>
    `,
    'Jawa Tengah' : `
    <option disabled="disabled" selected="selected">Pilih Kota</option>
    <option>Magelang</option>
    <option>Pekalongan</option>
    <option>Salatiga</option>
    <option>Semarang</option>
    <option>Surakarta</option>
    <option>Tegal</option>
    `,
    'Banten' : `
    <option disabled="disabled" selected="selected">Pilih Kota</option>
    <option>Tangerang</option>
    <option>Tangerang Selatan</option>
    <option>Cilegon</option>
    <option>Serang</option>
    `,
    'Yogyakarta' : `
    <option disabled="disabled" selected="selected">Pilih Kota</option>
    <option>Yogyakarta</option>
    `
}

const pilihProvinsi = document.querySelector('#pilihProvinsi');
const pilihKota = document.querySelector('#pilihKota');
const hasil = document.querySelector('#hasil');
const checkbox = document.getElementById('checkbox');
const html = document.querySelector('html');

const function_pilihProvinsi = () => {
    let provinsiValue = pilihProvinsi.value;

    pilihKota.removeAttribute('disabled');
    pilihKota.innerHTML = dataKota[provinsiValue];

    hasil.innerText = `Pilih Kota!`;
}

const function_pilihKota = () => {
    let provinsiValue = pilihProvinsi.value;
    let kotaValue = pilihKota.value;

    hasil.innerText = `Terdapat kota ${kotaValue} di provinsi ${provinsiValue}!`
}


pilihProvinsi.addEventListener('change', function_pilihProvinsi);
pilihKota.addEventListener('change', function_pilihKota);

checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
});



