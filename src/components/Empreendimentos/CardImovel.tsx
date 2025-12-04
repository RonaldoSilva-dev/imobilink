// Cria card para exibir imóvel

export function CardImovel() {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Imóvel"
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">Apartamento Centro</h3>
      <p className="text-gray-600">R$ 450.000</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
        Ver detalhes
      </button>
    </div>
  );
}
