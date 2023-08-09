


  // :::::::::::::::AFFICHER LA DATE DU JOURS::::::::::::::
function afficherDateDuJour() {
      var dateElement = document.querySelector('.datejour');
      var date = new Date();
      var options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
      var dateString = date.toLocaleDateString(undefined, options);
      dateElement.textContent ='Bamako le ' + dateString;
    } 
    // Appeler la fonction pour afficher la date du jour au chargement de la page
    afficherDateDuJour();


// :::::RECUPERATION NOM-PRENOM::::::::::
function recupererNomPrenom() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var nomprenomElement = document.getElementById("nomprenom");
  nomprenomElement.innerHTML = "Doit : " + nom + " " + prenom;
}
// Appeler la fonction lorsque les champs de saisie changent
document.getElementById("nom").addEventListener("input", recupererNomPrenom);
document.getElementById("prenom").addEventListener("input", recupererNomPrenom);
// Appeler la fonction une fois au chargement de la page pour afficher les valeurs initiales
recupererNomPrenom();



// :::::::::::RECUPERATION CHAMPS VILLE SAISI::::::::::
function recupererVille() {
  var ville = document.getElementById("ville").value;
  var villequartElement = document.getElementById("villequart");
  villequartElement.innerHTML = "Ville/Quartier : " + ville;
}
document.getElementById("ville").addEventListener("input", recupererVille);
recupererVille();


// :::::::::::RECUPERATION CHAMPS NUMERO SAISI::::::::::
function recupererNumero() {
  var numero = document.getElementById("numero").value;
  var telephoneElement = document.getElementById("telephone");
  telephoneElement.innerHTML = "Téléphone : " + numero;
}
// Appeler la fonction lorsque le champ de saisie du numéro de téléphone change
document.getElementById("numero").addEventListener("input", recupererNumero);
// Appeler la fonction une fois au chargement de la page pour afficher la valeur initiale du numéro de téléphone
recupererNumero();

// :::::::::::RECUPERATION CHAMPS NOMBRE ETAGE SAISI::::::::::
function recupererNombEtatage() {
  var numbremaison = document.getElementById("numbremaison").value;
  var Tuyaux63pressionElement = document.getElementById("Tuyaux63pression");
  Tuyaux63pressionElement.innerHTML = numbremaison;
}
// Appeler la fonction lorsque le champ de saisie du numéro de téléphone change
document.getElementById("numbremaison").addEventListener("input", recupererNombEtatage);
// Appeler la fonction une fois au chargement de la page pour afficher la valeur initiale du numéro de téléphone
recupererNombEtatage();


// ::::::::::::RECUPERATION CHAMPS TYPE PLOMBERIE EN FONCTION SELECT::
function afficherService() {
    // Récupérer l'élément avec l'id "typeplomberie"
    var typePlomberieElement = document.getElementById("typeplomberie");

    // Récupérer l'élément avec l'id "service"
    var serviceElement = document.getElementById("service");

    // Vérifier si l'élément avec l'id "typeplomberie" et une valeur sélectionnée existe
    if (typePlomberieElement && typePlomberieElement.selectedIndex !== -1) {
        // Récupérer la valeur sélectionnée de l'élément "typeplomberie"
        var selectedOption = typePlomberieElement.options[typePlomberieElement.selectedIndex].text;

        // Afficher le contenu de "selectedOption" dans l'élément "service"
        if (serviceElement) {
            serviceElement.innerHTML = "Service: " + selectedOption;
        }
    } else {
        // Si aucune valeur n'est sélectionnée, masquer le contenu de l'élément "service"
        if (serviceElement) {
            serviceElement.innerHTML = "";
        }
    }
}
// Appeler la fonction lorsque la liste déroulante change de valeur
document.getElementById("typeplomberie").addEventListener("change", afficherService);
// Appeler la fonction au chargement de la page
afficherService();


