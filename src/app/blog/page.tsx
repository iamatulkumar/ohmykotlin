import Header from "@/components/header/Header";


const ComingSoon = () => {
    return (
            <div className="bg-white">
                <Header/>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="max-w-5xl w-full px-4">
                        <h1 className="text-8xl font-bold text-center mb-8 text-gray-600">Coming
                            Soon!</h1>

                        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-600">Composable UI, Tools for
                            Android Development, Blogs</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">Our website is under
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            construction. We'll be back soon!
                        </p>
                        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <input
                                className="w-full md:w-80  py-2 px-4 border text-gray-800 dark:text-gray-800 border-gray-200  bg-white"
                                type="email" placeholder="Enter your email address"/>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border dark:bg-blue-800">Notify
                                Me
                            </button>
                        </form>
                    </div>
                </div>

        </div>
    );

}

export default ComingSoon;