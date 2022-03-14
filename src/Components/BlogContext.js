import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([{
            "Title": " Kareena Kapoor, her kids Jehangir, Taimur leave for the Maldives, aunt Karisma Kapoor joins them.",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV1pQY.img?w=549&h=309&m=6",
            "BlogContent": "On Monday, Kareena Kapoor, her kids Taimur Ali Khan, Jehangir Ali Khan and her elder sister Karisma Kapoor were spotted leaving for the Maldives. In a video shared by a paparazzo account, Karisma is seen wearing an all white outfit as she meets her sister Kareena and her kids at the airport gate. Fans reacted to the video by calling Jeh and Taimur “cute.”",
             "Likes": "1000K"
        },
        {
            "Title": " Actor Anil Rajput Makes Entry to Marathi Serial Man Udu Udu Zhala",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV1tYy.img?w=634&h=400&q=60&m=6&f=jpg&u=t",
            "BlogContent":"arathi television series Man Udu Udu Zhala started last year on August 30 and it has managed to gain popularity among viewers within a few months. The current track of the serial, which airs on Zee Marathi, shows Sanika is in love with Kartik. Sanika is also acting to be pregnant so that Kartik can marry her. Sanika's sister Deepali knows about this and is trying hard to keep it a secret. Amid all these developments, Deepali stops Amit from meeting Sanika. An enraged Amit is seen storming out of the house and criticises Deepali for wasting his time. The actor who played Amit's character is being praised by everyone. Viewers are excited to know the actor, who has enacted the role so convincingly." ,
            "Likes": "700K"
        },
        {
            "Title": "Dasvi teaser: Abhishek Bachchan is preparing for class 10 exams once again, fans say 'results acha nhi aaya to...'",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV12j3.img?w=549&h=309&m=6",
            "BlogContent":"Abhishek Bachchan is back, this time as Ganga Ram Chaudhary. The actor plays a jail inmate, preparing to appear for Class 10 boards in Dasvi. He unveiled the teaser on Monday to announce that the film will be streaming on Netflix from April 7. Sharing the teaser on social media, Abhishek also wished Class 10 students for their board exams. “From one student to another, Dasvi ke exams ke liye dher saari best wishes! (best wishes for class 10 exams)”",
             "Likes": "5000K"
        },
        {
            "Title": " Anupam Kher Beats 'Pan-India Star' Prabhas As 'The Kashmir Files' Outperforms 'Radhe Shyam'",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV1IDu.img?w=768&h=403&m=6&x=115&y=95&s=491&d=275",
            "BlogContent": "After the success of Allu Arjun starrer Pushpa: The Rise, many expected South Indian films to take over Bollywood and soon, a number of pan-Indian films from Tamil, Telugu, Malayalam & Kannada films were announced.After the disastrous results of Telugu film Khiladi starring Ravi Teja & Tamil film Valimai starring Ajith Kumar in Hindi, all hopes were pinned on the superstar who started this fad of pan-Indian films and pan-India stardom, Prabhas. " ,
            "Likes": "600"
        },
        {
            "Title": " Rashmika Mandanna sends her love, power to fans going through tough times",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV1JEw.img?w=320&h=400&m=6&x=130&y=44&s=58&d=58",
            "BlogContent":"hennai, March 14 (IANS) Actress Rashmika Mandanna, who has made a name for herself in both the Tamil and Telugu film industries, has sought to send out some positivity to those who going through a tough time. ",
             "Likes": "1M"
        }
    ]);

    const [technology, setTechnology] = useState([{
            "Title": " Starting an office over the web",
            "CategoryName": "Technology",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://www.home.sandvik/filtered/85484/rszw-90/zoom_tucson_880x480--370781318-rszw-90.jpg",
            "BlogContent":"The medical wire business within Sandvik was looking to expand operations in the US, but the pandemic hindered our search for a new site. So, they did it entirely virtual instead.",
             "Likes": "800"
        },
        {
            "Title": " Understanding 5G – The backbone of the industrial Internet",
            "CategoryName": "Technology",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://www.home.sandvik/filtered/73797/rszw-90/5gwoman_880x480-407805954-rszw-90.jpg",
            "BlogContent":"In the “Artificial Intelligence in Europe” report published by consultancy firm EY, some 57 percent of the companies surveyed expect AI to have a significant or very significant impact on business areas that are “entirely unknown to the company today,” and 65 percent expect AI to have a significant or very significant impact on their core business",
              "Likes": "650"
        },
        {
            "Title": " AI creates a new industrial age",
            "CategoryName": "Technology",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://www.home.sandvik/filtered/72706/rszw-90/mid_880x480-719598442-rszw-90.jpg",
            "BlogContent": "The ports making a comeback include full-size HDMI, card slot reader and the Mag Safe 3 charging port with magnetic connector, other than thunderbolt ports and audio port. While the comeback ports aren’t the most advanced ones but still support high-speed data transfer. I love the MagSafe connector as it prevents the laptop from falling if walked on the cord accidentally.",
            "Likes": "700"
        },
        {
            "Title": " A goldmine for ideas",
            "CategoryName": "Technology",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://www.home.sandvik/filtered/61576/rszw-90/innovation_880x480--1770013580-rszw-90.jpg",
            "BlogContent":"Digitalization is transforming industries and societies around the world, and the mining sector is no exception. New technologies, including electrified vehicles and Wi-Fi-enabled equipment, are unlocking new ways of conducting exploration and extraction, and in the process boosting safety, productivity and sustainability.",
             "Likes": "900"
        },
        {
            "Title": " iQOO Z6 5G launching in India on March 16; price and key features revealed ahead of launch",
            "CategoryName": "Technology",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/iQOO_Z6_5G_India_launch_confir.jpg?HLqsSbxCslM4fdgjado2oDRhbKwciP.A&size=770:433",
            "BlogContent":"It seems that iQOO is not done yet as the company is now planning to launch the iQOO Z6 5G smartphone in India on March 16. The announcement for the launch comes just a few weeks after it launched three phones under the iQOO 9 series. Ahead of the official unveiling, the company has revealed some of the key features and price range of the upcoming phone.",
             "Likes": "422"
        }
    ]);

    const [hollywood, setHollywood] = useState([{
            "Title": " Sarah Snook misses Critics Choice Awards after positive COVID-19 test",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAPEvci.img?w=634&h=400&q=60&m=6&f=jpg&u=t",
            "BlogContent":"Sarah Snook missed the Critics Choice Awards after testing positive for COVID-19.",
             "Likes": "800"
        },
        {
            "Title": " Halle Berry calls for Hollywood representation",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAV1mdO.img?w=634&h=400&q=60&m=6&f=jpg&u=t",
            "BlogContent": "Hollywood stars Will Smith and Michael B. Jordan are set to star and produce the sequel to I Am Legend. The film will be written by Akiva Goldsman for Warner Bros Studios. Will Smith took to Instagram to share a teaser photo spelling out the partnership following the news, and tagged Jordan in the post. ",
            "Likes": "800K"
        },
        {
            "Title": " William Hurt, Oscar Winning Actor, Passes Away A Week Before His 72nd Birthday!",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/kiss-of-the-spider-woman-actor-william-hurt-dies-at-71-001.jpg",
            "BlogContent":"TActor William Hurt, who became a top leading man in the 1980s by winning an Oscar for 1985’s ‘Kiss of the Spider Woman’, and starring in ‘The Big Chill’ and ‘Body Heat’, has died of natural causes.",
             "Likes": "2M"
        },
        {
            "Title": "Emma Watson Takes A Subtle Dig At JK Rowling During The BAFTAs, Netizen Says, What A QUEEEEENNN",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/emma-watson-takes-a-dig-at-jk-rowling-at-baftas-netizens-react-001.jpg",
            "BlogContent": "The 75th BAFTA was held on Sunday at the Royal Albert Hall, London, where numerous personalities graced the event. This year, Emma Watson was roped in as a presenter, while Rebel Wilson hosted the show. During the intro, the Harry Potter alum seems to have taken a subtle dig at JK Rowling over her transphobic comment in the past.",
            "Likes": "800K"
        },
        {
            "Title": "Critics Choice Awards 2022: From Selena Gomez’s Bright Red Gown To Halle Berry’s X-Men Ode – Here’s Some Of The Most Bedazzling Fits!",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/critics-choice-awards-2022-selena-gomez-halle-berry-will-smith-more-more-stars-attended-the-show-001.jpg",
            "BlogContent": "The Critics Choice Awards 2022 took place on Sunday, 13th March in Los Angeles, and several A-listers walked the red carpet, donned in their best attires. Many celebrities were present at the night that celebrated the cinematic achievements of their fellow Hollywood peers, including Selena Gomez, Kristen Stewart, Jared Leto, Andrew Garfield, and many more.",
            "Likes": "1M"
        }

    ]);

    const [fitness, setFitness] = useState([{
            "Title": " LESS STRESS, BETTER HEALTH NOW! ACHIEVE OPTIMAL HEALTH UTILIZING CBDr",
            "CategoryName": "Fitness",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "http://www.fitnessindustrynews.net/wp-content/uploads/2020/07/Cinderella-Buds-and-Jar-759x500.jpg",
            "BlogContent": "Less Stress, Better Health Now! Achieve Optimal Health Utilizing CBD...",
            "Likes": "800K"
        },
        {
            "Title": " An ‘oracle’ for predicting the evolution of gene regulation",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://www.bing.com/th?id=OIP.ZCOzXnUIKj28pCDyhzYhOQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            "BlogContent":"Computational biologists have created a neural network model capable of predicting how changes to non-coding DNA sequences in yeast affect gene expression. They also devised a unique way of representing this data in two dimensions, making it easy to understand the past and future evolution of non-coding sequences in organisms beyond yeast -- and even design custom gene expression patterns for gene therapies and industrial applications. Despite the sheer number of genes that each human cell contains, these so-called 'coding' DNA sequences comprise just 1% of our entire genome. The remaining 99% is made up of 'non-coding' DNA -- which, unlike coding DNA, does not carry the instructions to build proteins.",
             "Likes": "1M+"
        },
        {
            "Title": "Physical activity may protect your brain as you agen",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://www.bing.com/th?id=OIP.vf1GPTzT1OmRuId6xesWdgHaE1&w=309&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            "BlogContent": "We all know we should exercise and eat healthy foods. But doing that isn't just good for maintaining your figure as you age. New research shows that physical activity could help protect your cognitive abilities as you age. And it doesn't have to be intense exercise to make an impact.",
            "Likes": "800K"
        },
        {
            "Title": " Chronic lactate exposure leads to cellular disruptions implicated in cancer and possibly T2 diabets",
            "CategoryName": "Fitness",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "Chronic lactate exposure leads to cellular disruptions implicated in cancer and possibly T2 diabetes",
            "BlogContent": "Acute amounts of lactate like those generated during exercise are probably required for healthy cells, but chronic exposure causes cellular disruption which can lead to cancer, heart failure and type 2 diabetes, according to a new study.",
            "Likes": "1M"
        },
        {
            "Title": " Breastfeeding, even for a few days, linked to lower blood pressure in early childhood",
            "CategoryName": "Fitness",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://th.bing.com/th/id/OIP.bHmr6vCbxofIjqedjLCmoQHaE8?w=303&h=202&c=7&r=0&o=5&pid=1.7",
            "BlogContent": "Babies who were breastfed, even for a few days, had lower blood pressure at 3 years of age than children who had never been breastfed. Toddlers who had been breastfed had lower blood pressure regardless of their body mass index or their mothers' social, health or lifestyle factors.",
            "Likes": "800K"
        }
    ]);

    const [food, setFood] = useState([{
            "Title":"Mumbai hotels move court against unlicensed eateries, aggregators",
             "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset":"https://img.etimg.com/thumb/msid-90189579,width-300,imgsize-153604,,resizemode-4,quality-100/mumbai-hotels-move-court-against-unlicensed-eateries-aggregators.jpg",
            "BlogContent":"A leading lobby group of restaurants in the country has approached the Bombay High Court, seeking its intervention to shut down all unlicensed eateries across Mumbai till they get such necessary licences.",             
             "Likes": "500k+"
        },
        {
            "Title": "Ukraine crisis to help cut wheat procurement bill",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-90086425,width-300,imgsize-220590,,resizemode-4,quality-100/russian-war-in-worlds-breadbasket-threatens-food-supply.jpg",
            "BlogContent":"The Russia-Ukraine war may have increased India’s import cost on crude oil and several other commodities, but is expected to have a beneficial effect on the government’s wheat procurement bill.",
             "Likes": "1M+"
        },
        {
            "Title": "Industry assures government of smooth cooking oil supplies for next 2 months: Sources",
            "CategoryName": "Food",
            "PublishedDate": "March 04 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-89998328,width-100,height-75/industry/cons-products/food/industry-assures-government-of-smooth-cooking-oil-supplies-for-next-2-months-sources.jpg",
            "BlogContent":"The debt-ridden telecom operator Vodafone Idea said its board has approved raising up to Rs 14,500 crore, including Rs 4,500 crore from promoter entities",
             "Likes": "400K"
        },
        {
            "Title": " Stocks in the news: Voda Idea, LTTS, Indiamart, Vedanta, YES Bank and IEX",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-89981844,width-100,height-75/markets/stocks/news/stocks-in-the-news-voda-idea-ltts-indiamart-vedanta-yes-bank-and-iex.jpg",
            "BlogContent": "The debt-ridden telecom operator Vodafone Idea said its board has approved raising up to Rs 14,500 crore, including Rs 4,500 crore from promoter entities",
            "Likes": "1M+"
        },
        {
            "Title": " Tractor market to uptick from mid next year: CNH Industrial",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-89868081,width-100,height-75/industry/auto/auto-news/tractor-market-to-uptick-from-mid-next-year-cnh-industrial.jpg",
            "BlogContent": "“Tractor sales have declined the past few months because of high base and inflation. Long-term, though, there is a huge potential for growth in the tractor and farm equipment segment. Including replacement, the total equipment parc is currently 5 million units, as compared with the overall requirement of 16 million units”, it said.",
            "Likes": "708K"
        }
    ]);

    return ( 
      <BlogContext.Provider value = {
            {
                value1: [bollywood, setBollywood],
                value2: [hollywood, setHollywood],
                value3: [technology, setTechnology],
                value4: [fitness, setFitness],
                value5: [food, setFood]
            }
        } > { props.children } 
        </BlogContext.Provider>
    )
}