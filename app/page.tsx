"use client"
import { deleteLorem } from "@/actions/deleteLorem";
import { getLorem } from "@/actions/getLorem";
import { MyForm } from "@/components/myform";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useCallback, useEffect, useState } from "react";
const Page = () => {
  const [lorems, setLorems] = useState<any>();

  useEffect(() => {
    getLorem().then((data: any) => {
      setLorems(data);
      console.log(data);
    });
  }, [lorems]);

  const handleDelete = useCallback((id: string) => {
    deleteLorem(id);
  }, []);

  return (
    <div className="flex flex-col items-center border border-black rounded-lg bg-amber-200 h-screen m-5 px-20 py-20">
      <div className="flex space-x-32 mb-10">
        <div className="bg-pink-400 p-10 w-44 h-32 flex flex-col items-center justify-center">
        <p className='flex items-center text-center'>Lorem ipsum</p>
          <span className="font-bold text-5xl">03</span>
          
        </div>
        <div className="bg-blue-400 p-10 w-44 h-32 flex flex-col items-center justify-center">
        <p className='flex items-center text-center'>Lorem ipsum</p>
          <span className="font-bold text-5xl">11</span>
        
        </div>
        <div className="bg-pink-400 p-10 w-44 h-32 flex flex-col items-center justify-center">
        <p className='flex items-center text-center'>Lorem ipsum</p>
          <span className="font-bold text-5xl">52</span>
       
        </div>
      </div>
      <div> <MyForm /></div>
      <div className="flex flex-col my-6 gap-y-4">
        {lorems?.map((lorem: any, index: number) => {
          return (
            <Card key={index} className="flex flex-col justify-center p-4 ">
              <CardContent className="text-4xl font-medium">
                {lorem.name}
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button size={"lg"} className="bg-red-500 w-[150px] rounded-lg">
                  Click Me
                </Button>
                <Button
                  variant={"ghost"}
                  className="w-fit"
                  onClick={() => handleDelete(lorem.id)}
                >
                  <span>
                    <RiDeleteBin6Line size={25} />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
