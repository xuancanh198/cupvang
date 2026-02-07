import BlogCard from './BlogCard';
import { BLOG_LIST } from '@/constant/Blog';

export default function BlogList() {

    return (
        <div className="space-y-6">
            {BLOG_LIST?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
