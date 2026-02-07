import React from 'react'

interface BlogItemProps {
    title: string
    desc: string
    image?: string
}

export default function BlogItem({ title, desc, image }: BlogItemProps) {
    return (
        <div className="space-y-2">
            <div className="h-[140px] rounded-lg overflow-hidden bg-gray-200">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            <h4 className="text-sm font-semibold line-clamp-2">
                {title}
            </h4>

            <p className="text-xs text-gray-500 line-clamp-2">
                {desc}
            </p>
        </div>
    )
}
