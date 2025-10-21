import { QuantitySelector } from "@/components";
import { Title } from "@/components/ui/title/Title"; 
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image"; 
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default async function ({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden # ${id}`} />

        {/* Contenedor en 2 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">

          {/* 🛒 Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pagada</span>
            </div>

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
                  <p>
                    <span className="font-bold">Subtotal: $.{product.price} x 3</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-xl p-7">

              <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
              <div className="mb-10">
                <p>Julian Quimbayo</p>
                <p>Avenida Prado Alto</p>
                <p>Barrio Prado Alto</p>
                <p>Alcaldía de Neiva</p>
                <p>Neiva - Huila</p>
                <p>3157007683</p>
              </div>

              <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

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

              <div className="flex flex-col mt-5">
                <div
                  className={clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                      "bg-red-500": false,
                      "bg-green-500": true,
                    }
                  )}
                >
                  <IoCardOutline size={30} />
                  <span className="mx-2">Pagada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
