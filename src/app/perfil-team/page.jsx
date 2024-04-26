import Partidos from "@/components/Partidos/Partidos"
import Players from "@/components/Players/Players"


export default function PerfilTeam() {
    return (
        <> 
        
        <main className=" flex flex-col w-full items-center bg-slate-950">
           <section className=" rounded-xl mt-2 w-11/12 flex justify-center">
                <div className=" border-2 rounded-2xl  flex flex-col items-center p-2 sm:w-2/4 md:w-1/4">
                    <img src="https://picsum.photos/250/250" alt="" />
                    
                    <h2 className=" text-white mt-1">NameTeamHere</h2>
                </div>
           </section>

           <section className="bg-gray-300 bg-opacity-20 rounded-xl mt-2 w-11/12 h-1/12 flex justify-evenly sm:w-11/12">

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Partidos/>
                    <Partidos/>
                    <Partidos/>
                    <Partidos/>
                </div>
                
           </section>

           <section className="w-11/12 mt-2 p-6 bg-gray-300 bg-opacity-20 rounded-lg shadow-lg ">
                <h2 className="text-2xl text-white font-bold mb-4">Equipo de Fútbol</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Players/>
                    <Players/>
                    <Players/>
                    <Players/>
                    <Players/>
                    <Players/>
                </div>
           </section>

        </main>

        </>    
    )
}