import React from 'react'
import wavyBlack from '/home/gosal/Documents/coding/internship/LayoutFromFigma/figma-layout/src/assets/wavy-black-white-background 1.png'
import circleImg from '../assets/screen2 1.png'
import screenThree from '../assets/screen 3 1.png'
import screenfour from '../assets/screen 4 1.png'
import screenfive from '../assets/screen 5 1.png'
import screenSeven from '../assets/screen7 1.png'
import screenSix from '../assets/screen6 1.png'
import { Fragment } from 'react'

function One(){
  return (
    <Fragment>
      <div className='relative'>
        <img className='w-screen h-screen' src={wavyBlack} alt=""/>
        <div className='absolute left-40 top-32 flex flex-col p-5 w-[1500px]'>
          <div>
            <div className='mb-10'>
              <div className='w-[700px] h-[160px]'>
                <h1 className='font-extrabold text-[72px] font-Mont'>Tokenization of Real-World Assets</h1>
              </div>
              <div className='w-[862px] h-[192px] font-dmSans'>
                <p className='text-[20px]'>we see the RWA tokenization as a transformative opportunity for businesses seeking to unlock new value and access broader markets. Tokenization finds itself uniquely challenged by a landscape of legal uncertainty, largely because specific regulations directly addressing this innovative domain remain absent. As a result, those operating within the tokenization market are compelled to adeptly navigate and apply the nearest applicable regulatory frameworks, seeking the best fit to meet the intricate demands of this evolving space.</p>
              </div>
            </div>
          </div>
            <div className='flex items-baseline justify-between mb-10'>
              <div className=''>
                <h2 className='font-extrabold text-[28px] font-Mont'>
                  Book a free consultation
                </h2>
              </div>
                <input type="text" placeholder='Your name' className='bg-white w-80 p-2 font-dmSans'/>
                <input type="text" placeholder='Your email' className='bg-white w-80 p-2 font-dmSans'/>
              <div className=''>
                <button className='btn w-[170px] text-white '>Book</button>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-[450px] h-[112px] border-2 border-black rounded-[7px] p-7 backdrop-blur'>
                <h3 className='font-bold text-[24px] font-Mont'>What can be tokenized</h3>
                <p className='text-[16px] font-dmSans'>Find out if your product is eligible</p>
              </div>
              <div className='w-[450px] h-[112px] border-2 border-black rounded-[7px] p-7 backdrop-blur'>
                <h3 className='font-bold text-[24px] font-Mont'>What can be tokenized</h3>
                <p className='text-[16px] font-dmSans'>Find out if your product is eligible</p>
              </div>
              <div className='w-[450px] h-[112px] border-2 border-black rounded-[7px] p-7 backdrop-blur'>
                <h3 className='font-bold text-[24px] font-Mont'>What can be tokenized</h3>
                <p className='text-[16px] font-dmSans'>Find out if your product is eligible</p>
              </div>
            </div>
        </div>
      </div>
      <div className=' flex relative items-center justify-center p-56'>
            <h1 className=' font-extrabold text-[52px] font-Mont'>Guiding You Through Tokenization</h1>
          <div className='h-[200px] flex flex-col justify-between'>
              <h2 className='font-bold text-[44px] leading-[44px] font-Mont'>Tokenization requires a nuanced understanding of the technological and legal frameworks.</h2>
              <p className='text-[16px] font-dmSans'>Leveraging our deep expertise in blockchain technology, digital assets, and regulatory frameworks, we guide our clients through the complexities of the tokenization process, ensuring that their ventures into the digital asset space are both legally sound and strategically poised for success.</p>
        </div>
      </div>
      <div className='h-[736px] flex justify-center'>
        <div className='size-full'>
          <img className='ml-auto mr-16' src={circleImg} alt="" />
        </div>
        <div className='p-10 size-full'>
          <h1 className='font-extrabold text-[56px] mb-10  pr-64 font-Mont'>Comprehensive Guidance</h1>
          <p className='text-[16px] mb-12 pr-[450px] font-dmSans'>Our firm provides comprehensive guidance, making the tokenization of real-world assets seamless for our clients. From real estate and fine art to commodities and beyond, we understand the nuances of various asset classes and the specific legal considerations each entails. </p>
          <h2 className='font-bold text-[24px] mb-8 font-Mont'>Our practice is built on:</h2>
            <div className='flex flex-col'>
              <div className='flex mb-2'>
                <svg width="24px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 10.5V12.5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 18V21" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M17 14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H5.769C5.4866 13 5.3454 13 5.21503 13.0359C5.09954 13.0677 4.99071 13.12 4.89371 13.1903C4.78423 13.2697 4.69602 13.38 4.51961 13.6005L3.79961 14.5005C3.51424 14.8572 3.37155 15.0356 3.31683 15.2334C3.26856 15.4078 3.26856 15.5922 3.31683 15.7666C3.37155 15.9644 3.51424 16.1428 3.79961 16.4995L4.51961 17.3995C4.69602 17.62 4.78423 17.7303 4.89371 17.8097C4.99071 17.88 5.09954 17.9323 5.21503 17.9641C5.3454 18 5.4866 18 5.769 18H15.4C15.9601 18 16.2401 18 16.454 17.891C16.6422 17.7951 16.7951 17.6422 16.891 17.454C17 17.2401 17 16.9601 17 16.4V14.6Z" stroke="#33363F" stroke-width="2"/>
                  <path d="M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H18.231C18.5134 5 18.6546 5 18.785 5.03591C18.9005 5.06773 19.0093 5.12004 19.1063 5.19035C19.2158 5.26971 19.304 5.37997 19.4804 5.60049L20.2004 6.50049C20.4858 6.85721 20.6285 7.03557 20.6832 7.23337C20.7314 7.40785 20.7314 7.59215 20.6832 7.76663C20.6285 7.96443 20.4858 8.14279 20.2004 8.49951L19.4804 9.39951C19.304 9.62003 19.2158 9.73029 19.1063 9.80965C19.0093 9.87996 18.9005 9.93227 18.785 9.96409C18.6546 10 18.5134 10 18.231 10H8.6C8.03995 10 7.75992 10 7.54601 9.89101C7.35785 9.79513 7.20487 9.64215 7.10899 9.45399C7 9.24008 7 8.96005 7 8.4V6.6Z" stroke="#33363F" stroke-width="2"/>
                </svg>
                <p className='font-dmSans'>Foundation of innovation</p>
              </div>
              <div className='flex mb-2'>
                <svg width="24px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 10.5V12.5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 18V21" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M17 14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H5.769C5.4866 13 5.3454 13 5.21503 13.0359C5.09954 13.0677 4.99071 13.12 4.89371 13.1903C4.78423 13.2697 4.69602 13.38 4.51961 13.6005L3.79961 14.5005C3.51424 14.8572 3.37155 15.0356 3.31683 15.2334C3.26856 15.4078 3.26856 15.5922 3.31683 15.7666C3.37155 15.9644 3.51424 16.1428 3.79961 16.4995L4.51961 17.3995C4.69602 17.62 4.78423 17.7303 4.89371 17.8097C4.99071 17.88 5.09954 17.9323 5.21503 17.9641C5.3454 18 5.4866 18 5.769 18H15.4C15.9601 18 16.2401 18 16.454 17.891C16.6422 17.7951 16.7951 17.6422 16.891 17.454C17 17.2401 17 16.9601 17 16.4V14.6Z" stroke="#33363F" stroke-width="2"/>
                  <path d="M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H18.231C18.5134 5 18.6546 5 18.785 5.03591C18.9005 5.06773 19.0093 5.12004 19.1063 5.19035C19.2158 5.26971 19.304 5.37997 19.4804 5.60049L20.2004 6.50049C20.4858 6.85721 20.6285 7.03557 20.6832 7.23337C20.7314 7.40785 20.7314 7.59215 20.6832 7.76663C20.6285 7.96443 20.4858 8.14279 20.2004 8.49951L19.4804 9.39951C19.304 9.62003 19.2158 9.73029 19.1063 9.80965C19.0093 9.87996 18.9005 9.93227 18.785 9.96409C18.6546 10 18.5134 10 18.231 10H8.6C8.03995 10 7.75992 10 7.54601 9.89101C7.35785 9.79513 7.20487 9.64215 7.10899 9.45399C7 9.24008 7 8.96005 7 8.4V6.6Z" stroke="#33363F" stroke-width="2"/>
                </svg>
                <p className='font-dmSans'>Integrity</p>
              </div>
              <div className='flex mb-2'>
                <svg width="24px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 10.5V12.5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 18V21" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                  <path d="M17 14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H5.769C5.4866 13 5.3454 13 5.21503 13.0359C5.09954 13.0677 4.99071 13.12 4.89371 13.1903C4.78423 13.2697 4.69602 13.38 4.51961 13.6005L3.79961 14.5005C3.51424 14.8572 3.37155 15.0356 3.31683 15.2334C3.26856 15.4078 3.26856 15.5922 3.31683 15.7666C3.37155 15.9644 3.51424 16.1428 3.79961 16.4995L4.51961 17.3995C4.69602 17.62 4.78423 17.7303 4.89371 17.8097C4.99071 17.88 5.09954 17.9323 5.21503 17.9641C5.3454 18 5.4866 18 5.769 18H15.4C15.9601 18 16.2401 18 16.454 17.891C16.6422 17.7951 16.7951 17.6422 16.891 17.454C17 17.2401 17 16.9601 17 16.4V14.6Z" stroke="#33363F" stroke-width="2"/>
                  <path d="M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H18.231C18.5134 5 18.6546 5 18.785 5.03591C18.9005 5.06773 19.0093 5.12004 19.1063 5.19035C19.2158 5.26971 19.304 5.37997 19.4804 5.60049L20.2004 6.50049C20.4858 6.85721 20.6285 7.03557 20.6832 7.23337C20.7314 7.40785 20.7314 7.59215 20.6832 7.76663C20.6285 7.96443 20.4858 8.14279 20.2004 8.49951L19.4804 9.39951C19.304 9.62003 19.2158 9.73029 19.1063 9.80965C19.0093 9.87996 18.9005 9.93227 18.785 9.96409C18.6546 10 18.5134 10 18.231 10H8.6C8.03995 10 7.75992 10 7.54601 9.89101C7.35785 9.79513 7.20487 9.64215 7.10899 9.45399C7 9.24008 7 8.96005 7 8.4V6.6Z" stroke="#33363F" stroke-width="2"/>
                </svg>
                <p className='font-dmSans'>Unwavering focus on client needs</p>
              </div>
            </div>  
        </div>
      </div>
      <div className='relative h-[600px] flex'>
        <img className='w-screen'  src={screenThree} alt="" />
        <div className='absolute top-10 flex flex-col'>
          <div className='h-96 flex flex-col justify-between pl-40'>
            <h1 className='font-extrabold text-[56px] font-Mont'>Tokenize Any Assets, Anywhere</h1>
            <h3 className='font-bold text-[24px] pr-[950px] font-dmSans'>The promise of tokenization is vast, offering unprecedented opportunities for asset liquidity, access, and efficiency. Our firm is at the vanguard of this revolution, equipped to tokenize a diverse range of real-world assets.</h3>
            <p className='text-[20px] pr-[950px] font-dmSans'>Regardless of where your assets are located or what they consist of, our team has the expertise to guide you through the tokenization process. We ensure that your assets are transformed into digital tokens in a manner that maximizes their value and accessibility while maintaining legal compliance and operational efficiency.</p> 
          </div>
        </div>
      </div>
      <div className='h-[550px] flex flex-col justify-evenly px-56'>
            <h1 className='font-extrabold text-[46px] pr-[800px] font-Mont'>Access Efficient Legal Structures for Tokenization</h1>
          <div className='flex'>
            <p className='text-[16px] pr-44 font-dmSans'>Finding the right legal structure for tokenization is crucial for the success of any digital asset venture. Our law firm specializes in crafting efficient, innovative legal frameworks that not only protect your assets but also enhance their marketability and appeal to investors.</p>
            <p className='text-[16px] pr-96 font-dmSans'>Whether it's navigating the complexities of securities law, establishing digital asset trusts, or creating DAOs for asset management, we provide tailored solutions that meet the specific needs of your tokenization project. Our expertise ensures that your venture is built on a solid legal foundation, ready to thrive in the digital economy.</p>
          </div>
      </div>
      <div className='relative'>
        <div className='flex'>
          <img className='w-1/2' src={screenfour} alt="" />
          <div className='w-1/2 flex flex-col mb-36 justify-evenly px-44'>
            <h1 className='font-extrabold text-[52px] pr-10 font-Mont'>Let Us Deal with Regulatory Compliance</h1>
            <p className='text-[16px] pr-40 font-dmSans'>The regulatory landscape for tokenized assets is complex and ever-changing. Our law firm takes the burden of regulatory compliance off your shoulders, allowing you to focus on your business while we ensure that your tokenization project meets all legal requirements. From securities regulations and AML/KYC compliance to cross-border transaction laws, our team is adept at navigating the regulatory maze. We work diligently to keep your project compliant, informed by the latest legal developments and regulatory insights, ensuring that your tokenized assets are not just innovative but also secure and legally sound.</p>
          </div>
        </div>
        <div className='absolute top-[700px]'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-screen' src={screenfive} alt="" />
          <div className='absolute flex flex-col justify-center items-center gap-10'>
            <h1 className='w-[355px] font-extrabold text-[72px] font-Mont'>Selected Services</h1>
            <p className='w-[770px] text-center text-[20px] font-dmSans'>Explore our specialized services in the realm of asset tokenization, where we bridge the gap between traditional finance and the digital world. Our expert team provides comprehensive legal support for the tokenization of real-world assets, ensuring secure and compliant transactions in this innovative space.</p>
          </div>
            <svg className='absolute top-[980px]' width="24px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="#0F0F0F"/>
            </svg>
        </div>
          <div className='h-[464px] font-dmSans'>
            <div className='grid grid-cols-2 font-bold text-[24px] justify-evenly items-center justify-items-center content-center mt-20'>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10  p-4 flex justify-between items-center'>
            <h3 className='mr-40'>Setting up a tokenization project</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10 t p-4 flex justify-between items-center'>
            <h3 className='mr-40'>Releasing tokenization products</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10  p-4 flex justify-between items-center'>
            <h3 className='mr-40'>Fundraising</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10  p-4 flex justify-between items-center'>
            <h3 className='mr-40'>Managing intellectual property</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10  p-4 flex justify-between items-center'>
            <h3 className='mr-40'>Regulatory Strategy and Compliance</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-[570px] h-[80px] rounded-xl border mb-10  p-4 flex justify-between items-center '>
            <h3 className='mr-40'>Transitioning to DAO</h3>
            <svg width="15px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
        </div>
          </div>
          <div className='h-[768px] relative flex'>
        <img className='w-screen' src={screenSeven} alt="" />
        <div className='absolute flex flex-col mt-32 start-52'>
          <h1 className='w-[268px] font-extrabold text-[72px] mb-10 font-Mont'>Other Details</h1>
          <p className='w-[585px] text-[20px] font-dmSans'>In the transformative field of asset tokenization, Aurum Law Firm is a trusted legal advisor, guiding clients through the complexities of digitizing real-world assets. Our selected cases, publications, and accolades in this area demonstrate our expertise in navigating the legal intricacies of tokenization, ensuring compliance and innovation in every transaction.</p>
        </div>
          </div>
          <div className='p-20 h-[672px]'>
        <div className='flex justify-center'>
          <div className='relative flex'>
            <img className='rounded-xl' src={screenSix} alt="" />
              <div className='rounded-full size-10 bg-white absolute flex justify-center items-center translate-x-[690px] translate-y-[250px]'>
                <svg width="20px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>
              </div>
              <div className='rounded-full size-10 bg-white absolute flex justify-center items-center translate-x-8 translate-y-[250px]'>
                <svg width="20px" height="20px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>arrow_left [#335]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-345.000000, -6679.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231" id="arrow_left-[#335]"></path></g></g></g></svg>
              </div>
          </div>
          <div className='flex flex-col border p-10 rounded-xl ml-4 justify-around py-20'>
            <h2 className='w-[306px] h-[134px] font-extrabold text-center text-[24px] font-Mont'>Advised a tokenization project on the tokenization of real estate in Dubai, UAE,</h2>
            <p className='w-[306px] h-[72px] text-[16px] text-center'>and developed a tailored tokenization model for the client with a focus on regulatory compliance and scalability.</p>
          </div>
        </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}

export default One



// absolute left-40 top-32 line 16