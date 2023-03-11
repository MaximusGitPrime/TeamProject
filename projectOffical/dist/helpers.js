function handleNotEnoghCoins() {
    Swal.fire({
        title: "Not enough coins!",
        text: "You do not have enough coins to purchase this pack.",
        icon: "error",
        button: "OK"
    }).then(function () {
        packStoreContainer.classList.add("hide");
        pricingTable.classList.remove("hide");
    });
}