// ::::::::::::RECUPERATION CHAMPS NOMBRE ET PROBLEME::::::::::::::::::
function afficherNombre() {
    // Récupérer l'élément avec l'id "problemeplomberie"
    var problemeplomberieElement = document.getElementById("problemeplomberie");

    // Récupérer l'élément avec l'id "nombre"
    var nombreElement = document.getElementById("nombre");

    // Vérifier si l'élément avec l'id "problemeplomberie" et une valeur sélectionnée existe
    if (problemeplomberieElement && problemeplomberieElement.selectedIndex !== -1) {
        // Récupérer la valeur sélectionnée de l'élément "problemeplomberie"
        var selectedOption = problemeplomberieElement.options[problemeplomberieElement.selectedIndex].text;

        // Récupérer la valeur saisie dans l'élément avec l'id "numbre"
        var valeurSaisie = document.getElementById("numbre").value;

        // Afficher le contenu de "selectedOption" et la valeur saisie dans l'élément "nombre"
        if (nombreElement) {
            nombreElement.innerHTML = "Nombre: " + valeurSaisie + " " + selectedOption + "(s)";
        }
    } else {
        // Si aucune valeur n'est sélectionnée, masquer le contenu de l'élément "nombre"
        if (nombreElement) {
            nombreElement.innerHTML = "";
        }
    }
}
// Appeler la fonction lorsque la liste déroulante change de valeur
document.getElementById("problemeplomberie").addEventListener("change", afficherNombre);
// Appeler la fonction lorsque la valeur saisie change dans l'élément "numbre"
document.getElementById("numbre").addEventListener("input", afficherNombre);
// Appeler la fonction au chargement de la page
afficherNombre();



// ::::::::::::::::CHAMPS TYPE AFFICHAGE EN FONCTION SELECTION::::::::::::
function afficherChampsType() {
    var selectService = document.getElementById("selectservice");
    var champsType = document.getElementById("champsType");

    // Récupérer la valeur sélectionnée dans le menu déroulant
    var selectedValue = selectService.value;

    // Vérifier si la valeur sélectionnée est "serviceinstallation"
    if (selectedValue === "serviceinstallation") {
      // Afficher le champ "champsType"
      champsType.style.display = "block";
    } else {
      // Masquer le champ "champsType"
      champsType.style.display = "none";
    }
  }
  // Appeler la fonction lorsque la sélection du menu déroulant change
  document.getElementById("selectservice").addEventListener("change", afficherChampsType);
  // Appeler la fonction une fois au chargement de la page pour afficher/masquer le champ "champsType" en fonction de la valeur initiale du menu déroulant
  afficherChampsType();


// ::::::::::::::::CHAMPS TYPE PLOMBERIE AFFICHAGE EN FONCTION SELECTION::::::::::::
  function afficherChampsBatiment() {
  var selectChampsType = document.getElementById("typeplomberie");
  var champsForage = document.getElementById("champsForage");

  // Récupérer la valeur sélectionnée dans le menu déroulant
  var selectedValue = selectChampsType.value;

  // Vérifier si la valeur sélectionnée est "batimentselect"
  if (selectedValue === "batimentselect") {
    // Afficher le champ "champsForage"
    champsForage.style.display = "block";
  } else {
    // Masquer le champ "champsForage"
    champsForage.style.display = "none";
  }
}
// Appeler la fonction lorsque la sélection du menu déroulant "typeplomberie" change
document.getElementById("typeplomberie").addEventListener("change", afficherChampsBatiment);
// Appeler la fonction une fois au chargement de la page pour afficher/masquer le champ "champsForage" en fonction de la valeur initiale du menu déroulant "typeplomberie"
afficherChampsBatiment();


// ::::::::::::::::CHAMPS PROBLEME AFFICHAGE AFFICHAGE EN FONCTION SELECTION::::::::::::
function afficherEnFonctionSelection() {
    var problemePlomberie = document.getElementById("problemeplomberie").value;
    var champsDecoration = document.getElementById("champsdecoration");
    var champsNombreEtage = document.getElementById("champsnombreetage");

    // Vérifier si la sélection est "toiltteselect" ou "cuisieselect"
    if (problemePlomberie === "toiltteselect" || problemePlomberie === "cuisieselect") {
        // Afficher l'id "champsdecoration"
        champsDecoration.style.display = "block";
        // Masquer l'id "champsnombreetage"
        champsNombreEtage.style.display = "none";
    } else if (problemePlomberie === "chateauselect") {
        // Afficher l'id "champsnombreetage"
        champsNombreEtage.style.display = "block";
        // Masquer l'id "champsdecoration"
        champsDecoration.style.display = "none";
    }
}
// Appeler la fonction lorsque la sélection du menu déroulant "problemeplomberie" change
document.getElementById("problemeplomberie").addEventListener("change", afficherEnFonctionSelection);



