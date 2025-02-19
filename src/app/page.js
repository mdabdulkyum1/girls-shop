import Image from "next/image";


export default async function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Girls Shop</h1>
        <p className="text-lg mb-8">
          Explore the latest trends in fashion, accessories, and more for the stylish you!
        </p>
        <button className=" text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary hover:  transition">
          Shop Now
        </button>
      </div>

      {/* Featured Categories Section */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Cards */}
          {[
            { name: "Dresses", image: "/images/dresses.jpg" },
            { name: "Accessories", image: "/images/accessories.jpg" },
            { name: "Shoes", image: "/images/shoes.jpg" },
          ].map((category, index) => (
            <div
              key={index}
              className="relative bg-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
              <div className="absolute bottom-4 left-4   font-bold text-lg">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-secondary   py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Exclusive Deals Await You</h2>
        <p className="text-lg mb-6">
          Sign up for our newsletter to stay updated on the latest collections and offers!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-80 focus:outline-none"
          />
          <button className="bg-primary px-6 py-3 rounded-r-lg   font-semibold hover:bg-white hover:text-primary transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
