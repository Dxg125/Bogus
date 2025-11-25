var block = $.parseJSON(atob(``)).block;
Object.keys(block).map(e => {
  if (block[e].options.is_sc == 1 && (!block[e].options.scnr || block[e].options.servicenr)) {console.warn(`${e} is error`);}
  if (block[e].options.is_sc == 0 && (block[e].options.scnr || !block[e].options.servicenr)) {console.warn(`${e} is error`);}
  //console.log(e, JSON.stringify(block[e].options));
}); true;

##################################################################################################

var Base64 = ``;
var block = $.parseJSON(atob(Base64));

Object.keys(block.block).map(e => {
  if (block.block[e].options.is_sc == 1 && (!block.block[e].options.scnr || block.block[e].options.servicenr)) {
  	console.warn(`${e} is error`);
  	delete block.block[e].options.servicenr;
  }
  if (block.block[e].options.is_sc == 0 && (block.block[e].options.scnr || !block.block[e].options.servicenr)) {
  	console.warn(`${e} is error`);
  	delete block.block[e].options.scnr;
  }
  //console.log(e, JSON.stringify(block[e].options));
}); true;


var back = btoa(JSON.stringify(block));

##################################################################################################

var check = () => {
	Object.keys(block.block).map(e => {
		if (block.block[e].options.is_sc == 1 && (!block.block[e].options.scnr || block.block[e].options.servicenr)) {
			console.warn(`${e} is error`);
			delete block.block[e].options.servicenr;
		}
		if (block.block[e].options.is_sc == 0 && (block.block[e].options.scnr || !block.block[e].options.servicenr)) {
			console.warn(`${e} is error`);
			delete block.block[e].options.scnr;
		}
  /* console.log(e, JSON.stringify(block[e].options)); */
	});
};

var Base64 = ``;
var block = $.parseJSON(atob(Base64));
check();

var back = btoa(JSON.stringify(block));
var block = $.parseJSON(atob(back));
check();

