document.addEventListener("DOMContentLoaded",() => {
    const select = document.querySelector("select")
    const form = document.querySelector("#addform")
    const article1 = document.querySelector("#caractéristiques1")
    const article2 = document.querySelector("#caractéristiques2")
    const imgweap = document.querySelector("#imgWeap")
    const supprBtn = document.querySelector("#ButtonSuppr") 
    var cleanerlist = document.querySelectorAll(".listJS")

    var cont = 0
    var contlist = 0

//LISTE-------------------------------------------------------------
    list()
    function list(){
        fetch("/list")
        .then((res) => {
            return  res.json()
        })
        .then((list) => {
            // if (contlist != 0) {
                cleanerlist = document.querySelectorAll(".listJS")
                for (var i = 0; i <= cleanerlist.length; i++) {
                    // console.log(cleanerlist.length)
                    // console.log(i)
                    // console.log(select.firstChild)
                    if (select.hasChildNodes())
                        select.removeChild(select.firstChild)
                }
            // }
            // contlist++

            for(let stuff of list)
                display(stuff)
        })
    }
    function display(stuff){
        Crea("option",select,stuff.name,id=null, classs="listJS")
    }
    
    

//Recherche-------------------------------------------------------------
    document.getElementById("slct").onchange = function(e){
        nameStuff = document.getElementById('slct').value;
        //console.log("name: "+nameStuff);
        if (cont != 0) {
            cleaner1 = document.querySelectorAll(".caraJS1")
            cleaner2 = document.querySelectorAll(".caraJS2")
            for (i in cleaner1) {
                if(i <= 11){ article1.removeChild(cleaner1[i]) }
            }
            for (i in cleaner2) {
                if(i <= 11){ article2.removeChild(cleaner2[i]) }
            }
        }
        cont++
        recherche(nameStuff)
    };

    function recherche(nameStuff){
        fetch("/recherche/"+nameStuff)
        .then((res) => {
            return  res.json()
        })
        .then((weap) => {
            //console.log(weap)
            imgweap.src = "../images/weap/" + weap[0].name +".png"
            Crea("libelle",article1,"Type : " + weap[0].type,id=null, classs="caraJS1")
            Crea("libelle",article1,"Prix : " + weap[0].price,id=null, classs="caraJS1")
            Crea("libelle",article1,"Vitesse de course : " + weap[0].max_player_speed,id=null, classs="caraJS1")
            Crea("libelle",article1,"Pénétration : " + weap[0].penetration,id=null, classs="caraJS1")
            Crea("libelle",article1,"Dégats : " + weap[0].damage,id=null, classs="caraJS1")
            Crea("libelle",article1,"Portée : " + weap[0].range,id=null, classs="caraJS1")
            Crea("libelle",article1,"Rechargement couché : " + weap[0].recovery_time_crouch,id=null, classs="caraJS1")
            Crea("libelle",article1,"Rechargement debout : " + weap[0].recovery_time_stand,id=null, classs="caraJS1")
            Crea("libelle",article1,"Nombre de balles : " + weap[0].bullets,id=null, classs="caraJS1")
            Crea("libelle",article1,"Diffusion : " + weap[0].spread,id=null, classs="caraJS1")
            Crea("libelle",article1,"Imprécision couché : " + weap[0].inaccuracy_crouch,id=null, classs="caraJS1")
            Crea("libelle",article2,"Imprécision debout : " + weap[0].inaccuracy_stand,id=null, classs="caraJS2")
            Crea("libelle",article2,"Imprécision en saut : " + weap[0].inaccuracy_jump,id=null, classs="caraJS2")
            Crea("libelle",article2,"Imprécision en tire : " + weap[0].inaccuracy_fire,id=null, classs="caraJS2")
            Crea("libelle",article2,"Imprécision en mouvement : " + weap[0].inaccuracy_move,id=null, classs="caraJS2")
            Crea("libelle",article2,"Imprécision en atterissant : " + weap[0].inaccuracy_land,id=null, classs="caraJS2")
            Crea("libelle",article2,"Recul : " + weap[0].recoil_angle,id=null, classs="caraJS2")
            Crea("libelle",article2,"Recul variance : " + weap[0].recoil_angle_variance,id=null, classs="caraJS2")
            Crea("libelle",article2,"Recul magnitude : " + weap[0].recoil_magnitude,id=null, classs="caraJS2")
            Crea("libelle",article2,"Recul magnitude variance : " + weap[0].recoil_magnitude_variance,id=null, classs="caraJS2")
            Crea("libelle",article2,"Arme en auto : " + weap[0].full_auto,id=null, classs="caraJS2")
            Crea("libelle",article2,"Dégats sur l'armure : " + weap[0].armor_ratio,id=null, classs="caraJS2")
        })
    }


//ADD-------------------------------------------------------------
    form.querySelector("button").addEventListener("click", () =>{
        let name = form.querySelector("input[name=name]").value
        let Type = form.querySelector("input[name=Type]").value
        let Prix = form.querySelector("input[name=Prix]").value
        let Vitesse = form.querySelector("input[name=Vitesse]").value
        let Pénétration = form.querySelector("input[name=Pénétration]").value
        let Dégats = form.querySelector("input[name=Dégats]").value
        let Portée = form.querySelector("input[name=Portée]").value
        let Rechargementc = form.querySelector("input[name=Rechargementc]").value
        let Rechargementd = form.querySelector("input[name=Rechargementd]").value
        let Nombre = form.querySelector("input[name=Nombre]").value
        let Diffusion = form.querySelector("input[name=Diffusion]").value
        let Imprécisionc = form.querySelector("input[name=Imprécisionc]").value
        let Imprécisiond = form.querySelector("input[name=Imprécisiond]").value
        let Imprécisions = form.querySelector("input[name=Imprécisions]").value
        let Imprécisiont = form.querySelector("input[name=Imprécisiont]").value
        let Imprécisionm = form.querySelector("input[name=Imprécisionm]").value
        let Imprécisiona = form.querySelector("input[name=Imprécisiona]").value
        let Recul = form.querySelector("input[name=Recul]").value
        let Reculv = form.querySelector("input[name=Reculv]").value
        let Reculm = form.querySelector("input[name=Reculm]").value
        let Reculmv = form.querySelector("input[name=Reculmv]").value
        let auto = form.querySelector("input[name=auto]").value
        let Dégatsarmure = form.querySelector("input[name=Dégatsarmure]").value


        let data = {
            name: name,
            type: Type,
            price: Prix,
            max_player_speed : Vitesse,
            penetration: Pénétration,
            damage: Dégats,
            range: Portée,
            recovery_time_crouch: Rechargementc,
            recovery_time_stand: Rechargementd,
            bullets: Nombre,
            spread: Diffusion,
            inaccuracy_crouch: Imprécisionc,
            inaccuracy_stand: Imprécisiond,
            inaccuracy_jump: Imprécisions,
            inaccuracy_fire: Imprécisiont,
            inaccuracy_move: Imprécisionm,
            inaccuracy_land: Imprécisiona,
            recoil_angle: Recul,
            recoil_angle_variance: Reculv,
            recoil_magnitude: Reculm,
            recoil_magnitude_variance: Reculmv,
            full_auto: auto,
            armor_ratio: Dégatsarmure
        }

        fetch("/add",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then((response) => {
            return  response.json()
            })
            .then((stuff) => {
                display(stuff)
                //console.log(stuff)
            })

        //remise à 0 c'est plus jolie
        form.querySelector("input[name=name]").value = ""
        form.querySelector("input[name=Type]").value = ""
        form.querySelector("input[name=Prix]").value = ""
        form.querySelector("input[name=Vitesse]").value = ""
        form.querySelector("input[name=Pénétration]").value = ""
        form.querySelector("input[name=Dégats]").value = ""
        form.querySelector("input[name=Portée]").value = ""
        form.querySelector("input[name=Rechargementc]").value = ""
        form.querySelector("input[name=Rechargementd]").value = ""
        form.querySelector("input[name=Nombre]").value = ""
        form.querySelector("input[name=Diffusion]").value = ""
        form.querySelector("input[name=Imprécisionc]").value = ""
        form.querySelector("input[name=Imprécisiond]").value = ""
        form.querySelector("input[name=Imprécisions]").value = ""
        form.querySelector("input[name=Imprécisiont]").value = ""
        form.querySelector("input[name=Imprécisionm]").value = ""
        form.querySelector("input[name=Imprécisiona]").value = ""
        form.querySelector("input[name=Recul]").value = ""
        form.querySelector("input[name=Reculv]").value = ""
        form.querySelector("input[name=Reculm]").value = ""
        form.querySelector("input[name=Reculmv]").value = ""
        form.querySelector("input[name=auto]").value = ""
        form.querySelector("input[name=Dégatsarmure]").value = ""
    })


//SUPPRIMER-------------------------------------------------------------
    supprBtn.addEventListener("click", () =>{
        idStuff = document.getElementById('slct').value;
        suppr(idStuff)
        list()
    })

    function suppr(idStuff){
        //console.log("namesuppr : " +idStuff )
        fetch("/suppr/"+idStuff)
        .then((res) => {
            //console.log(res)
            return  res.json()
        })
        .then((stuff) => {
            // console.log(stuff)
            // display(stuff)
        })

    }

//UPDATE-------------------------------------------------------------
// function update(idstuff){
//     fetch("/update/"+idstuff,{
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify(data)
//     })
//     .then((response) => {
//         return  response.json()
//     })
//     .then((stuff) => {
//             display(stuff)
//             //console.log(stuff)
//     })
// }





})//DOMContentLoad--------
function Crea(tag, parent, text=null,  id=null, classs=null) {

    let element = document.createElement(tag)
    if (text)
        element.appendChild(document.createTextNode(text))
    parent.appendChild(element)
    if (id)
        element.id = id
    if (classs)
        element.classList.add(classs)
    return element

}


//--------------------------------------LIGHTBOX-----------------------------------------------
//Faire agrandire une image quand on clique dessus (marche avec plusieurs images)
document.addEventListener("DOMContentLoaded", function(event) {
    let $images = document.querySelectorAll(".img");
    for(let $image of $images){
        $image.addEventListener("click", showLightbox);
    }
    window.addEventListener("resize", resizeLightbox);
    // On crée un écouteur sur le clavier
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 27) { // Code de la touche (Esc = 27)
            dismissLightbox();
        }
    });
});