// :::::::::::::::::CHAMPS TYPE DECORATION AFFICHAGE EN FONCTION DE SELECT::
function afficherChampsDecorationEtNombre() {
  var problemePlomberie = document.getElementById("problemeplomberie").value;
  var selectDecoration = document.getElementById("selectdecoration").value;
  var champstypedecoration = document.getElementById("champstypedecoration");
  var champsnombre = document.getElementById("champsnombre");

  // Vérifier si les sélections correspondent aux valeurs spécifiées
  if ((problemePlomberie === "toiltteselect" || problemePlomberie === "cuisieselect") && selectDecoration === "standartselect") {
    // Afficher l'id "champstypedecoration"
    champstypedecoration.style.display = "block";
    // Afficher l'id "champsnombre"
    champsnombre.style.display = "block";
  } else {
    // Masquer l'id "champstypedecoration"
    champstypedecoration.style.display = "none";
    // Masquer l'id "champsnombre"
    champsnombre.style.display = "none";
  }
}
// Appeler la fonction lorsque les sélections des menus déroulants "problemeplomberie" et "selectdecoration" changent
document.getElementById("problemeplomberie").addEventListener("change", afficherChampsDecorationEtNombre);
document.getElementById("selectdecoration").addEventListener("change", afficherChampsDecorationEtNombre);
// Appeler la fonction une fois au chargement de la page pour afficher/masquer les éléments en fonction des valeurs initiales des menus déroulants
afficherChampsDecorationEtNombre();



// :::::::::::::::::::AFFICHE TABLEAU TOILETTE:::::::::::::::::::::::
function afficherElement() {
  var problemePlomberie = document.getElementById("problemeplomberie").value;
  var selectDecoration = document.getElementById("selectdecoration").value;
  var typeDecoration = document.getElementById("typedecotionAvecSans").value;
  var tabeaucuisans = document.getElementById("tabeaucuisans");
  var tabeaucuiavec = document.getElementById("tabeaucuiavec");
  var buttonToilCuisine = document.getElementById("buttonToilCuisine");
  var ToitSans1 = document.getElementById("ToitSans1");
  var ToitAvec1 = document.getElementById("ToitAvec1");
  var CuiSans2 = document.getElementById("CuiSans2");
  var CuiAvec2 = document.getElementById("CuiAvec2");
  // Vérifier les conditions pour afficher les éléments
  if (problemePlomberie === "toiltteselect" && selectDecoration === "standartselect" && typeDecoration === "sanselect") {
    document.getElementById("tabeautoilsans").style.display = "block";
    buttonToilCuisine.style.display = "block";
    ToitSans1.style.display = "block";
    ToitAvec1.style.display = "none";
    CuiAvec2.style.display = "none";
    CuiSans2.style.display = "none";
    document.getElementById("tabeautoilavec").style.display = "none";
    document.getElementById("tabeaucuisans").style.display = "none";
    document.getElementById("tabeaucuiavec").style.display = "none";
  } else if (problemePlomberie === "toiltteselect" && selectDecoration === "standartselect" && typeDecoration === "avecselect") {
    document.getElementById("tabeautoilavec").style.display = "block";
    buttonToilCuisine.style.display = "block";
    ToitAvec1.style.display = "block";
    ToitSans1.style.display = "none";
    CuiAvec2.style.display = "none";
    CuiSans2.style.display = "none";
    document.getElementById("tabeautoilsans").style.display = "none";
    document.getElementById("tabeaucuisans").style.display = "none";
    document.getElementById("tabeaucuiavec").style.display = "none";
  }
}
// Appeler la fonction lorsque les sélections des menus déroulants changent
document.getElementById("problemeplomberie").addEventListener("change", afficherElement);
document.getElementById("selectdecoration").addEventListener("change", afficherElement);
document.getElementById("typedecotionAvecSans").addEventListener("change", afficherElement);
// Appeler la fonction une fois au chargement de la page pour afficher/masquer les éléments en fonction des valeurs initiales des menus déroulants
afficherElement();


// :::::::::::::::::::AFFICHE TABLEAU CUISINE:::::::::::::::::::::::
function afficherTabeaucuisans() {
  var problemePlomberie = document.getElementById("problemeplomberie").value;
  var selectDecoration = document.getElementById("selectdecoration").value;
  var selectTypeDecoration = document.getElementById("typedecotionAvecSans").value;
  var tabeaucuisans = document.getElementById("tabeaucuisans");
  var tabeaucuiavec = document.getElementById("tabeaucuiavec");
  var buttonToilCuisine = document.getElementById("buttonToilCuisine");
  var CuiSans2 = document.getElementById("CuiSans2");
  var CuiAvec2 = document.getElementById("CuiAvec2");
  var ToitSans1 = document.getElementById("ToitSans1");
  var ToitAvec1 = document.getElementById("ToitAvec1");

  if (problemePlomberie === "cuisieselect" && selectDecoration === "standartselect" && selectTypeDecoration === "sanselect") {
    tabeaucuisans.style.display = "block";
    buttonToilCuisine.style.display = "block";
    CuiSans2.style.display = "block";
    CuiAvec2.style.display = "none";
    tabeaucuiavec.style.display = "none";
    ToitSans1.style.display = "none";
    ToitAvec1.style.display = "none";
    document.getElementById("tabeautoilsans").style.display = "none";
    document.getElementById("tabeautoilavec").style.display = "none";
    
  } else if (problemePlomberie === "cuisieselect" && selectDecoration === "standartselect" && selectTypeDecoration === "avecselect") {
    tabeaucuisans.style.display = "none";
    tabeaucuiavec.style.display = "block";
    buttonToilCuisine.style.display = "block";
    CuiAvec2.style.display = "block";
    CuiSans2.style.display = "none";
    ToitSans1.style.display = "none";
    ToitAvec1.style.display = "none";
    document.getElementById("tabeautoilsans").style.display = "none";
    document.getElementById("tabeautoilavec").style.display = "none";
    
  } else {
    tabeaucuisans.style.display = "none";
    tabeaucuiavec.style.display = "none";
  }
}
// Appeler la fonction lorsque les sélections des menus déroulants changent
document.getElementById("problemeplomberie").addEventListener("change", afficherTabeaucuisans);
document.getElementById("selectdecoration").addEventListener("change", afficherTabeaucuisans);
document.getElementById("typedecotionAvecSans").addEventListener("change", afficherTabeaucuisans);


