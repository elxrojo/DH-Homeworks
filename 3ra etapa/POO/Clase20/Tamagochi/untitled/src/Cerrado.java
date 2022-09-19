public class Cerrado implements Estado {

    Carrito carrito;

    @Override
    public void agregar() {
        this.carrito = carrito;
        System.out.println("Has agregado un producto :D");
    }

    @Override
    public void VaciarCarrito() {
        this.carrito =carrito;
    }
}
