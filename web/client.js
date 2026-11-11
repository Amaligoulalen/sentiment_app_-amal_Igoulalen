document.getElementById("btn").addEventListener("click", async () => {
    const texte = document.getElementById("avis").value;
    const res = document.getElementById("resultat");
    res.textContent = "Chargement...";
    try {
        const reponse = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: texte })
        });
        const data = await reponse.json();
        res.textContent = "Verdict : " + data.label + " (" + data.score + ")";
    } catch (e) {
        res.textContent = "Erreur : API injoignable.";
    }
});