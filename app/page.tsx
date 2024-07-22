import Image from "next/image";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Moon from "../public/moon.png"
import Animakidn from "../public/animakid.png"
import Dog from "../public/Dog.png"
import Fox from "../public/dogs.png"
import Bear from "../public/dogs2.png"
import Number from "../public/1025+.png"
import MrFox from "../public/fox.png"
import Mushorooms from "../public/mushrooms.png"
import Mushoroomses from "../public/mushroomses.png"
import Mushoroomses2 from "../public/mushroomses2.png"
import Shroomie from "../public/shroomie.png"
import Robot from "../public/robot.png"
import Robots from "../public/robots.png"
import Robots2 from "../public/robots2.png"
import Animakid from "../public/animakid.png"
import Keepitreal from "../public/keepterial.png"
import DigiLab from "../public/diglab.png"
import GravityOne from "../public/gravity.png"
import Juanie from "../public/juanie.png"
import BlueWhale from "../public/bluewhane.png"
import Robotica from "../public/robotika.png"
import RustyRobot from "../public/rustyRobot.png"
import Animakindd from "../public/animakid-big.png"
import Dotgu from "../public/dotku.png"
import Ghiblier from "../public/ghiblier.png"
import Art from "../public/art.png"
import Collectibles from "../public/Collectibles.png"
import Music from "../public/Music.png"
import Photography from "../public/Photography.png"
import Video from "../public/video.png"
import Utility from "../public/utility.png"
import Sport from "../public/sport.png"
import Virtual from "../public/words.png"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Galaxy from "../public/distand.png"
import Edena from "../public/dena.png"
import Astro from "../public/fiction.png"
import BigMashoorms from "../public/mashurms-big.png"



