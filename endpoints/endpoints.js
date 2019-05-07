//END POINTS: COMPRA
var express=require('express');
var app=express();
app.get('/api/v1/tickets/compra/clientes',function(req,res){
	var pepe=[{name: "pepe", edad:15},{name:"Juan", edad: 12},{name: "Maria", edad:25},{name:"Dennis", edad: 19}];
    console.log("Datos de los clientes")
    res.statusCode=200;
	res.json(pepe);
});

app.get('/api/v1/tickets/compra/cliente/id001/datos',function(req,res){
	var pepe={name: "pepe", edad:15};
    console.log("Datos del cliente 001")
    res.statusCode=200;
	res.json(pepe);
});

app.get('/api/v1/tickets/compra/cliente/codigocompra',function(req,res){
	var pepe=[{codigo:"12BDFR"},{codigo:"A56BCD"},{codigo:"A45HFW"}];
    console.log("Datos del codigo de compra ");
    res.statusCode=200;
	res.json(pepe);
});


app.get('/api/v1/tickets/compra/cliente/codigocompra/numerotickets',function(req,res){
	var pepe=[{n_ticket:"001"},{n_ticket:"002"},{n_ticket:"003"}];
    console.log("Datos del numero de tickets");
    res.statusCode=200;
	res.json(pepe);
});

app.listen(3000,function(){
    console.log('Esta listo');
});