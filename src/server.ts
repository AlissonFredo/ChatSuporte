import express from "express";


const app = express();//create servidor

app.get("/", (request, response) => {
    return response.json({
        message: "Ola NLW 05!",
});
})

app.post("/", (request, response) => {
    return response.json({
        message: "Usuario salvo com sucesso!",
    });
});

app.listen(3333, () => console.log("Server is running on port 3333"));//start servidor