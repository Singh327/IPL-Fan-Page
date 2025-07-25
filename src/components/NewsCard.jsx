const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900">{news.title}</h3>
        <p className="text-sm text-gray-600">{news.date}</p>
        <p className="text-sm mt-2 text-blue-800">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
