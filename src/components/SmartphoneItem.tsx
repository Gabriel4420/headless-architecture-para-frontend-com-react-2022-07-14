import { ISmartphone } from "interfaces";


export const SmartphoneItem = ({ data }: { data: ISmartphone }) => {
  const { image, manufacturer, memory, name, price, storage } = data;

  return (
    <div className="shadow-2xl h-500 rounded  flex flex-col items-center p-5">
      <p className="pb-2">{name}</p>
      <p className="pb-2">R$ {price}</p>
      <p className="pb-2"><strong>{manufacturer}</strong></p>
      {manufacturer === "Samsung" ? <img src={image} alt="Samsung phone" className="w-52 h-80  p-2 object-fill pb-2" /> : <img src={image} alt="Apple Iphone" className="w-auto h-80 pb-2" />}

      <p className="pb-2">Memory: {memory}</p>
      <p className="pb-2">Storage: {storage}</p>

      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Comprar
      </a>
    </div>
  );
};
