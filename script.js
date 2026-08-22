const worldForm = document.getElementById("worldForm");

const result = document.getElementById("result");


worldForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const worldName =
        document.getElementById("worldName").value;

    const seed =
        document.getElementById("seed").value;

    const gamemode =
        document.getElementById("gamemode").value;

    const difficulty =
        document.getElementById("difficulty").value;

    const players =
        document.getElementById("players").value;

    const serverType =
        document.getElementById("serverType").value;

    const structures =
        document.getElementById("structures").checked;

    const cheats =
        document.getElementById("cheats").checked;

    const pvp =
        document.getElementById("pvp").checked;


    const gamemodeNames = {
        survival: "Sobrevivência",
        creative: "Criativo",
        adventure: "Aventura"
    };


    const difficultyNames = {
        peaceful: "Pacífico",
        easy: "Fácil",
        normal: "Normal",
        hard: "Difícil"
    };


    const accessName =
        serverType === "premium"
            ? "Apenas contas oficiais"
            : "Clientes não-premium permitidos";


    result.innerHTML = `
        <strong>✓ Configuração criada!</strong>

        <br><br>

        <strong>Mundo:</strong>
        ${worldName}

        <br>

        <strong>Seed:</strong>
        ${seed || "Aleatória"}

        <br>

        <strong>Modo:</strong>
        ${gamemodeNames[gamemode]}

        <br>

        <strong>Dificuldade:</strong>
        ${difficultyNames[difficulty]}

        <br>

        <strong>Jogadores:</strong>
        ${players}

        <br>

        <strong>Estruturas:</strong>
        ${structures ? "Sim" : "Não"}

        <br>

        <strong>Cheats:</strong>
        ${cheats ? "Sim" : "Não"}

        <br>

        <strong>PvP:</strong>
        ${pvp ? "Ativado" : "Desativado"}

        <br>

        <strong>Acesso:</strong>
        ${accessName}

        <br><br>

        <span>
            Esta versão é apenas a interface.
            Para criar o mundo Minecraft de verdade,
            precisamos conectar este formulário ao backend
            do seu servidor.
        </span>
    `;


    result.classList.remove("hidden");


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
