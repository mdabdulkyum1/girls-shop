import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"


const Shop = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary   py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Girls Shop</h1>
        <p className="text-lg mb-6">
          Discover trendy outfits, accessories, and everything you need to stay
          stylish!
        </p>
        <button className="bg-white text-primary font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary hover:  transition">
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
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle>Product Name</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>$29.99</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-secondary   py-16 px-6 text-center">
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
          <button className="bg-primary px-6 py-3 rounded-r-lg   font-semibold hover:bg-white hover:text-primary transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
