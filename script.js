const output = document.getElementById("output");
const input = document.getElementById("input");

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const command = input.value.trim();
        input.value = "";
        output.innerHTML += `<div>> ${command}</div>`;
        processCommand(command);
    }
});

function processCommand(command) {
    output.innerHTML += `<div>Resultado del comando: "${command}"</div>`;
}