// :::::::::::AFFICHE NOMBRE (QUANTITE) DES PRODUITS DE TOILETTE ET CUISINE::::::::::
 // Fonction pour afficher la valeur saisie dans "numbre" dans les autres éléments
 function afficherValeurSaisie() {
    var valeurSaisie = document.getElementById("numbre").value;

    // Affichage dans les éléments avec les ids spécifiés
    document.getElementById("nombreToilSans1").textContent = valeurSaisie;
    document.getElementById("nombreToilSans2").textContent = valeurSaisie;
    document.getElementById("nombreToilSans3").textContent = valeurSaisie;
    document.getElementById("nombreToilAvec1").textContent = valeurSaisie;
    document.getElementById("nombreToilAvec2").textContent = valeurSaisie;
      document.getElementById("nombreCuiAvec1").textContent = valeurSaisie;
    document.getElementById("nombreCuiAvec2").textContent = valeurSaisie;
    document.getElementById("nombreCuiAvec3").textContent = valeurSaisie;
    document.getElementById("nombreCuiAvec4").textContent = valeurSaisie;
    document.getElementById("tabeaucuisans1").textContent = valeurSaisie;
   }


  // ::::::CALCUL PAR LIGNE LE MONTANT DES PRODUIT SANS CHAUF TOILETTE
  function calculateMontantProduitOilSans() {
    // Obtenir les valeurs des éléments "numbre" et "pUnittoilSans"
    var numbre = parseFloat(document.getElementById("numbre").value);
    var pUnittoilSans1 = parseFloat(document.getElementById("pUnittoilSans1").textContent.trim().replace(/\s+/g, ''));
    var pUnittoilSans2 = parseFloat(document.getElementById("pUnittoilSans2").textContent.trim().replace(/\s+/g, ''));
    var pUnittoilSans3 = parseFloat(document.getElementById("pUnittoilSans3").textContent.trim().replace(/\s+/g, ''));

    // Calculer le résultat
    var montantProduitOilSans1 = numbre * pUnittoilSans1;
    var montantProduitOilSans2 = numbre * pUnittoilSans2;
    var montantProduitOilSans3 = numbre * pUnittoilSans3;

    // Mettre à jour l'élément avec l'id "montantProduitoilSans" avec le résultat calculé
    document.getElementById("montantProduitoilSans1").textContent = montantProduitOilSans1.toLocaleString();
    document.getElementById("montantProduitoilSans2").textContent = montantProduitOilSans2.toLocaleString();
    document.getElementById("montantProduitoilSans3").textContent = montantProduitOilSans3.toLocaleString();
  }
  // Appeler la fonction pour effectuer le calcul initial
  calculateMontantProduitOilSans();
  // Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
  document.getElementById("numbre").addEventListener("input", calculateMontantProduitOilSans);
  // Attacher la fonction à l'événement "input" de l'élément avec l'id "pUnittoilSans"
  document.getElementById("pUnittoilSans1").addEventListener("input", calculateMontantProduitOilSans);
  document.getElementById("pUnittoilSans2").addEventListener("input", calculateMontantProduitOilSans);
  document.getElementById("pUnittoilSans3").addEventListener("input", calculateMontantProduitOilSans);



  // ::::::CALCUL PAR LIGNE LE MONTANT DES PRODUIT AVEC CHAUF TOILETTE
  function calculateMontantProduitOilAvec() {
    // Obtenir les valeurs des éléments "numbre" et "pUnittoilSans"
    var numbre = parseFloat(document.getElementById("numbre").value);
    var pUnittoilAvec1 = parseFloat(document.getElementById("pUnittoilAvec1").textContent.trim().replace(/\s+/g, ''));
    var pUnittoilAvec2 = parseFloat(document.getElementById("pUnittoilAvec2").textContent.trim().replace(/\s+/g, ''));
    var pUnittoilAvec3 = parseFloat(document.getElementById("pUnittoilAvec3").textContent.trim().replace(/\s+/g, ''));
    var pUnittoilAvec4 = parseFloat(document.getElementById("pUnittoilAvec4").textContent.trim().replace(/\s+/g, ''));

    // Calculer le résultat
    var montantProduitOilSans1 = numbre * pUnittoilAvec1;
    var montantProduitOilSans2 = numbre * pUnittoilAvec2;
    var montantProduitOilSans3 = numbre * pUnittoilAvec3;
    var montantProduitOilSans4 = numbre * pUnittoilAvec4;

    // Mettre à jour l'élément avec l'id "montantProduitoilSans" avec le résultat calculé
    document.getElementById("montantProduitoilAvec1").textContent = montantProduitOilSans1.toLocaleString();
    document.getElementById("montantProduitoilAvec2").textContent = montantProduitOilSans2.toLocaleString();
    document.getElementById("montantProduitoilAvec3").textContent = montantProduitOilSans3.toLocaleString();
    document.getElementById("montantProduitoilAvec4").textContent = montantProduitOilSans4.toLocaleString();
  }
  // Appeler la fonction pour effectuer le calcul initial
  calculateMontantProduitOilAvec();
  // Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
  document.getElementById("numbre").addEventListener("input", calculateMontantProduitOilAvec);
  // Attacher la fonction à l'événement "input" de l'élément avec l'id 
  document.getElementById("pUnittoilAvec1").addEventListener("input", calculateMontantProduitOilAvec);
  document.getElementById("pUnittoilAvec2").addEventListener("input", calculateMontantProduitOilAvec);
  document.getElementById("pUnittoilAvec3").addEventListener("input", calculateMontantProduitOilAvec);
  document.getElementById("pUnittoilAvec4").addEventListener("input", calculateMontantProduitOilAvec);



   // ::::::CALCUL PAR LIGNE LE MONTANT DES PRODUIT AVEC CHAUF CUISINE
   function calculateMontantProduicuisAvec() {
    // Obtenir les valeurs des éléments "numbre" et "pUnittoilSans"
    var numbre = parseFloat(document.getElementById("numbre").value);
    var pUnitcuisiAvec1 = parseFloat(document.getElementById("pUnitcuisiAvec1").textContent.trim().replace(/\s+/g, ''));
    var pUnitcuisiAvec2 = parseFloat(document.getElementById("pUnitcuisiAvec2").textContent.trim().replace(/\s+/g, ''));
    // Calculer le résultat
    var montantProduitCuisans1 = numbre * pUnitcuisiAvec1;
    var montantProduitCuisans2 = numbre * pUnitcuisiAvec2;
  
    // Mettre à jour l'élément avec l'id "montantProduitoilSans" avec le résultat calculé
    document.getElementById("montantProduitCuiAvec1").textContent = montantProduitCuisans1.toLocaleString();
    document.getElementById("montantProduitCuiAvec2").textContent = montantProduitCuisans2.toLocaleString();
     }
  // Appeler la fonction pour effectuer le calcul initial
  calculateMontantProduicuisAvec();
  // Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
  document.getElementById("numbre").addEventListener("input", calculateMontantProduicuisAvec);
  // Attacher la fonction à l'événement "input" de l'élément avec l'id 
  document.getElementById("pUnitcuisiAvec1").addEventListener("input", calculateMontantProduicuisAvec);
  document.getElementById("pUnitcuisiAvec2").addEventListener("input", calculateMontantProduicuisAvec);
  // document.getElementById("pUnitcuisiAvec3").addEventListener("input", calculateMontantProduicuisAvec);
  document.getElementById("pUnitcuisiAvec1").addEventListener("input", calculateMontantProduicuisAvec);


  

   // ::::::CALCUL PAR LIGNE LE MONTANT DES PRODUIT SANS CHAUF CUISINE
   function calculateMontantProduicuisSans() {
    // Obtenir les valeurs des éléments "numbre" et "pUnittoilSans"
    var numbre = parseFloat(document.getElementById("numbre").value);
    var pUnitcuisiSans1 = parseFloat(document.getElementById("pUnitcuisiSans1").textContent.trim().replace(/\s+/g, ''));
    // Calculer le résultat
    var montantProduitCuisans1 = numbre * pUnitcuisiSans1;
    // Mettre à jour l'élément avec l'id "montantProduitoilSans" avec le résultat calculé
    document.getElementById("montantProduitCuiSans1").textContent = montantProduitCuisans1.toLocaleString();
  }
  // Appeler la fonction pour effectuer le calcul initial
  calculateMontantProduicuisSans();
  // Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
  document.getElementById("numbre").addEventListener("input", calculateMontantProduicuisSans);
  // Attacher la fonction à l'événement "input" de l'élément avec l'id 
  document.getElementById("pUnitcuisiSans1").addEventListener("input", calculateMontantProduicuisSans);
  


