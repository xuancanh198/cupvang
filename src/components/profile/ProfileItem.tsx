export default function ProfileCard() {
    return (
        <div className="w-72 bg-white rounded-2xl shadow-xl p-8 text-center relative">
            {/* Avatar */}
            <div className="flex justify-center">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Aryan Kakadiya"
                    className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
                />
            </div>

            {/* Name */}
            <h3 className="mt-6 text-xl font-bold text-gray-900">
                Aryan Kakadiya
            </h3>

            {/* Role */}
            <p className="text-blue-600 font-medium">
                Project Leader
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-6 text-gray-700">
                {/* Twitter */}
                <a href="#" className="hover:text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 19c11 0 17-9.5 17-17 0-.3 0-.5 0-.8A12 12 0 0 0 28 0a12 12 0 0 1-3.5 1A6 6 0 0 0 27.3-2a12 12 0 0 1-3.8 1.4A6 6 0 0 0 12 4a17 17 0 0 1-12-6s-4 9 5 13a6 6 0 0 1-3 0c0 4 3 8 7 9a6 6 0 0 1-3 .1c1 3 4 6 8 6A12 12 0 0 1 0 21c4 2 9 3 14 3" />
                    </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="hover:text-pink-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </a>

                {/* Dribbble */}
                <a href="#" className="hover:text-pink-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.9 5.7a8 8 0 0 1 1.8 4.8 14 14 0 0 0-5.4-.2 24 24 0 0 0-1.1-2.7 14 14 0 0 0 4.7-1.9zM12 4a8 8 0 0 1 5.3 2 12 12 0 0 1-4.2 1.7A44 44 0 0 0 9.6 4.4 8 8 0 0 1 12 4z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="hover:text-blue-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2 6h4v12H2V9zm7 0h4v2h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.6 4.6 6v6h-4v-5c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7v5.1h-4V9z" />
                    </svg>
                </a>

                {/* GitHub / Dev */}
                <a href="#" className="hover:text-gray-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-2c-3 .6-3.7-1.4-3.7-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.7 2.6-1 .1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
