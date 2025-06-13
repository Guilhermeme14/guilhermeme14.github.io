document.addEventListener("DOMContentLoaded", () => {
  const dataInicio = new Date("2017-03-23T19:30:00");

  function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('contador').innerHTML = `
      <p>Se aturando há:</p>
      <h2>${dias} dias, ${horas}h ${minutos}min ${segundos}s 💞</h2>
    `;
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();
});