// ::::::CALCUL LA SOMME DE TOUTES LES LIGNES DES PRODUITS SANS CHAUF TOILETTE
function calculerSommeToilSansChauf() {
  // Obtenir les valeurs saisies pour les différents éléments
  var numbre = parseFloat(document.getElementById("numbre").value);
  var pUnittoilSans1 = parseFloat(document.getElementById("pUnittoilSans1").textContent.trim().replace(/\s+/g, ''));
  var pUnittoilSans2 = parseFloat(document.getElementById("pUnittoilSans2").textContent.trim().replace(/\s+/g, ''));
  var pUnittoilSans3 = parseFloat(document.getElementById("pUnittoilSans3").textContent.trim().replace(/\s+/g, ''));
  var moeuvresToilSans = parseFloat(document.getElementById("moeuvresToilSans").textContent.trim().replace(/\s+/g, ''));

  // Calculer la somme des produits
  var montantProduitOilSans1 = numbre * pUnittoilSans1;
  var montantProduitOilSans2 = numbre * pUnittoilSans2;
  var montantProduitOilSans3 = numbre * pUnittoilSans3;

  // Calculer le montant total
  var montantTotalToilSans = montantProduitOilSans1 + montantProduitOilSans2 + montantProduitOilSans3 + moeuvresToilSans;


  // Mettre à jour l'élément avec l'id "montanttoilSans" avec le montant total calculé
  document.getElementById("montanttoilSans").textContent = montantTotalToilSans.toLocaleString();
  // Mettre à jour l'élément avec l'id "arretfacture1" avec le montant total calculé
  document.getElementById("arretfacture1").textContent = montantTotalToilSans.toLocaleString() + " fcfa";

}
// Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
document.getElementById("numbre").addEventListener("input", calculerSommeToilSansChauf);
// Vous pouvez également attacher la fonction aux événements "input" des autres éléments si leur valeur peut changer et influencer le montant total.
document.getElementById("pUnittoilSans1").addEventListener("input", calculerSommeToilSansChauf);
document.getElementById("pUnittoilSans2").addEventListener("input", calculerSommeToilSansChauf);
document.getElementById("pUnittoilSans3").addEventListener("input", calculerSommeToilSansChauf);
document.getElementById("moeuvresToilSans").addEventListener("input", calculerSommeToilSansChauf);
// Si vous souhaitez afficher automatiquement le montant total dès le chargement de la page, vous pouvez appeler la fonction directement.
calculerSommeToilSansChauf();



