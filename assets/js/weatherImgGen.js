// img arrays for determinWeatherImg function
const snowImg = [

  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmk3NXp0anlpamVqOHExanJmZm1mZTRuaHlyZ2Qxa2JyZWNoMG9scSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6YNgoTEPs6vZe/200.webp',
  'https://media0.giphy.com/media/7Bgpw7PwdxoDC/200.webp?cid=790b7611ni75ztjyijej8q1jrffmfe4nhyrgd1kbrech0olq&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media0.giphy.com/media/3o6wrAktYqZ8Nn6FEc/200.webp?cid=790b7611ni75ztjyijej8q1jrffmfe4nhyrgd1kbrech0olq&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media4.giphy.com/media/lq4OJGdaPodP2/200.webp?cid=ecf05e47kzw0xa2a4aeqk1r99aar5934ggescfw1je8bcwld&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media0.giphy.com/media/14uJKhQMZ1wLfO/200.webp?cid=ecf05e47qh43bh1kycl1vmbkf7tqqegssydryiymzhg31iyv&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const thunderstormImg = [
  'https://media2.giphy.com/media/hYR1Q7gmfpW7cW8PpG/giphy.webp?cid=ecf05e47pumlm6ioyzad7mnp9zi0mnkxcvlmz7t7awbdszoa&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media3.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.webp?cid=790b7611p6glflfrb7r8t7xnf62w8w9tcw8jvaqs4uvndqfk&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media2.giphy.com/media/Y4JPYsrJEk454pNbts/giphy.webp?cid=790b7611p6glflfrb7r8t7xnf62w8w9tcw8jvaqs4uvndqfk&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media2.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.webp?cid=ecf05e47hkvckf3gnjyknj8qzb9ma6qtn59shqfgbxdfeb7q&ep=v1_gifs_search&rid=giphy.webp&ct=g'
];

const drizzleImg = [
  'https://media1.giphy.com/media/Mm6Q3R2S4aAInjCDk7/giphy.webp?cid=ecf05e47nlszmn1qqifkowbi3wcc45s6y7k4vpm7hyayr0ns&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media3.giphy.com/media/uXi1khpJjRWMZE1Jnz/giphy.webp?cid=ecf05e47ysb672wcb0pj79pjk6nabx9esvbsppzmhlut1qdq&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media2.giphy.com/media/IkwD0hpaqza8MM5e8J/200.webp?cid=ecf05e476h24982u1u9nttl8k8xl09hrtbfy1yxjn44i2r1m&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media3.giphy.com/media/CgzCfht67MPw0LUy9o/200.webp?cid=ecf05e47b14j6rs9g80f76gxph32uzc5j3ske1uyt06wxd1e&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media1.giphy.com/media/j9jShLBEYbcHj0DIKA/giphy.webp?cid=ecf05e470zt6dv6qxgtiftygp5klt7teytv8t5868hc6itkm&ep=v1_gifs_search&rid=giphy.webp&ct=g',
  'https://media4.giphy.com/media/Kg3TIM9K8genD3K27D/100.webp?cid=ecf05e470zt6dv6qxgtiftygp5klt7teytv8t5868hc6itkm&ep=v1_gifs_search&rid=100.webp&ct=g',
  'https://media3.giphy.com/media/uhOWGc9OmR9GVaXWRm/giphy.webp?cid=ecf05e47i9rej8k5c7zzo2n8sffm3w71o869japfuuny6dh7&ep=v1_gifs_search&rid=giphy.webp&ct=g'
];

const rainImg = [
'https://media4.giphy.com/media/EP0jHSIAOQxK7omlea/200.webp?cid=ecf05e47aekwzxv6c4r7whc42ehzreoz3e457ibzx3o6st3x&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media3.giphy.com/media/hk6czgfmwVJS0/giphy.webp?cid=ecf05e47nlszmn1qqifkowbi3wcc45s6y7k4vpm7hyayr0ns&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media2.giphy.com/media/9qJxVnzvjkckemtTqi/200w.webp?cid=ecf05e47koa38zj29afsigfzstdpvsc3cqedl68yipfvjo2o&ep=v1_gifs_related&rid=200w.webp&ct=g',
'https://media4.giphy.com/media/Qa6srQRoYjbIXqWSIr/giphy.webp?cid=ecf05e47b14j6rs9g80f76gxph32uzc5j3ske1uyt06wxd1e&ep=v1_gifs_search&rid=giphy.webp&ct=g'
];

