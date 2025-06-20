const paragrafo = document.getElementById("texto");

    const textoOriginal = paragrafo.textContent;

    paragrafo.addEventListener("mouseover", function() {
      paragrafo.textContent = "Socorro";
    });

    paragrafo.addEventListener("mouseout", function() {
      paragrafo.textContent = textoOriginal;
    });