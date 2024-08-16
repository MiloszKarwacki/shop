import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div>
      <div className="my-16 mx-2 h-screen">
        <div className="text-3xl flex justify-center items-center h-1/2 bg-blue-200 rounded-lg">
          <div className="w-1/2  text-center rounded-xl">IMAGE</div>
          <div className="w-1/2 text-center">DESCRIPTION</div>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <ProductGrid />
        </div>
        <div>BLOG</div>
      </div>
    </div>
  );
}
