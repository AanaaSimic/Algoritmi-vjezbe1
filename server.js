const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aupvj1"
});

con.connect(function (err) {
    if (err) throw err;


    app.get('/dodaj_igraca/:ime_prezime/:godiste/:broj_dresa', (req, res) => {
        let ime_prezime = req.params.ime_prezime
        let godiste = req.params.godiste
        let broj_dresa = req.params.broj_dresa

        var sql = "INSERT INTO igraci (ime_prezime, godiste, broj_dresa) VALUES ('" + ime_prezime + "', " + godiste + ", " + broj_dresa + ")";
        console.log(sql)
        con.query(sql, function (err, result) {
            if (err) res.send('Greška!' + err)
            res.send('Dodano!')
        });
    })
});

app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})
