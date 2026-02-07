type NewsItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    highlight?: boolean;
};

export default function NewsCard({ item }: { item: NewsItem }) {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* IMAGE */}
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover"
                />

                {item.highlight && (
                    <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Tin tức nổi bật
                    </span>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <h3 className="font-semibold text-[15px] mb-2 line-clamp-2">
                    {item.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-3 mb-3">
                    {item.description}
                </p>

                <a
                    href="#"
                    className="text-green-600 text-sm font-medium hover:underline"
                >
                    Đọc thêm
                </a>
            </div>
        </div>
    );
}
