import Image from "next/image";
import CardChip from "@/components/chip/CardChip";
import {FC} from "react";

interface Props {
    value:any;
}

const CardView:FC<Props> = ({value}) => {
    const updatedAt =  new Date(value.updated_at).toDateString();

    return (
        <div className="py-0">
            <div className="mx-auto max-w-2xl px-2 lg:px-2">
                <div className="mx-auto bg-white mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-4 sm:p-4 lg:flex-auto">
                        <div className="flex flex-col">
                            <div className="flex flex-row" onClick={()=>{
                                window?.open(value.html_url, '_blank')
                            }}>
                               {/* <Image
                                    width={48}
                                    height={48}
                                    src={"/github.svg"}
                                    alt="Logo"
                                />*/}
                                <img
                                    width={40}
                                    height={40}
                                    src={value.owner.avatar_url}
                                    alt="Logo"
                                    className="object-none, rounded"
                                />
                                <h3 className=" ml-2 text-2xl font-bold tracking-tight text-indigo-700 hover:text-indigo-500 mt-2">
                                    {value.name}</h3>
                            </div>
                            <div>
                                <div className="gap-x-4 text-xs mt-4">
                                    <time dateTime="2020-03-16" className="text-gray-400">Updated AT {updatedAt}</time>
                                    <a href="#"
                                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100 font-extrabold">{value.latestTag}</a>
                                </div>
                            </div>

                        </div>
                        <p className="mt-2 text-base leading-7 text-gray-600"> {value.description}
                        </p>

                        <div className="mt-8 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">HighLights</h4>
                            <div className="h-px flex-auto bg-gray-100"/>
                        </div>
                        <div>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex flex-row justify-center">
                                    <Image
                                        width={18}
                                        height={18}
                                        src={"/language.svg"}
                                        alt="Logo"
                                    />
                                </div>
                                <span className="text-sm text-gray-600">{value.language}</span>

                            </div>
                            {value.license_name.key && (
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex flex-row justify-center">
                                        <Image
                                            width={18}
                                            height={18}
                                            src={"/license.svg"}
                                            alt="Logo"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600">{value.license_name.key}</span>

                                </div>
                            )}
                            {value.homepage && (
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex flex-row justify-center">
                                        <Image
                                            width={18}
                                            height={18}
                                            src={"/web.svg"}
                                            alt="Logo"
                                        />
                                    </div>
                                    <a href={value.homepage}>
                                    <span className="text-sm text-gray-600">{value.homepage}</span>
                                    </a>

                                </div>
                            )}

                                <div className="flex items-center gap-2 mt-1">
                                    {
                                        value.repoTag.map((filterListItem: string) => (
                                            <span key={filterListItem} className="text-sm text-purple-700 mr-2">#{filterListItem}</span>
                                        ))
                                    }
                                </div>
                        </div>

                    </div>


                    <div className="-mt-2 p-2 lg:mt-0 flex flex-col justify-between pr-4">
                        <div
                            className="py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-4">
                            <div className="mx-auto max-w-xs">
                                <div className="flex flex-row gap-4">
                                    <div className="mx-auto flex max-w-xs flex-col ">
                                        <div
                                            className="font-semibold text-indigo-600 sm:text-xl">
                                            {value.stargazers_count}
                                        </div>
                                        <div className="flex flex-row justify-center">
                                            <div className="text-xs leading-7 text-gray-600 mr-1">Star</div>
                                            <Image
                                                width={12}
                                                height={12}
                                                src={"/star.svg"}
                                                alt="Logo"
                                            />
                                        </div>

                                    </div>
                                    <div className="w-0.5 bg-gray-100"/>
                                <div className="mx-auto flex max-w-xs flex-col">
                                    <div
                                        className="font-semibold text-indigo-600 sm:text-xl">
                                        {value.watchers_count}
                                    </div>
                                    <div className="flex flex-row justify-center">
                                        <div className="text-xs leading-7 text-gray-600 mr-1">Watch</div>
                                        <Image
                                            width={12}
                                            height={12}
                                            src={"/eye.svg"}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>
                                <div className="w-0.5 bg-gray-100"/>
                                <div className="mx-auto flex max-w-xs flex-col">
                                    <div
                                        className="font-semibold text-indigo-600 sm:text-xl">
                                        {value.forks_count}
                                    </div>
                                    <div className="flex flex-row justify-center">
                                        <div className="text-xs leading-7 text-gray-600 mr-1">Forks</div>
                                        <Image
                                            width={12}
                                            height={12}
                                            src={"/fork.svg"}
                                            alt="Logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto flex flex-wrap items-center gap-2 mt-4">
                                {value.topics.map((filterListItem: string) => (
                                    <CardChip value={filterListItem} key={filterListItem}/>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CardView;