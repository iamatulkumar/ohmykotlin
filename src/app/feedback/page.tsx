import {submitFeedBack} from "@/app/action/SourceAction";
import {redirect} from "next/navigation";


const Feedback = () => {

    const createMessage = async (formData: FormData) => {
        "use server"
        await new Promise((resolve) => setTimeout(resolve, 250));
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone-number'),
            message: formData.get('message'),
        }
        console.log(data)
        await submitFeedBack(data).then(
            (response) => {
                console.log(response)
                redirect("/")
            }
        );
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">Feedback</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Help us improve by providing your valuable feedback.</p>
            </div>
            <form action={createMessage} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                        <div className="mt-2.5">
                            <input type="text" name="name" id="first-name"
                                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={true}/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email"
                                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={true}/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                        <div className="relative mt-2.5">
                            <label className="sr-only">Country</label>
                            <input type="tel" name="phone-number" id="phone-number"
                                   className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={true}/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div className="mt-2.5">
                            <textarea name="message" id="message" rows={4}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required={true}></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Feedback;