import { FilterButton } from "./components/FilterButton";
import { SmartphoneItem } from "./components/SmartphoneItem";
import { useSmartphones } from "./hooks/useSmartphones";

import { Brands, Storage } from "./helpers";


function App() {
  const { setManufacturer, setStorage, smartphones } = useSmartphones();

  return (
    <div className="w-full">
      <section className=" m-auto w-full shadow-lg py-24 mt-12">
        <h1 className="text-center text-3xl text-blue-700 font-bold">
          Celulares a Preço de Fábrica
        </h1>

        {/* <pre>{JSON.stringify({ manufacturer, storage }, null, 2)}</pre> */}

        <div className="flex w-full space-x-6 mt-12">
          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Marca</label>
            <div className="flex space-x-2 mt-6">

              <>
                {Brands.map((item, index) => <FilterButton key={index} title={item.title} onClick={() => setManufacturer(`${item.brands}`)} />)}
              </>
            </div>
          </div>
          
          <div className="flex flex-col shadow items-center p-6 w-full">
            <label className="text-lg font-bold">Armazenamento</label>
            <div className="flex space-x-2 mt-6">
              <>
                {Storage?.map((item, index) => (<FilterButton key={index} title={item.title} onClick={() => setStorage(`${item.storage}`)} />))}
              </>

            </div>
          </div>
        </div>


        <div className="flex flex-wrap w-full items-center justify-around p-10 mt-12">
          {smartphones?.map((smartphone) => (
            <SmartphoneItem data={smartphone} key={smartphone.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
