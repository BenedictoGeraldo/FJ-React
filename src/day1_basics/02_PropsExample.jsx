function ProductCard({ productName, qty, price }) {
  return (
    <div className="card">
      <h2>
        {productName}, Total Stok: {qty}, Harga/pcs: {price}
      </h2>
    </div>
  );
}

function PropsExample() {
  return (
    <div>
      <ProductCard productName="Handphone Xiaomi" qty={10} price={3000} />
      <ProductCard productName="Mobil Ferari" qty={9} price={90000000} />
      <ProductCard productName="Motor Honda" qty={15} price={15000000} />
    </div>
  );
}

export default PropsExample;
