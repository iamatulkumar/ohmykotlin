"use client"
import {FC, useState} from 'react'
import Footer from "@/components/footer/Footer";
import Chip from "@/components/chip/Chip";
import {DataItem, filterDataItemList} from "@/app/lib/utils";
import CardView from "@/components/CardView";
import Header from "@/components/header/Header";
import {useRouter} from "next/navigation";



interface Props {
  data:any;
}

const HomeScreen:FC<Props>=({data}) => {

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const router = useRouter();
  function checkAdult(age:any) {
    const customTag = age.repoTag
    if(selectedItems.length == 0) {
      return true;

    }
    return selectedItems.includes(customTag[0]);
  }
  return (
      <div className="bg-white">

          <Header/>

          <div className="relative isolate px-6 pt-14 lg:px-8">
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

              <div className="mx-auto max-w-7xl pt-32 pb-8 sm:pt-24 lg:pt-32 sm:pb-8 lg:pb-8">

                  <div className="text-center">
                      <div className="flex flex-col">
                          <h1 className="text-5xl font-bold tracking-tight text-gray-900 split-text">
                              Discover Android/Kotlin multiplatform
                          </h1>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 split-text mt-2">
                              libraries in one place
                          </h2>
                      </div>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                          Find dependency, checkout examples and add them to your project.
                      </p>

                      <div className="mt-10 flex items-center justify-center gap-x-4 ">
                          <div className="relative lg:w-3/5">
                    <span className="absolute top-2  ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
                         viewBox="0 0 50 50">
                        <path
                            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                    </span>
                              <input type="text" name="q"
                                     className="border lg:w-10/12 h-12 shadow px-16 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                                     placeholder="Search dependency"/>

                          </div>


                      </div>
                      <div className="flex items-center justify-center mt-8 mb-4">
                          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-2">
                              {
                                  filterDataItemList.map((dataItem: DataItem, keys: number) => (
                                      <Chip color="bg-blue-500" value={dataItem.value} key={keys}
                                            isSelected={selectedItems.includes(dataItem.key)}
                                            onClick={
                                                () => {
                                                    if (selectedItems.includes(dataItem.key)) {
                                                        setSelectedItems(selectedItems.filter((item) => item !== dataItem.key))
                                                    } else {
                                                        setSelectedItems([...selectedItems, dataItem.key])
                                                    }
                                                }
                                            }/>
                                  ))
                              }
                          </div>
                      </div>
                  </div>
              </div>
              {/*Main card view component */}
              <div className="flex items-center justify-center mb-48">
                  <div className="grid content-center sm:grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl">
                      {data && data.filter(checkAdult)
                          .map((item: any) => (
                              <CardView key={item.name} value={item}/>
                          ))}
                  </div>
              </div>

              <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true"
              >
                  <div
                      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                      style={{
                          clipPath:
                              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                  />
              </div>


          </div>

          <Footer/>

          <div className="fixed bottom-4 right-4">
              <button className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
              onClick={ () => {
                  router.push('/feedback')
              }
              }>
                  Feedback
              </button>
          </div>

      </div>
  )
}

export default HomeScreen;
