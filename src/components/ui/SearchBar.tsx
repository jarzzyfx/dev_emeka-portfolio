"use client"
import React, { FC, useState } from "react";
import Button from "./Button";
import { Loader2, X } from "lucide-react";

interface SearchbarProps {};

const SearchBar:FC<SearchbarProps> = (props) => {

    const [inpVal, setInpVal] = useState('')
    const [loading, setLoading] = useState('end')

   const handleChange = (e : any) => {
    setInpVal(e.target.value)
    if (inpVal == "") {
        setLoading('end')
    }else{
        setLoading('start')
    }
   }

   const clearField = () => {
    setInpVal("")
    setLoading('end')
   }

    return (
          <div className="flex flex-col gap-1">
              <div className="relative w-[400px] h-8 p-2 flex items-center outline outline-[1px]  group-active:outline-[3px] focus:outline-indigo-700 outline-slate-500 rounded-r-sm">
        <input type="text" placeholder="Tesla Clone" value={inpVal} onChange={handleChange} className="h-full w-full bg-transparent outline-none text-sm focus:text-indigo-700 capitalize font-semibold text-black active:text-indigo-700"/>
        {
            inpVal === "" || inpVal === " " ? "" : <Button onClick={clearField} className="h-5 w-5 p-[1px] rounded-sm" variant="ghost" size="sm">
                <X className="h-4 w-4 text-black font-bold"/>
            </Button>
        }
    </div>
        <div className="h-5">
        {
    loading === 'start' ? <div className="m-auto text-slate-800 text-sm flex items-center gap-2"><Loader2 className=" w-4 h-4 text-indigo-700 animate-spin"/> querying database...</div> : ""
}
        </div>
          </div>
    )
};

export default SearchBar;