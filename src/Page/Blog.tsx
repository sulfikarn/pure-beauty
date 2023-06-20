import React from 'react'
import DetailsImage from '../assets/image/shutterstock_details.png'
import ReplyIcon from '../assets/image/bi_reply.png'

function Blog() {
  return (
    <>
    <div className='bg-[#842A3A] p-6 rounded-bl-lg rounded-br-lg'>
                <p className='text-[#FDF2DB] text-3xl'>My daily skin care routine</p>
    </div>
      <div className='bg-[#fdf2db] py-8 px-8 max-h-full w-full'>
        <div className='max-h-full w-full '>
            <img src={DetailsImage} className='max-w-[100%] rounded-3xl'/>
        </div>

        <div>
            <p className='pt-6 pb-6'>By admin Posted January 7, 2022 In Face, Skin</p>
            <p className='pt-6 pb-6 leading-6'>I’m sharing a few tips and basics around how I use our range.  We’ve been getting a few questions lately – which is great because it means people are switching to more natural products like the Facial Oil Cleanser and wanting to know exactly how to use it.</p>

            <p className='pt-6 pb-6'>So I’m going to share a little about my daily and weekly skincare routine about how I use our products, along with a little info or helpful tips of the product and what it’s good for etc.</p>

            <p className='pt-6 pb-6'>It’s important to remember that everyone’s skin is so individual.  What works for you may not work for others and vice versa.  There are also so many things which can affect our skin health – stress, hormones, hydration, diet, environmental factors, products etc the list goes on.  So this is my guide to using our range, but if you like to use it another way or have any tips of your own, please share – I love hearing new ways of how you our beautiful customers use their products.</p>

            <p className='pt-6 pb-6'>Starting at the beginning and some say the most crucial to good skin.</p>

            <p className='pt-6 pb-6'>This is the first thing I notice is slacking in my routine if my skin is looking a little dull or having breakouts (along with diet and hormones).  While I’ve been wearing less and less makeup the past year, cleansing at night can become a bit of a missed or lazy step.   Now especially with summer and the festive season upon us, family gatherings, parties etc.  it normally means more makeup and sunscreen so ensuring all makeup is removed at night helps your skin breathe, absorb product and regenerate during sleep.</p>

            <p className='font-medium'>Clensing</p>
            <p className='pt-6 pb-6'>AM – most mornings in the shower I will use our Gentle Foaming Cleanser.  Other mornings (if I’ve showered at night) or running out the door for a walk or swim, it’s a once over with a few spritzes of our face mist and a wipe over with a warm damp face cloth.</p>

            <p className='pt-6 pb-6'>PM – Time to double cleanse.  This helps with taking off makeup/sunscreen, the ocean/sun/day with our Facial Cleansing Oil.  Around 3-5 pumps.  Being quite liberal with this to give skin a good facial massage and help the oil bind to all makeup and dirt.  When you’re ready to remove, wet a flannel/face cloth with warm/hot water and wipe off.  I like to then use the Gentle Foaming Cleanser as the second cleanse to remove any residual oil and dirt.</p>

            <p className='pt-6 pb-6'>After cleansing it’s onto our face mist & toner.  Our Rose and Geranium Face Mist adds hydration, balances and prepares the skin for our moisturising products – especially oils.  (It’s also amazing for a ton of other things too – helps to set makeup, great for after sun or in the esky at the beach, around 3pm or heading out after work, in aircon etc. for more info read here.)</p>
        </div>
          
        <div className='bg-[#842A3A] rounded-3xl h-screen'>
          <div className='px-8 py-8'>
            <p className='text-[#FDF2DB] font-medium pb-4'>Comments</p>
            <form>
              <div className='flex flex-col pb-4'>
                <label className='text-[#FDF2DB] text-sm'>Comments</label>
                <textarea className='bg-[#842A3A] boarder-[#FDF2DB] border-[1px]'></textarea>
              </div>
              <button className='boarder-[#FDF2DB] border-[1px] py-2 px-3 rounded-3xl text-[#FDF2DB] text-sm'>Post a comment</button>
            </form>
            <div className='py-8'>
              <hr/>
            </div>
            <div className='flex flex-col'>
              <div className='flex '>
                <div className='w-10 h-10 bg-[#E57272]  rounded-full relative'>
                  <p className='absolute top-[20%] left-[35%]'>C</p>
                </div>
                <p className='pt-2 pl-3 text-[#FDF2DB]'>Candice Wu</p>
                <span className='pl-2 pt-3 text-[#FDF2DB] text-xs'>1 hour ago</span>
              </div>
              <p className='pl-4 py-3 text-[#FDF2DB] text-xs'>Hi Orlando Diggs , let's meet today. I want to tell you about my ideas. Maybe there we can share toughts. I'll send you the link on Discord!</p>
              <img src={ReplyIcon} className='max-w-[3%] pl-4'/>
              <div className='pl-12'>
                <div className='flex '>
                <div className='w-10 h-10 bg-[#E15CA4] rounded-full relative'>
                  <p className='absolute top-[20%] left-[35%]'>C</p>
                </div>
                {/* bg-[#9A6CC6] */}
                <p className='pt-2 pl-3 text-[#FDF2DB]'>Orlando Diggs</p>
                <span className='pl-2 pt-3 text-[#FDF2DB] text-xs'>36 min ago</span>
              </div>
              <p className='pl-14 text-[#FDF2DB] text-xs'>Alright @Candice Wu , I'll be waiting.</p>
              <img src={ReplyIcon} className='max-w-[3%] pl-4'/>
              </div>
              
              <div className='flex '>
                <div className='w-10 h-10 bg-[#9A6CC6]  rounded-full relative'>
                  <p className='absolute top-[20%] left-[35%]'>C</p>
                </div>
                <p className='pt-2 pl-3 text-[#FDF2DB]'>Candice Wu</p>
                <span className='pl-2 pt-3 text-[#FDF2DB] text-xs'>1 hour ago</span>
              </div>
              <p className='pl-4 py-3 text-[#FDF2DB] text-xs'>Hi Orlando Diggs , let's meet today. I want to tell you about my ideas. Maybe
there we can share toughts. I'll send you the link on Discord!</p>
            </div>
            
          </div>

          
            
        </div>

      </div>
    </>
  )
}

export default Blog