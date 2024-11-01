import icons from "@/components/IconList";
import '../app/fonts/style.css'
import { Code } from "@nextui-org/code";
import IconTab from "@/components/IconTab";
import { Divider } from "@nextui-org/divider";

export default function Home() {
    let link = '';
    let text = '<i class="iconsax" icon-name="heart"></i>';
    let textBr = '<i class="iconsax" icon-name="heart" variant="broken"></i>';
    let textBd = '<i class="iconsax" icon-name="heart" variant="bold"></i>';
    let st = '.iconsax {';
    let st1 = '//your style';
    let st3 = '}';
    return (
        <main className="flex justify-center items-center flex-col">
            <header className="w-[70%] mb-10 text-gray-600">
                <h1 className="text-3xl uppercase font-black py-10 text-[#e11d48]">Iconsax from Vuesax</h1>
                <section>
                    <h2 className="font-bold text-gray-800 border-b border-b-rose-600 w-fit">Disclaimer</h2>
                    <p className="text-[14spx] py-4">
                        Yo no cree estos iconos ni los diseñé. Iconsax es propiedad exclusiva de Vuesax, todos los derechos les corresponden a ellos. Yo sólo los compilé en una web font para incluir las variantes Linear, Bold y Broken en una sola cheat sheet para uso personal.
                    </p>
                    <Divider className="my-4" />
                </section>
                <section className="container">
                    <h2 className="font-bold text-gray-800 border-b border-b-rose-600 w-fit">How to use</h2>
                    <div className="py-5">
                        <p className="p-2">Copia y pega este código antes de tu <Code>{'</head>'}</Code> tag.</p>
                        <Code>{'<link rel="stylesheet" href="https://iconsax-aha34177x-bmarfans-projects.vercel.app/_next/static/css/29b092b6f110e0fb.css"/>'}</Code>
                    </div>
                    <div className="flex gap-[100px] mt-5">
                        <div>
                            <div className="pb-5">
                                <p className="p-2">Ocupa este HTML para usar el ícono que quieres</p>
                                <Code>{'<i class="iconsax" icon-name="ICON"></i>'}</Code>
                            </div>
                            <div className="pb-5">
                                <p className="p-2">Para usar una varinte (bold o broken) pega uno de estos HTML</p>
                                <p className="p-1"><Code>{'<i class="iconsax" icon-name="ICON" variant="bold"></i>'}</Code></p>
                                <p className="p-1"><Code>{'<i class="iconsax" icon-name="ICON" variant="broken"></i>'}</Code></p>
                            </div>
                        </div>
                        <div className="pb-5">
                        <p className="p-2">Para cambiarle el estilo</p>
                        <p className="p-1">
                            <Code>{'.iconsax {'}
                                <br />&nbsp; &nbsp;{'//tu estilo'}
                                <br /> {'};'}
                            </Code></p>
                    </div>
                    </div>

                    
                </section>
            </header>
            <IconTab />
        </main>
    )
}
