'use client'
import icons from "@/components/IconList";
import '../app/fonts/style.css'
import iconLinear from "./data/linear";
import iconsBold from "./data/bold";
import iconBroken from "./data/broken";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Home() {
    return (
        <main className="flex justify-center">
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" color="secondary" fullWidth>
                    <Tab key="linear" title="Linear">
                        <Card> 
                            <CardBody>
                                <section className="flex flex-wrap gap-2 tab" id="linear">
                                    {
                                        iconLinear.map((x, index) => (

                                            <article key={index} className="flex flex-col justify-center items-center w-[12%] p-10 bg-gray-50 rounded-lg border border-black/10">
                                                <div className="text-[25px]">
                                                    <i className="iconsax" icon-name={x}></i>
                                                </div>
                                                <div className="text-[11px] text-center w-36">
                                                    <span>{x}</span>
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

                                            <article key={index} className="flex flex-col justify-center items-center w-[12%] p-10 bg-gray-50 rounded-lg border border-black/10">
                                                <div className="text-[25px]">
                                                    <i className="iconsax" icon-name={x} variant="broken"></i>
                                                </div>
                                                <div className="text-[11px] text-center w-36">
                                                    <span>{x}</span>
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

                                            <article key={index} className="flex flex-col justify-center items-center w-[12%] p-10 bg-gray-50 rounded-lg border border-black/10">
                                                <div className="text-[25px]">
                                                    <i className="iconsax" icon-name={x} variant="bold"></i>
                                                </div>
                                                <div className="text-[11px] text-center w-36">
                                                    <span>{x}</span>
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

        </main>
    )
}
