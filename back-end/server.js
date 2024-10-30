const express = require('express');
const app = express()
const port = 3001
const  mysql = require('mysql')
const cors = require ('cors');
app.use(cors())

// Middleware pour analyser le JSON dans le corps des requêtes
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Exemple d'application écoutant sur le port ${port}`)
})

//intégration de BDD

const db = mysql.createConnection({
    host: 'localhost',  // Ne pas mettre localhost:3000 ici
    user: 'root',  // Remplace par ton utilisateur MySQL
    password: 'Descodeuses',  // Remplace par ton mot de passe MySQL
    database: 'frigo_recettes'  // Remplace par ton nom de base de données
});


//exception jetée en cas d'erreur
db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

// Exécutez une requête SQL
/*db.query('SELECT * FROM produits', (err, results) => {
    if (err) {
    console.error('Erreur lors de la requête SQL :', err);
    return;
    }
    console.log('Résultats :', results);
});

  // Fermez la connexion après l'exécution
db.end();


// A VERIFIER Objectif : faire une fonction qui exécute une requête SQL et extraire un élément de ma BDD 
db.query(db, (err, result, fields) => {
    if (err instanceof Error) {
    console.log(err);
    return;
    }

    console.log(result);
    console.log(fields);
});*/


//endpoint recette
/*app.get("/recettes", (req,res) => {
    db.query("SELECT * FROM recettes", function (err, results, fields) {
        console.log("Erreur", err);
        console.log("C'est mon résultat", results);
        console.log("Mes recettes", fields);   
        res.send((results));
    });
});*/

//endpoint produits
app.get("/produits", (req,res) => {
    db.query("SELECT * FROM recettes", (err, results, fields) => {
        console.log("Erreur", err);
        console.log("C'est mon résultat", results);
        console.log("Mes recettes", fields);   
        res.send((results));
    });
});

app.post("/produits", (req,res) => {
    db.query("SELECT * FROM recettes", (err, results, fields) => {
        console.log("Erreur", err);
        console.log("C'est mon résultat", results);
        console.log("Mes recettes", fields);   
        res.send((results));
    });
});

