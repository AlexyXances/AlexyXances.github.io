let gold = document.getElementById("gold");
let elix = document.getElementById("elix");
// text
let tgold = document.querySelector(".tgold");
let telix = document.querySelector(".telix");

function login() {
  swal({
    title: "Yakin bro siap dapet?",
    text: `GOLD: ${gold.value}\n ELIXIR: ${elix.value}`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      setTimeout(() => {
        window.location = "login.html";
      }, 2000);
      swal("ANJAYY MABARR!", {
        icon: "success",
      });
    } else {
      swal("KENAPA GA JADI BROOOO!", {
        icon: "error",
      });
    }
  });
}

function notif() {
  swal("Contoh aja ini mah Ustad Hadi, Gaboleh phising dosa tau-_-.").then(
    (value) => {
      swal(`Love you Muach ${value}`);
    }
  );
}

tgold.innerHTML = "0";
telix.innerHTML = "0";

gold.addEventListener("input", function () {
  //   tgold.innerHTML = gold.value;
  tgold.textContent = `${gold.value}`;
});
elix.addEventListener("input", function () {
  //   tgold.innerHTML = gold.value;
  telix.textContent = `${gold.value}`;
});