function showLightbox() {
    let $image = this;
    // On crée une variable contenant le body et on lui ajoute un overflowY hidden
    let $body = document.querySelector('body');
    $body.style.overflowY = "hidden";
    // On crée le background semi-transparent et on l'ajoute au body
    let $bg = document.createElement("div");
    $bg.id = "bg";
    $body.appendChild($bg);
    // RAJOUTER Ferme la box si on clique sur le fond noir :D (c'est mieux)
    $bg.addEventListener('click', function(event) {
        dismissLightbox();
    });
    // On crée l'élément lightbox et on l'ajoute au body
    let $lightbox = document.createElement("div");
    $lightbox.id = "lightbox";
    $body.appendChild($lightbox);
    // On crée une div contenant un X et on l'ajoute au body
    let $btn_close = document.createElement("div");
    $btn_close.id = "dismiss";
    $btn_close.innerHTML = "X";
    $btn_close.addEventListener("click", dismissLightbox); // On ajoute un évènement au click sur body qui désactivera la lightbox
    $lightbox.appendChild($btn_close);
    // On crée un élément image dont la source est la même que la petite image et on l'ajoute au body
    let $img_big = document.createElement("img");
    $img_big.id = "img_big";
    $img_big.src = $image.src;
    $lightbox.appendChild($img_big);
    // On crée un élément p qui contient le text de l'information header
    let $textLOGO = $image.getAttribute("logo-data-text");
    let $paragraphLOGO = document.createElement("div");
    $paragraphLOGO.id = "lightbox-text-LOGO";
    $paragraphLOGO.innerHTML = $textLOGO;
    if ($image.hasAttribute("logo-data-text")) {
        $lightbox.appendChild($paragraphLOGO);
    }
    // On calcul la taille de la lightbox dès sa création
    resizeLightbox();
}

// Détruit la lightbox et tout son contenu.
function dismissLightbox() {
    let $bg = document.getElementById("bg");
    let $lightbox = document.querySelector('#lightbox');
    let $body = document.querySelector('body')
    $body.style.overflowY = "visible"; // On retire le overflow
    $body.removeChild($bg); // On supprime le bg
    $body.removeChild($lightbox); // On supprime la lightbox
}

// Redimensionne la lightbox selon la hateur min ou max de la lightbox.
function resizeLightbox() {
    let $lightbox = document.querySelector("#lightbox"); //
    if ($lightbox) {
        let $windowWidth = window.innerWidth; // largeur totale de la fenêtre en px
        let $windowHeight = window.innerHeight; // hauteur totale de la fenêtre en px
        let $margin = 30;
        // On compare largeur et hauteur de fenêtre puis on met la plus petite valeur dans une variable
        let $value = $windowWidth >= $windowHeight ? $windowHeight : $windowWidth;
        // On affecte la plus petite valeur en largeur et hauteur de la lightbox pour éviter la déformation
        $lightbox.style.height = $value - $margin + "px";
        $lightbox.style.width = $value - $margin + "px";
    }
}
