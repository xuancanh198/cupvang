import Image from 'next/image';
import { BlogItem } from '@/constant/Blog';

export default function BlogCard({ blog }: { blog: BlogItem }) {
    return (
        <div className="flex gap-5 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition">
            {/* Image */}
            <div className="relative w-[220px] h-[140px] flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {blog.title}
                </h3>

                <div className="mt-2 flex gap-4 text-sm text-gray-500">
                    <span>🕒 {blog.publishedAt}</span>
                    <span>👤 {blog.author}</span>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {blog.excerpt}
                    <span className="ml-1 text-green-600 font-medium cursor-pointer">
                        Đọc thêm
                    </span>
                </p>
            </div>
        </div>
    );
}
