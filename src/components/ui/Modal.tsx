"use client"

import React, { FC, useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";


interface ModalProps {};

const Modal:FC<ModalProps> = () => {

   
    return (
            <div className="flex flex-col p-16 z-50 w-full h-full fixed left-0 top-0 items-center justify-between backdrop-blur-md bg-black bg-opacity-25">
            <header>
                <Button className="rounded-full p-4 hover:outline-indigo-700 hover:w-auto h-auto" variant="outlined"><X className="w-6 h-6 font-semibold "/></Button>
            </header>
             <main className="h-[400px] w-[600px] bg-white rounded-md outline outline-indigo-700 outline-[1px] shadow-md"></main>
                </div>
    )
};

export default Modal;