import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>

      <Card
        title="Sample Property"
        image="/assets/sample.jpg"
        description="Beautiful home located in the city center."
      />

      <div className="mt-4">
        <Button label="View Details" />
      </div>
    </div>
  );
}