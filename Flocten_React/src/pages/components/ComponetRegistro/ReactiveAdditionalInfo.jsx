
const ReactiveAdditionalInfo = ({ reactiveData, onInputChange }) => (
    <div className="space-y-4 font-bold   ">
      <div>
        <label className="block text-lg font-bold text-base-content">Número de Lote</label>
        <input
          type="text"
          name="numeroLote"
          value={reactiveData.numeroLote}
          onChange={onInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  
      <div>
        <label className="block text-lg font-bold text-base-content">Concentración</label>
        <input
          type="text"
          name="concentracion"
          value={reactiveData.concentracion}
          onChange={onInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  
      <div>
        <label className="block text-lg font-bold text-base-content">Fecha de Registro</label>
        <input
          type="text"
          value={reactiveData.createdAt ? new Date(reactiveData.createdAt).toLocaleDateString() : 'No disponible'}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100"
        />
      </div>
    </div>
  );
  
  export default ReactiveAdditionalInfo;