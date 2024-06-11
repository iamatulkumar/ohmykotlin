
import HomeScreen from "@/components/HomeScreen";
import {getRepositoryData} from "@/app/action/SourceAction";

export default async function Home() {

   const response = await getRepositoryData();

  return (
      <div className="flex flex-col w-full h-full">
        <HomeScreen data={response}></HomeScreen>
      </div>
  );
}
