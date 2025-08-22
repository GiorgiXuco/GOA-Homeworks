import { getInputData } from "./script.js";

setInterval(() => {
    const data =getInputData();
    if (data.input1 || data.input2){
        console.log("Imported in second file:",data);
    }
},2000);