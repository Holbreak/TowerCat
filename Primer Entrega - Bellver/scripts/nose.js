//Solicitar al usuario que ingrese el precio de costo del producto al cual se le va a calcular el iva
while(true){
var precioCosto = parseFloat(prompt("Ingrese el precio de costo del producto"));
if(!isNaN(precioCosto) && precioCosto != null && precioCosto != ""){
//alert('es numero");
break;
}else{
}
}
alert('no es numero');
continue;
precioCostoM = precioCosto.toFixed(2);
alert("El precio de costo del producto a calcular es: "+precioCostoM);
console.log("El precio de costo del producto a calcular es: "+precioCostoM);
document.write("<h3> El precio de costo del producto a calcular es: "+precioCostoM+"</h3>");
//Sumar el IVA al producto function Calcular Iva (precioCosto){ return (precioCosto⚫ 8.21)
        }
    var iva Calculariva(precioCosto);
    ivaMiva.toFixed(2);
    alert("El IVA del producto ingresado es: "+ivaM);
    console.log("El IVA del producto ingresado es: "+ivaM);
    document.write("<h3> El IVA del producto ingresado es: "+ivaM+"</h3>");
    //Sumarle el iva al precio del Producto con IVA
    function SumarIva (precioCosto){
    }
    return (precioCosto+ (precioCosto 0.21));
    var precioConIva = Sumar Iva (precioCosto);
    precioConIvaM= precioConIva.toFixed(2);
    alert("El precio del producto con IVA incluido es: "+precioConIvaM);
    console.log("El precio del producto con IVA incluido es: "+precioConIvaM);
    document.write("<h3> El precio del producto con IVA incluido es: "+precioConIvaM+"</h3>")
    //Calcular precio sugerido de venta
    function CalculaPrecioVenta (precioConIva){
    return (precioConIva * 1.25);
    }
    var precioventa = CalculaPrecioVenta (precioConIva);
    precioVentaM= precioventa.toFixed(2);
    alert("El precio Sugerido de venta del producto es: "+precioVentaM);
    console.log("El precio Sugerido de venta del producto es: "+precioVentaM);
    document.write("<h3> El precio Sugerido de venta del producto es: "+precioVentaM+"</h3>")