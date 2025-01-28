const Shop = () => {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Girls Shop</h1>
          <p className="text-lg mb-6">
            Discover trendy outfits, accessories, and everything you need to stay stylish!
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary hover:text-white transition">
            Explore Now
          </button>
        </div>
  
        {/* Products Section */}
        <div className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Cards */}
            {Array(8)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                  <p className="text-sm text-gray-600 mb-4">$29.99</p>
                  <button className="bg-primary text-white w-full py-2 rounded-lg hover:bg-secondary transition">
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="bg-secondary text-white py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Want the Latest Deals?</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter and get exclusive discounts and updates.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg w-80 focus:outline-none"
            />
            <button className="bg-primary px-6 py-3 rounded-r-lg text-white font-semibold hover:bg-white hover:text-primary transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shop;
  