let exportData = {};

document.getElementById("submitBtn").addEventListener("click", () => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    exportedData = { input1, inut2};
    console.log("Exported:", exportedData);
});

export function getInputData(){
    return exportData;
}