//   // ::::::CALCUL LA SOMME DE TOUTES LES LIGNES DES PRODUITS AVEC CHAUF TOILETTE
function calculerSommeToilAvecChauf() {
  // Obtenir les valeurs saisies pour les différents éléments
  var numbre = parseFloat(document.getElementById("numbre").value);
  var pUnittoilAvec1 = parseFloat(document.getElementById("pUnittoilAvec1").textContent.trim().replace(/\s+/g, ''));
  var pUnittoilAvec2 = parseFloat(document.getElementById("pUnittoilAvec2").textContent.trim().replace(/\s+/g, ''));
  var pUnittoilAvec3 = parseFloat(document.getElementById("pUnittoilAvec3").textContent.trim().replace(/\s+/g, ''));
  var pUnittoilAvec4 = parseFloat(document.getElementById("pUnittoilAvec4").textContent.trim().replace(/\s+/g, ''));
  var moeuvresToilAvec = parseFloat(document.getElementById("moeuvresToilAvec").textContent.trim().replace(/\s+/g, ''));

  // Calculer la somme des produits
  var montantProduitOilAvec1 = numbre * pUnittoilAvec1;
  var montantProduitOilAvec2 = numbre * pUnittoilAvec2;
  var montantProduitOilAvec3 = numbre * pUnittoilAvec3;
  var montantProduitOilAvec4 = numbre * pUnittoilAvec4;

  // Calculer le montant total
  var montantTotalToilAvec = montantProduitOilAvec1 + montantProduitOilAvec2 + montantProduitOilAvec3 +montantProduitOilAvec4 + moeuvresToilAvec;

  // Mettre à jour l'élément avec l'id "montanttoilSans" avec le montant total calculé
  document.getElementById("montanttoilAvec").textContent = montantTotalToilAvec.toLocaleString();
  // Mettre à jour l'élément avec id="arretfacture2" pour afficher le résultat dans le span
  document.getElementById("arretfacture2").textContent = montantTotalToilAvec.toLocaleString() + " fcfa";

}
// Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
document.getElementById("numbre").addEventListener("input", calculerSommeToilAvecChauf);
// Vous pouvez également attacher la fonction aux événements "input" des autres éléments si leur valeur peut changer et influencer le montant total.
document.getElementById("pUnittoilAvec1").addEventListener("input", calculerSommeToilAvecChauf);
document.getElementById("pUnittoilAvec2").addEventListener("input", calculerSommeToilAvecChauf);
document.getElementById("pUnittoilAvec3").addEventListener("input", calculerSommeToilAvecChauf);
document.getElementById("pUnittoilAvec4").addEventListener("input", calculerSommeToilAvecChauf);
document.getElementById("moeuvresToilAvec").addEventListener("input", calculerSommeToilAvecChauf);
// Si vous souhaitez afficher automatiquement le montant total dès le chargement de la page, vous pouvez appeler la fonction directement.
calculerSommeToilAvecChauf();



