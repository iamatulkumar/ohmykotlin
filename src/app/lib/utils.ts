
export interface DataItem {
    key: string;
    value: string;
}
const filterDataList = [
    ["android","🤖Android Essential"],
    ["Tooling"," 🛠Tooling"],
    ["Log","📋 Log"],
    ["network","🌎 Network"],
    ["storage","📦 Storage"],
    ["Device","📱 Device"],
    ["DI","💉 Dependency Injection"],
    ["Architecture","🏗 Architecture"],
    ["Analytics","🔍 Analytics"],
    ["Test","🩺 Test"],
    ["Crypto","🔑 Crypto"],
    ["File","📁 File"],
    ["Language extensions","🚀 Language extensions"],
    ["Serializer","🗃 Serializer"],
    ["Date-Time","⏰ Date-Time"],
    ["Asynchronous","➿ Asynchronous"],
    ["Compose UI","🍎 Compose UI"],
    ["Graphics","🎨 Graphics"],
    ["Service SDK","🧩 Service SDK"],
    ["Arithmetic","🧮 Arithmetic"],
    ["Resources","🛢 Resources"],
    ["Utils","🔧 Utils"],
]

export const filterDataItemList: DataItem[] = filterDataList.map(item => ({
    key: item[0],
    value: item[1]
}));

export const bgColourList = [
   "bg-gray-50",
   "bg-red-50",
   "bg-yellow-50",
   "bg-green-50",
   "bg-blue-50",
   "bg-indigo-50",
   "bg-purple-50",
   "bg-pink-50",
]

export const borderColourList = [
"ring-gray-500/10",
"ring-red-500/10",
"ring-yellow-500/10",
"ring-green-500/10",
"ring-blue-500/10",
"ring-indigo-500/10",
"ring-purple-500/10",
"ring-pink-500/10",
]