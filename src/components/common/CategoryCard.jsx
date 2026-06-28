function CategoryCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
      <h2 className="text-xl font-bold text-center text-blue-700">
        {title}
      </h2>
    </div>
  );
}

export default CategoryCard;