export default function Home() {
  return (
    <main className="bg-zinc-800 text-gray-50 px-44">
     <div className="flex gap-8 pt-28 ">
      <section className="w-3/5">
        <h1 className="text-7xl w-3/4">Discover digital art & Collect NFTs</h1>
        <p className="text-2xl w-4/5 pt-5 pb-8">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists</p>
        <button className="get_started">
          <RocketLaunchIcon/>
          <p>Get Started</p>
        </button>
        <div className="flex gap-14 text-2xl pt-8 ">
          <div>
            <h2>240k+</h2>
            <p>Total Sale</p>
          </div>
          <div>
            <h2>100k+</h2>
            <p>Auctions</p>
          </div>
          <div>
            <h2>240k+</h2>
            <p>Artists</p>
          </div>
        </div>
      </section>
      <aside className="h-1/3 bg-zinc-700  flex flex-col gap-4">
      <Image src={Moon} alt="Moon"/>
        <h2 className="pl-5 text-2xl">Space Walking</h2>
        <div className="flex pl-5 gap-1 pb-8 rounded-b-3xl">
        <Image src={Animakidn} alt="Animakidn" />
        <p>Animakidn</p>
        </div>
      </aside>
    </div>


    {/* ////////Trending Collection */}


    <article className="pt-40">
        <div>
          <h2 className="text-2xl pb-3">Trending Collection</h2>
          <p className="text-xl pb-16">Checkout our weekly updated trending collection.</p>
        </div>
       <div className="flex gap-24">
       <div>
          <div >
            <Image src={Dog} alt="Dog"/>
          </div>
          <div className="flex gap-4 pt-4">
            <Image src={Fox} alt="Fox"/>
            <Image src={Bear} alt="Bear"/>
            <Image src={Number} alt="Number"/>
          </div>
          <h3 className="text-xl py-4">DSGN Animals</h3>
          <div className="flex items-center ">
            <Image src={MrFox} alt="MrFox" width={40} height={40} className="pr-3"/>
            <p>MrFox</p>
          </div>
        </div>
        <div>
          <div >
            <Image src={Mushorooms} alt="Mushorooms"/>
          </div>
          <div className="flex gap-4 pt-4">
            <Image src={Mushoroomses} alt="Mushoroomses"/>
            <Image src={Mushoroomses2} alt="Mushoroomses2"/>
            <Image src={Number} alt="Number"/>
          </div>
          <h3 className="text-xl py-4">Magic Mushrooms</h3>
          <div className="flex items-center ">
            <Image src={Shroomie} alt="Shroomie" width={40} height={40} className="pr-3"/>
            <p>Shroomie</p>
          </div>
        </div>
        <div>
          <div >
            <Image src={Robot} alt="Robot"/>
          </div>
          <div className="flex gap-4 pt-4">
            <Image src={Robots} alt="Robots"/>
            <Image src={Robots2} alt="Robots2"/>
            <Image src={Number} alt="Number"/>
          </div>
          <h3 className="text-xl py-4">Disco Machines</h3>
          <div className="flex items-center ">
            <Image src={Animakid} alt="Animakid " width={40} height={40} className="pr-3"/>
            <p>BeKind2Robots</p>
          </div>
        </div>
       </div>
      </article>

      
      {/* /////////     Top creators */}



      <div className="pt-44">
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl">Top creators</h2>
            <p className="text-xl pt-3">Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
            <button className="rankings"> 
              <RocketLaunchIcon/>
              <p>View Rankings</p>
              </button>
        </div>
        <div className="pt-28">
        </div>
        <div className="flex gap-12 flex-wrap">
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">1</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Keepitreal} alt="Keepitreal" />
              <p>Keepitreal</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
          </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">2</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={DigiLab} alt="DigiLab" />
              <p>DigiLab</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">3</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={GravityOne} alt="GravityOne" />
              <p>GravityOne</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">4</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Juanie} alt="Juanie" />
              <p>Juanie</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">5</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={BlueWhale} alt="BlueWhale" />
              <p>BlueWhale</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">6</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={MrFox} alt="mr fox" />
              <p>Mr Fox</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">7</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Shroomie} alt="Shroomie" />
              <p>Shroomie</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">8</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Robotica} alt="Robotica" />
              <p>Robotica</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">9</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={RustyRobot} alt="RustyRobot" />
              <p>RustyRobot</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">10</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Animakindd} alt="animakid" />
              <p>Animakid</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">11</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Dotgu} alt="Dotgu" />
              <p>Dotgu</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        <div className="flex  w-60 h-64 bg-zinc-700 rounded-2xl ">
            <div><p className="number">12</p></div>
            <div className="flex flex-col justify-center text-center gap-3 items-center">
              <Image src={Ghiblier} alt="Ghiblier" />
              <p>Ghiblier</p>
              <div>
              <span className="text-sm text-gray-500">Total Sales:  </span>
              <span>34.53 ETH</span>
              </div>
            </div>
        </div>
        </div>
      </div>




      {/* /////////// Browse Categories */}



    <div className="pt-40">
      <h2 className="text-3xl">Browse Categories</h2>
      <div className="flex flex-wrap gap-12 pt-16">
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl">
          <Image src={Art} alt="Art"/>
          <p className="pt-5 pl-7 text-2xl">Art</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Collectibles} alt="Collectibles"/>
          <p className="pt-5 pl-7 text-2xl">Collectibles</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Music} alt="Music"/>
          <p className="pt-5 pl-7 text-2xl">Music</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Photography} alt="Photography"/>
          <p className="pt-5 pl-7 text-2xl">Photography</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Video} alt="Video"/>
          <p className="pt-5 pl-7 text-2xl">Video</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Utility} alt="Utility"/>
          <p className="pt-5 pl-7 text-2xl">Utility</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Sport} alt="Sport"/>
          <p className="pt-5 pl-7 text-2xl">Sport</p>
        </div>
        <div className="w-60 h-80 bg-zinc-700 rounded-b-2xl ">
          <Image src={Virtual} alt="Virtual Worlds"/>
          <p className="pt-5 pl-7 text-2xl">Virtual Worlds</p>
        </div>
      </div>
    </div>




    {/* //////////////Discover More NFTs */}



    <div className="pt-40">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl pb-3">Discover More NFTs</h2>
          <p className="text-2xl">xplore new trending NFTs</p>
        </div>
        <button className="see">
          <RemoveRedEyeIcon/>
          See All
        </button>
      </div>
      <div className="flex gap-28 pt-20">
        <Image src={Galaxy} alt="Galax"/>
        <Image src={Edena} alt="Galax"/>
        <Image src={Astro} alt="Astro"/>
      </div>
      <Image src={BigMashoorms} alt="BigMashoorms" className="w-full h-full pt-24"/>
    </div>




    </main>
  );
}
