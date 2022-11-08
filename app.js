let button = document.getElementById('btn');

button.addEventListener('click', () => {
  const waterIntake = Number(document.getElementById('water-intake').value);
  const weight = Number(document.getElementById('weight').value);
  const result = document.getElementById('output');
  let water_status = false;
  let weight_status = false;

  if (waterIntake === '' || isNaN(waterIntake) || waterIntake <= 0) {
    document.getElementById('water-intake-error').innerHTML =
      'Please provide a valid water intake';
  } else {
    document.getElementById('water-intake-error').innerHTML = '';
    water_status = true;
  }

  if (weight === '' || isNaN(weight) || weight <= 0) {
    document.getElementById('weight-error').innerHTML =
      'Please provide a valid weight';
  } else {
    document.getElementById('weight-error').innerHTML = '';
    weight_status = true;
  }

  if (water_status && weight_status) {
    const yourWaterNeeded = (weight * 30).toFixed(2);
    const waterDiff = (yourWaterNeeded - waterIntake).toFixed(2);

    if (waterDiff >= 0) {
      result.innerHTML = `Kamu masih kurang minum, kamu butuh ${waterDiff} ml lagi agar tetap segar`;
    } else {
      result.innerHTML = 'Kamu minum cukup cairan hari ini';
    }
  } else {
    alert('The form has errors');
    result.innerHTML = '';
  }
});

//function nanti
/*
let button = document.getElementById('btn');
button.addEventListener('click, () => {
  const beratBadan = Number(document.getElementById('beratBadan').value)
  const tinggi/jenisKelamin/yangLain/waterneeded (Ini Semua dari nilai input)
  buat array/object baru

  const kebutuhan air, isinya beratBadan * 0.33 ATAU document.getElementById('result/ouput')
})
*/

/*
Login implementation:


*/