// ::::::CALCUL LA SOMME DE TOUTES LES LIGNES DES PRODUITS SANS CHAUF CUISINE
function calculerSommeCuiSansChauf() {
  // Obtenir les valeurs saisies pour les différents éléments
  var numbre = parseFloat(document.getElementById("numbre").value);
  var pUnitcuisiSans1 = parseFloat(document.getElementById("pUnitcuisiSans1").textContent.trim().replace(/\s+/g, ''));
  var moeuvresCuiSans = parseFloat(document.getElementById("moeuvresCuiSans").textContent.trim().replace(/\s+/g, ''));

  // Calculer la somme des produits
  var montantProduitCuiSans1 = numbre * pUnitcuisiSans1;
  // Calculer le montant total
  var montantTotalCuiSans = montantProduitCuiSans1 + moeuvresCuiSans;

  // Mettre à jour l'élément avec l'id "montantCuiSans" avec le montant total calculé
  document.getElementById("montantCuiSans").textContent = montantTotalCuiSans.toLocaleString();
  // Mettre à jour l'élément avec id="arretfacture3" pour afficher le résultat dans le span
  document.getElementById("arretfacture3").textContent = montantTotalCuiSans.toLocaleString() + " fcfa";

}
// Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
document.getElementById("numbre").addEventListener("input", calculerSommeCuiSansChauf);
// Vous pouvez également attacher la fonction aux événements "input" des autres éléments si leur valeur peut changer et influencer le montant total.
document.getElementById("pUnitcuisiSans1").addEventListener("input", calculerSommeCuiSansChauf);
document.getElementById("moeuvresCuiSans").addEventListener("input", calculerSommeCuiSansChauf);
// Si vous souhaitez afficher automatiquement le montant total dès le chargement de la page, vous pouvez appeler la fonction directement.
calculerSommeCuiSansChauf();



// ::::::CALCUL LA SOMME DE TOUTES LES LIGNES DES PRODUITS AVEC CHAUF TOILETTE
function calculerSommeCuiAvecChauf() {
  // Obtenir les valeurs saisies pour les différents éléments
  var numbre = parseFloat(document.getElementById("numbre").value);
  var pUnitcuisiAvec1 = parseFloat(document.getElementById("pUnitcuisiAvec1").textContent.trim().replace(/\s+/g, ''));
  var pUnitcuisiAvec2 = parseFloat(document.getElementById("pUnitcuisiAvec2").textContent.trim().replace(/\s+/g, ''));
  var moeuvresCuiAvec = parseFloat(document.getElementById("moeuvresCuiAvec").textContent.trim().replace(/\s+/g, ''));

  // Calculer la somme des produits
  var montantProduitCuiAvec1 = numbre * pUnitcuisiAvec1;
  var montantProduitCuiAvec2 = numbre * pUnitcuisiAvec2;
  // Calculer le montant total
  var montantTotalCuiAvec = montantProduitCuiAvec1 + montantProduitCuiAvec2 + moeuvresCuiAvec;

  // Mettre à jour l'élément avec l'id "montantProduitCuiAvec" avec le montant total calculé
  document.getElementById("montantTotalCuiAvec").textContent = montantTotalCuiAvec.toLocaleString();
  // Mettre à jour l'élément avec id="arretfacture4" pour afficher le résultat dans le span
  document.getElementById("arretfacture4").textContent = montantTotalCuiAvec.toLocaleString() + " fcfa";

}
// Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
document.getElementById("numbre").addEventListener("input", calculerSommeCuiAvecChauf);
// Vous pouvez également attacher la fonction aux événements "input" des autres éléments si leur valeur peut changer et influencer le montant total.
document.getElementById("pUnitcuisiAvec1").addEventListener("input", calculerSommeCuiAvecChauf);
document.getElementById("pUnitcuisiAvec2").addEventListener("input", calculerSommeCuiAvecChauf);
document.getElementById("moeuvresCuiSans").addEventListener("input", calculerSommeCuiAvecChauf);
// Si vous souhaitez afficher automatiquement le montant total dès le chargement de la page, vous pouvez appeler la fonction directement.
calculerSommeCuiAvecChauf();


