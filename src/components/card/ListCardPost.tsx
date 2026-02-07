import NewsCard from './CardPost';

const newsData = [
    {
        id: 1,
        title: 'Giờ Vàng Cuối Tuần – Săn Ngay Giá Sốc 9K, 19K, 99K, 199K',
        description:
            'Webwebgreen tung ưu đãi sốc cuối tháng 1 này, có nhiều sản phẩm organic...',
        image: '/images/blogImage.png',
        highlight: true,
    },
    {
        id: 2,
        title: 'Ưu đãi đặc biệt cho khách hàng mới',
        description:
            'Chương trình áp dụng trong thời gian ngắn, số lượng có hạn...',
        image: '/images/blogImage.png',
    },
];

export default function NewsList() {
    return (
        <div className="w-full ">
            <h3 className="text-[#E1B323] text-[20px] font-bold">Tin tức nổi bật </h3>
           <div className='mt-[30px] flex flex-wrap gap-[10px]'>
                {newsData.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
           </div>
        </div>
    );
}
