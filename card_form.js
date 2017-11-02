<!--
function name_out(str){
		document.all.name_out.innerHTML	= str;
	}

function tribe_out(str){
		document.all.tribe_out.innerHTML="["+str+"]";
	}

function atk_out(str){
		document.all.atk_out.innerHTML	= str;
	}

function def_out(str){
		document.all.def_out.innerHTML	= str;
	}

function inst_out(str){
		document.all.inst_out.innerHTML	= str;
	}

function ChangeElement(element){
		document.form.elements.element_jpg.src = "pictures/element"+element+".png";
	}

function ChangeLevel(count){
	strHTML=""
	for(var i=1;i<=count;i++){
		strHTML=strHTML+"<img src='pictures/level.png'>"
	}
	document.all.level_out.innerHTML=strHTML;
}

function ChangeLevel_axiz(count){
	strHTML=""
	for(var i=1;i<=count;i++){
		strHTML=strHTML+"<img src='pictures/level_axiz.png' height='42'>"
	}
	document.all.level_out.innerHTML=strHTML;
}

function ChangeElement(element){
	var img_name="element"+element+".png";
	strHTML="<img src='pictures/" + img_name + "' width='60' height='60'>";
	document.all.element_out.innerHTML=strHTML;
}

function ChangeSpellType(type){
	strHTML="<img src='pictures/spell_type"+ type + ".png'>";
	document.all.type_out.innerHTML=strHTML;
}

function ChangeTrapType(type){
	strHTML="<img src='pictures/trap_type"+ type + ".png'>";
	document.all.type_out.innerHTML=strHTML;
}
-->
