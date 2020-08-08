// dados
const proffys = [
    {
        name: "Polyana Cristina",
        avatar: "https://avatars1.githubusercontent.com/u/51519638?s=460&u=7a7dd8e584724e13365d719bd7b513fbe5c628d9&v=4",
        whatsapp: "89999-9999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Cristina sousa",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89999-9999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "CF/88",
        cost: "50",
        weekday: [2],
        time_from: [1720],
        time_to: [2220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position]
}
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    //contem tds as informações que estão sendo enviadas pela pág req.query
    console.log(req.query)
    const filters = req.query;
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    console.log(data);
    // Se tiver dados 
    const isNotEmpty = Object.keys(data).length > 0;
    if(isNotEmpty){
        data.subject = getSubject(data.subject);
        console.log("Adicionei Dados")
        // Adicionar os dados a lista de proffys
        proffys.push(data);

        return res.redirect("/study");
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

// servidor
const express = require('express');
const server = express();

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
// Inicio e configuração do servidor 
/* Configurar arquivos estáticos (css, script, images)*/
    server.use(express.static("public"))
//Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
// Start do servidor
    .listen(5500);
