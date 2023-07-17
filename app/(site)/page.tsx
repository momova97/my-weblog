import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div >


     <h1 className= "text-7xl font-extrabold">Hello I&apos;m <span className= "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent">Mohammad</span> !</h1>



        <p className='mt-3 text-xl text-gray-600'>look on my works ye mighty and despair!</p>


        <h2 className= "text-3xl font-bold mt-24">My Projects</h2>

        <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map(project => (
            <Link 
              href={`/projects/${project.slug}`}
              key={project._id} 
              className='border-2 border-gray-500 rounded-lg p-2 hover:shadow-xl transition-shadow duration-300 ease-in-out'
              >
              {project.image && (
                <Image
                src={project.image}
                alt= {project.name}
                width={700}
                height={300}
                className='object-cover rounded-t-lg border-b border-gray-500'/>
                )
              }


                <div className='mt-2 font-extrablod bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] 
                bg-clip-text text-transparent'>{project.name}</div>
              </Link>
            ))}
          </div>
    </div>
  )
}
