import { Title } from "@/components/ui/title/Title"; 
import { initialData } from "@/seed/seed";
import Image from "next/image"; 
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        {/* Cambiado: Carrito -> Verificar Ordenes */}
        <Title title="Verificar Ordenes" />

        {/* Contenedor principal con dos columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5"> 
          
          {/* Columna izquierda: productos */}
          <div>
            <div className="flex flex-col mb-5">
              {/* Cambios solicitados */}
              <span className="text-xl">Ajustar Elementos</span>
              <Link href="/cart" className="underline mb-5">
                Editar Carrito
              </Link>
            </div>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <p>$.{product.price} x 3</p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha: Dirección + Resumen */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-7">

              {/* ✅ Bloque nuevo agregado aquí */}
              <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
              <div className="mb-10">
                <p>Julian Quimbayo</p>
                <p>Avenida Prado Alto</p>
                <p>Barrio Prado Alto</p>
                <p>Alcaldía de Neiva</p>
                <p>Neiva - Huila</p>
                <p>3157007683</p>
              </div>
              {/* Divisor */}
              <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

              {/* Resumen de la Orden */}
              <h2 className="text-2xl mb-2">Resumen de la Orden</h2>

              <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">3 Artículos</span>
              </div>

              <div className="grid grid-cols-2">
                <span>Subtotal</span>
                <span className="text-right">$100</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$15</span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">$115</span>
              </div>

              <div className="mt-5 mb-2 w-full">
                <Link
                  className="flex btn-primary justify-center"
                  href="/checkout/address"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