// ::::::::CALCUL MONTANT MAIN D'OEUVRES DES DIFFERENTS TABLEAUX::::
function calculerEtAfficherMontant() {
  var numbre = parseFloat(document.getElementById("numbre").value);

  // Effectuer la multiplication par 
  var resultatmoeuvresToilSans = numbre * 30000;
  var resultatmoeuvresToilAvec = numbre * 75000;
  var resultatmoeuvresCuiSans = numbre * 20000;
  var resultatmoeuvresCuiAvec = numbre * 45000;

  // Afficher le résultat dans l'élément avec l'id 
  document.getElementById("moeuvresToilSans").textContent = resultatmoeuvresToilSans.toLocaleString();
  document.getElementById("moeuvresToilAvec").textContent = resultatmoeuvresToilAvec.toLocaleString();
  document.getElementById("moeuvresCuiSans").textContent = resultatmoeuvresCuiSans.toLocaleString();
  document.getElementById("moeuvresCuiAvec").textContent = resultatmoeuvresCuiAvec.toLocaleString();
}
// Attacher la fonction à l'événement "input" de l'élément avec l'id "numbre"
document.getElementById("numbre").addEventListener("input", calculerEtAfficherMontant);







// :::::::AFFICHE TOUT LE CONTENU PDF EN DE CLIQUE BUTTON
function afficherElements() {
      var numbreValue = document.getElementById("numbre").value;
      var typedecotionValue = document.getElementById("typedecotionAvecSans").value;
      var containairpdfElement = document.getElementById("containairpdf");
      var telechargerElement = document.getElementById("telecharger");

      if (numbreValue !== "" && typedecotionValue !== "") {
        // Afficher les éléments "containairpdf" et "telecharger"
        containairpdfElement.style.display = "block";
        telechargerElement.style.display = "block";
      } else {
        // Cacher les éléments "containairpdf" et "telecharger"
        containairpdfElement.style.display = "none";
        telechargerElement.style.display = "none";
      }
    }
    function afficherAlerte() {
      alert("Veuillez remplir les champs avant de cliquer sur le bouton.");
    }
    // Attacher la fonction afficherElements à l'événement "input" des éléments "numbre" et "typedecotionAvecSans"
    document.getElementById("numbre").addEventListener("input", afficherElements);
    document.getElementById("typedecotionAvecSans").addEventListener("input", afficherElements);
    // Attacher la fonction afficherAlerte à l'événement "click" de l'élément "buttonToilCuisine"
    document.getElementById("buttonToilCuisine").addEventListener("click", function () {
      var numbreValue = document.getElementById("numbre").value;
      var typedecotionValue = document.getElementById("typedecotionAvecSans").value;
      if (numbreValue === "" || typedecotionValue === "") {
        afficherAlerte();
      }
    });


    





// ::::::TELECHARGEMENT::::::::::::::::
// :::::::PDF TELECHARGEMENT/////////
// Transformation en image
window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

function makePDF() {
  html2canvas(document.querySelector("#capture"), {
    allowTaint: true,
    useCORS: true,
    scale: 1
  }).then(canvas => {
    var img = canvas.toDataURL("image/png");

    var doc = new jsPDF();
    doc.setFont('Arial');
    doc.save("plomberie.pdf");
  });
}

function downloadPDF() {
  var element = document.querySelector(".telechargerpdf");
  html2canvas(element, {
    scale: 2,
    scrollX: 0,
    scrollY: 0,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
    useCORS: true
  }).then(function (canvas) {
    var imgData = canvas.toDataURL("image/png", 1.0);
    var pdf = new jsPDF("p", "mm", "a4", true);
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("plomberie.pdf");
  });
}
document.getElementById("telecharger").addEventListener("click", function () {
  downloadPDF();
});



