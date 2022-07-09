let valorEmprestimo = document.getElementById("valor-emprestimo");
let inputEmprestimo = document.getElementById("input-range-emprestimo");

$(inputEmprestimo).on("input", function (e) {
    let val = e.target.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    valorEmprestimo.innerHTML = `R$ ${Number(val).toFixed(2)}`;
    valorEmprestimo.innerHTML = valorEmprestimo.innerHTML.replace(".", ",");
});

// inputEmprestimo.addEventListener('change', function (e) {
//     valorEmprestimo.innerHTML = `R$ ${e.target.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
// });
