
Yhteensä 109.5h

| Päivämäärä    | Tunnit    | Mitä tuli tehtyä                       |
|:-------------:|:---------:|:---------------------------------------|
| 10.3.2018     | 0.5h      | Frontend konffausta                    |
| 12.3.2018     | 4h        | Frontend tyylittelyä, brainstorming    |
| 16.3.2018     | 4h        | HTML, CSS siistimistä, alkuperäisempi tyyli |
| 18.3.2018     | 3h        | Dataa haetaan nyt palvelimelta (json-server), navigoinnin alkeet, backend konffaus |
| 20.3.2018     | 1h        | Backendin tekemistä, Post model, posts controller, .rest pyyntö |
| 21.3.2018     | 5.5h      | Backend hyväksyy POST /api/posts, frontend hakee postit backendistä, postit listataan etusivulla, posteilla on päivämäärä ja se näytetään "hours ago" formaatissa https://i.imgur.com/6Pt26KK.png, post näyttää kaiken datan mitä pystyy, post, community ja user luonti ja näiden populointi, ensimmäinen testi, kirjautumislomake |
| 22.3.2018     | 4h        | Kirjautuminen sisään ja ulos graaffisen käyttöliittymän kautta, tyyliä muutettu, sivu näyttää kirjautumislomakkeen vain kun käyttäjä ei ole kirjautunut sisään. Sisäisesti testattu "default communities" |
| 23.3.2018     | 1.5h      | Postien "added n days ago" virhe korjattu, mobiilille ja selaimelle eri näkymät |
| 24.3.2018     | 4h        | Enimmäkseen BrowserApp.js ja CSS refaktorointia. Sass otettiin käyttöön ja luin miten CSS kannattaa kirjoittaa. Sivulla nyt myös hakukenttä ja footer jossa linkki tähän github repoon |
| 25.3.2018     | 7h        | Toiminnallisuutta komponentteihin, communitien näyttäminen sivulla, voi navigoida communityjen välillä, paranneltu reducers/post reduceria, css overhaul + parempi mobile view, korjattu pitkään rikki ollut uloskirjautuminen |
| 28.3.2018     | 4h        | Backendiä enimmäkseen, postien ja communityjen luonti vaatii authorization tokenin. Yksittäisten postien, communityjen ja userien haku mahdollista, testejä paljon, eksistentiaalinen kriisi frontendin kanssa, ei ole vielä commitoitu |
| 30.3.2018     | 3h        | Backend testejä |
| 31.3.2018     | 5h        | Lisää backend testejä, mongoose version error kesti pitkään |
| 1.4.2018      | 5.5h      | Testikattavuus ~87.5%, comment model, jälleen kerran uusi lookki, topbar, dropdownmenu, css ja dropdownmenu omaan komponenttiin, community navigation |
| 2.4.2018      | 3h        | Frontendin perusasioiden säätämistä. Navigointia mietitty, reducereita muokattu. Nyt reducereita käytetään "oikein". Backendiin communityn postien hakeminen |
| 3.4.2018      | 4h        | PostList näyttää viestin jos Posteja ei ole. Footer on palautettu ennalleen. Communityn sisäinen navigaatio toimii niinkuin pitäisi, eli siis Hot, New etc ja Submit napit |
| 4.4.2018      | 5.5h      | Submit formit kummankin tyylisille posteille, /login sivu jossa on kirjautumis- ja rekisteröitymislomake, kirjautuminen onnistuu tätä kautta ja uloskirjautuminen toimii. Bugikorjauksia. Sivun kautta voi nyt lisätä postin |
| 5.4.2018      | 4h        | Yksittäiseen textpostin toiminnallisuus. CSS siistimistä. Backend: posteillä täytyy olla tietyn pituinen title ja body |
| 6.4.2018      | 2h        | Siirrytty käyttämään reactin Link-komponettia, siirretty Post-komponentin ajanlaskemistoiminto omaan moduuliin, lisätty auttavaa CSS |
| 9.4.2018      | 2.5h      | Bugi näkymien kanssa korjattu, Loading komponentti. Post komponettia refaktoroitu. Link postit lisättävissä sivun kautta. Paranneltu dropdownmenu | 
| 13.4.2018     | 1h        | ExpandedPost näyttää linkpostin urlin, submit sivut vaatii kirjautumisen |
| 14.4.2018     | 2h        | Kirjautumissivu näyttää backendistä tulevan virheen. Rekisteröityminen sivun kautta. Poistettu turhaa koodia. Käyttäjän ja communityt näkyy yläpalkin dropdownvalikoissa, hakupalkin alkeet |
| 15.4.2018     | 2h        | Rekisteörinnissä vaaditaan salasana kahdesti, käyttäjänimen saatavuus tarkistetaan reaaliajassa, valmistauduttu etusivuun |'
| 16.4.2018     | 3h        | communityyn navigointi tapahtuu dropdownmenusta, reducerit refaktoroitu: store.js määrittelyt yhtenäisempiä, poistettu käyttämättömiä muuttujia. Navigation.js muutettu uudelleenkäytettäväksi, navigaatio lisätty profiilisivulle (/u/:username) |
| 17.4.2018     | 3h        | Uusi navigaatio, sidebar on moduläärinen, profiili, poistettu virheitä |
| 18.4.2018     | 4h        | Luettu reactin dokumentaatiota, getAllPostsFromUser, korjattu useita ongelmia, kommenttituki posteihin
| 20.4.2018     | 1h        | Communityn luonti, kommenttien tyyli |
| 21.4.2018     | 4.5h      | Tallennetaan kaikki teksti myös in lowercase jotta voidaan helposti hakea tietoa. Kommenttien luonti, näkyy sivulla, kommenttien "collapsointi?", deep population backendissä, service funktioiden nimet selvennetty |
| 23.4.2018     | 1.5h      | Kommenteihin vastaaminen mahdollista, kommenteille "hours ago" viesti, kommentit renderöidään oikein |
| 26.4.2018     | 4h        | Tyylimuutoksia, refaktorointia, luettu paljon miten pitäisi asioita reactillä tehdä. |
| 3.5.2018      | 3.5h      | Lisää tietoa Postista yksittäisen postin näkymään. Moderatorlista sivupalkkiin. Kommentinpoistonappi kommentteihin. Conditional-komponentti. Kommentinpoistonappi näkyy vain kommentin omistajalle ja communityn moderaattoreille. react-reduxin connectin kanssa oli ongelmia rekursiivisen kommentti-komponentin kanssa |
| 4.5.2018      | 2.0h      | getCommentsByCommentId frontend & backend. Kommenttien kanssa iso bugi jonka korjaamisessa oli vaikeuksia. |
| 5.5.2018      | 1.0h      | Kommenttien poisto backendissä, kommentien kanssa korjattu toinen iso bugi. |
| 6.5.2018      | 3.0h      | Kommentti lisätään vihdoin sivulle välittömäsi kun vastataan kommenttiin, kommentin refaktorointi + bugikorjaus, kommentin voi poistaa kommentin kirjoittaja tai communityn moderaattori |
| 31.5.2018     | 1.0h      | Frontend buildattu ja heitetty herokuun. Backend: Pieni fix, GET /* heitti 404 |

