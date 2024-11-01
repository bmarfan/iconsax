'use client'
import React from 'react'
import iconLinear from '@/app/data/linear';
import iconBroken from '@/app/data/broken';
import iconsBold from '@/app/data/bold';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Input } from "@nextui-org/input";
import { useState, useEffect } from 'react';

const IconTab = () => {

    const [value, setValue] = useState([]);
    const [array, setArray] = useState()

    const handleChange = (e) => {
        setValue({
            [e.target.name]: e.target.value
        })
    }
    const filterList = (arr) => {
        if(value){
            return arr.filter((a) => a.includes(value.search))
        }    
    }

    console.log(value.search)
    return (
        <div className="flex flex-col relative w-[70%]">
            <div className='absolute right-0 right-bar'>
                <form>
                    <Input type="text" placeholder='Search icon...' startContent={<i className="iconsax" icon-name="search-normal-1"></i>} onChange={handleChange} name='search'/>
                </form>
            </div>
            <Tabs aria-label="Options" color="secondary" className='w-[400px] tablist'>
                <Tab key="linear" title="Linear">
                    <Card>
                        <CardBody className='min-h-screen'>
                            <section className="flex flex-wrap gap-2" id="linear">
                                {
                                   value.search === undefined ?  iconLinear.map((x, index) => (

                                    <article key={index} className="flex flex-col justify-center items-center w-[13.59%] p-5 bg-gray-50 rounded-lg border border-black/10">
                                        <div className="text-[25px] text-gray-700">
                                            <i className="iconsax" icon-name={x}></i>
                                        </div>
                                        <div className="text-[11px] text-center w-36 text-gray-500">
                                            <Code size="sm">{x}</Code>
                                        </div>
                                    </article>

                                )) : filterList(iconLinear).map((x, index) => (

                                    <article key={index} className="flex flex-col justify-center items-center w-[13.59%] p-5 bg-gray-50 rounded-lg border border-black/10">
                                        <div className="text-[25px] text-gray-700">
                                            <i className="iconsax" icon-name={x}></i>
                                        </div>
                                        <div className="text-[11px] text-center w-36 text-gray-500">
                                            <Code size="sm">{x}</Code>
                                        </div>
                                    </article>

                                ))
                                }
                            </section>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="broken" title="Broken">
                    <Card>
                        <CardBody>
                            <section className="flex flex-wrap gap-2 tab" id="linear">
                                {
                                    iconBroken.map((x, index) => (

                                        <article key={index} className="flex flex-col justify-center items-center w-[13.59%] p-10 bg-gray-50 rounded-lg border border-black/10">
                                            <div className="text-[25px] text-gray-700">
                                                <i className="iconsax" icon-name={x} variant="broken"></i>
                                            </div>
                                            <div className="text-[11px] text-center w-36">
                                                <Code size="sm">{x}</Code>
                                            </div>
                                        </article>

                                    ))
                                }
                            </section>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="bold" title="Bold">
                    <Card>
                        <CardBody>
                            <section className="flex flex-wrap gap-2 tab" id="bold">
                                {
                                    iconsBold.map((x, index) => (

                                        <article key={index} className="flex flex-col justify-center items-center w-[13.59%] p-10 bg-gray-50 rounded-lg border border-black/10">
                                            <div className="text-[25px] text-gray-700">
                                                <i className="iconsax" icon-name={x} variant="bold"></i>
                                            </div>
                                            <div className="text-[11px] text-center w-36">
                                                <Code size="sm">{x}</Code>
                                            </div>
                                        </article>

                                    ))
                                }
                            </section>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default IconTab