const mistImg = [
'https://media2.giphy.com/media/sZmv85pZ8NG60HU9QK/giphy.webp?cid=790b7611wffdbe4d877cx8r491540zco0irhmqe8mcqre6qa&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media3.giphy.com/media/3og0IIB0CrEPomHBYs/200.webp?cid=790b7611wffdbe4d877cx8r491540zco0irhmqe8mcqre6qa&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const smokeImg = ['https://media1.giphy.com/media/5vkPVrAKKmwHC/200.webp?cid=790b7611d18zjqqovaw3x3ezdbsalkniuj3acdzh5q6q1cjc&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media0.giphy.com/media/Y00nKVBHjN6nxkkG8m/200.webp?cid=ecf05e4734bbx8mbjfdux38bybno91tvl1hvbiq37ucgninc&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media0.giphy.com/media/l4XBfWu6RqiBVwgM6X/200.webp?cid=ecf05e47vclvl73xl14546xp54rlnyy8dfk316iypfvrqf42&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const hazeImg = [
'https://giphy.com/clips/storyful-twitter-united-states-weather-and-science-zzxU5ECzTCvzEY4C0g',
'https://media1.giphy.com/media/26FmSbR30JMS2SChq/200.webp?cid=ecf05e4738jql32x1dvx1qtm9f2ezpr9ei8xljcjmn2tiwrb&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const dustImg = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGZmbTYwMmJ5anZucWl0eTZodGV3emZqZHFxdWtnMXF0amN3eWw4cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BfKu8KLcbVmiA/giphy.webp';

const fogImg = [
'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZjOGcxODRmdDRmcTd4dzRyenhycDVnbWxkbm4yeXJsOHgzaGNubyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZWRCWdUymIGNW/200.webp',
'https://media4.giphy.com/media/xT9GEpwYcYtwrqjdQc/100.webp?cid=ecf05e47ut7u8ar4xijkjqe6bhlodxch7z2w47df6p0mzs59&ep=v1_gifs_search&rid=100.webp&ct=g',
'https://media3.giphy.com/media/fGvvuU9lc1C1iSaG78/giphy.webp?cid=790b7611baowag36wntnx9us2gc9nmuxldpmymilhpufnfmk&ep=v1_gifs_search&rid=giphy.webp&ct=g'
];

const sandImg = [
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHUwbGo4dGd4ejRwYXNnMjY0OW9qM3RxYzQybXI3ZHFrZWZlMmgzYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTiTnrgHmxWyenLjsQ/200.webp',
'https://media0.giphy.com/media/lPNqO3u4p1gewVI4VJ/200.webp?cid=790b7611du0lj8tgxz4pasg2649oj3tqc42mr7dqkefe2h3a&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media0.giphy.com/media/EaVouuqujYqiI/200.webp?cid=ecf05e47d6gbivo5v0a1dc0p9ogzdjwg0z2f4r0u5l151x3z&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const ashImg = 'https://media4.giphy.com/media/FR6X307rk1dC0/giphy.webp?cid=ecf05e47b1bo88l8tnl3fnnzqmcfhbpnxfw1f7ulqbkkcqrw&ep=v1_gifs_search&rid=giphy.webp&ct=g';

const squallImg = 'https://media4.giphy.com/media/dNJhPXhFuJ4C4HlY1r/giphy.webp?cid=ecf05e47hkvckf3gnjyknj8qzb9ma6qtn59shqfgbxdfeb7q&ep=v1_gifs_search&rid=giphy.webp&ct=g';

const tornadoImg = 'https://media0.giphy.com/media/zybncsOjg5ATC/200.webp?cid=790b761184wpd8d8wocfqobjyxwe89qux3hhapmfzuf8v8k5&ep=v1_gifs_search&rid=200.webp&ct=g';

const clearImg = [
'https://media1.giphy.com/media/NUGwelCYSr1TyIhEYx/100.webp?cid=790b76112cjm164bsf09y94bjxlc0ngabevp8efy21wreoli&ep=v1_gifs_search&rid=100.webp&ct=g',
'https://media1.giphy.com/media/Te7h0uqGNo0CY/giphy.webp?cid=ecf05e47i162juq4v47vwciekwadrig29hol57sg1gl596yv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media0.giphy.com/media/PIh4laWJlz9bq/200.webp?cid=ecf05e47ite7wanbaxkbtggmqpd509n3v0t238coxo3brocj&ep=v1_gifs_search&rid=200.webp&ct=g'
];

const cloudsImg = [
'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnprcnpzenFsZjFpeDZ5NWNiYXkyYmd3aWl4NzdldDA5dnlreHVnOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dBXNPw0XBdF1n82BBf/200.webp',
'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnQ5eHVrd3Zvb3lkaHh0aGtvZnRtaG5wc3Y5dWdtcDAyMTdnbG94YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEdvbelTmMXOQ9VDO/giphy.webp',
'https://media3.giphy.com/media/HZwazRfmuiVSSBjoGw/giphy.webp?cid=790b7611rt9xukwvooydhxthkoftmhnpsv9ugmp0217gloxc&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media4.giphy.com/media/hlmGiqVGTwd7XpoRoo/giphy.webp?cid=790b7611rt9xukwvooydhxthkoftmhnpsv9ugmp0217gloxc&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media0.giphy.com/media/2seaKlqqoGglLcPH2Q/giphy.webp?cid=ecf05e4721r8gm5xsesgual0bco2tiqei988bwo242wtg1os&ep=v1_gifs_search&rid=giphy.webp&ct=g',
'https://media2.giphy.com/media/26BkMY6mvAM1GRSOQ/200.webp?cid=ecf05e47g1blegq60wrgslhw8rnv9kfxvqvqdqk4mojnrmce&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media0.giphy.com/media/l0ExeM99XlABjdxo4/200.webp?cid=ecf05e4797ywtarcl2fbbmtwasvjeqevb8regoblmaoa11f1&ep=v1_gifs_search&rid=200.webp&ct=g',
'https://media0.giphy.com/media/dBXNPw0XBdF1n82BBf/200.webp?cid=ecf05e47o4ii4xk8jg7dmjsh754rnjxglv26z7gse907ut7y&ep=v1_gifs_search&rid=200.webp&ct=g'
]

// function to determine weather img
const determineTDWeatherImg = function () {

  const todayWeather = JSON.parse(localStorage.getItem('aeolusPredictsToday'))

  if( todayWeather[0].weather == "Snow" )
  { 
    const randomIndex = Math.floor(Math.random() * snowImg.length);
    imgSrc = snowImg[randomIndex];
  } else 
  if(todayWeather[0].weather == "Thunderstorm")
  {
    const randomIndex = Math.floor(Math.random() * thunderstormImg.length);
    imgSrc = thunderstormImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Drizzle') 
  { 
    const randomIndex = Math.floor(Math.random() * drizzleImg.length);
     imgSrc = drizzleImg[randomIndex];
  } else 
  if(todayWeather[0].weather == 'Rain')
   { 
    const randomIndex = Math.floor(Math.random() * rainImg.length); 
    imgSrc = rainImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Mist') 
  {
     const randomIndex = Math.floor(Math.random() * mistImg.length);
      imgSrc = mistImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Smoke') 
  { 
    const randomIndex = Math.floor(Math.random() * smokeImg.length);
     imgSrc = smokeImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Haze') 
  { 
    const randomIndex = Math.floor(Math.random() * hazeImg.length);
     imgSrc = hazeImg[randomIndex];
  } else 
  if(todayWeather[0].weather == 'Dust') 
  {  imgSrc = dustImg; } else 
  if(todayWeather[0].weather == 'Fog') 
  { 
    const randomIndex = Math.floor(Math.random() * fogImg.length);
     imgSrc = fogImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Sand') 
  { 
    const randomIndex = Math.floor(Math.random() * sandImg.length);
     imgSrc = sandImg[randomIndex];
  } else
  if(todayWeather[0].weather == 'Ash') { imgSrc = ashImg;} else
  if(todayWeather[0].weather == 'Squall') { imgSrc = squallImg;} else
  if(todayWeather[0].weather == 'Tornado') { imgSrc = tornadoImg;} else
  if(todayWeather[0].weather == 'Clear') 
  { 
    const randomIndex = Math.floor(Math.random() * clearImg.length);
     imgSrc = clearImg[randomIndex];
  } else 
  if(todayWeather[0].weather == 'Clouds') 
  { 
    const randomIndex = Math.floor(Math.random() * cloudsImg.length);
     imgSrc = cloudsImg[randomIndex];
  }

};

// function for forcast cards images
const determineFweatherImg = function (){

  const forecastArray = JSON.parse(localStorage.getItem('aeolusPredictsThisWeek'))

  forecastArray.forEach((day) => {


  });
};

