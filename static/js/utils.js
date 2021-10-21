// Pour Quitter la page

function QuitPage(){
	open(location, '_self').close();
}


// Effet écriture sur terminal (0 = ajouter / 1 = supprimer)
// Toute balise avec la classe 'terminal' sera affecté

function TerminalEffect(r){
	var t = r;
	var elems = document.getElementsByClassName('terminal');
	for (var i = 0; i< elems.length;i++){
		var elem = elems[i];
		if (t === 0) {
			elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1) +"|";
		}else{
			elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1)+" ";
		}
	}


	setTimeout(function(){TerminalEffect((t === 0) ? 1:0); }, 500);
}

// Ajoute deux espace pour les classes 'terminal'
function AddSpaceToTerminal(){
	var elems = document.getElementsByClassName('terminal');
	for (var i = 0; i< elems.length;i++){
		elem.innerHTML += "  ";
	}	
}

AddSpaceToTerminal();
TerminalEffect(0);
