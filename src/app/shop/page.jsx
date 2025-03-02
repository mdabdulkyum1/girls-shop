"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RangeSlider from "./components/RangeSlider";

const Shop = () => {

  const handleFilterApply = (values) => {
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Shop Layout */}
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> Dresses
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Tops
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Bottoms
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Accessories
              </li>
            </ul>
          </div>
          <div>
            {/* Price Range Filter */}
            <div>
              <h3 className="font-semibold mb-2">Filter by price</h3>

              <RangeSlider
                min={0}
                max={10000}
                step={200}
                defaultValues={[1500, 8000]}
                minGap={500}
                onApply={handleFilterApply}
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="md:col-span-3">
          {/* Sort Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Our Bestsellers</h2>
            <select className="p-2 border rounded">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9)
              .fill("")
              .map((_, index) => (
                <Card key={index} className="p-4">
                  <CardHeader>
                    <CardTitle>Product {index + 1}</CardTitle>
                    <CardDescription>
                      Trendy and stylish product.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">$29.99</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
