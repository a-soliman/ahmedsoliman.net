var months = 12
var days = 31
var today = new Date()
var year = today.getFullYear() +1 
maxYears = 70

	//Creating the month list
	for (var i = 1; i <= months; i++) {
		var monthList = document.getElementById('month')
		// creating the option element
		var option = document.createElement('option')
		// adding the value attributr
		option.setAttribute('value', i)

		// appending the month
		option.innerHTML = i
		//appending the options to thee list
		monthList.appendChild(option)

	} 


	//Creating the dayes list
	for (var i = 1; i <= days; i++) {

		// getting the id of the drop-list
		var dayList = document.getElementById('day')
		// creating the option element
		var option = document.createElement('option') 

		// adding the value attributr
		option.setAttribute('value', i)
		// appending the day
		option.innerHTML = i
		//appending the options to thee list
		dayList.appendChild(option)
	}


	//Creating the Years list
	for (var i = 0; i < maxYears; i++) {
		year--
		

		var yearList = document.getElementById('year')
		// creating the option element
		var option = document.createElement('option') 

		// adding the value attributr
		option.setAttribute('value', year)
		// appending the year
		option.innerHTML = year
		//appending the options to thee list
		yearList.appendChild(option)
		
	}

	// end of Creating droplists


		//adressing the zodiac signs
function zodiac(name, sign, period, planet, infoOne, infoTwo, infoThree) {
	this.name = name,
	this.sign = sign,
	this.period = period,
	this.planet = planet,
	this.infoOne = infoOne,
	this.infoTwo = infoTwo,
	this.infoThree = infoThree
}

var aries = new zodiac('Aries', 'img/aries.png', 'March 21 - April 19', 'Mars', 'The symbol for this sign is that of a ram for good reason. Aries is full of life and possesses high energy, which makes this sign always looking for a challenge. The typical Aries person is full of vitality, curiosity, and has a heightened sense of justice. They often excel at anything where a bit of competition is involved, whether this is of a cognitive nature or physical. The challenge is the thing. If there is a chance to win, to best someone, to show off abilities, Aries is in it to win it. The Aries person feels most alive when they are in control and leading others. They are often impatient and abrupt with those whom they feel are not their equals and are in a leadership position. Most Aries do not like being told what to do if the person in charge is less talented than they.', 'Highly energetic, and has no problem working long hours on a single project. Often take the initiative experiencing new breakthroughs and discoveries. Aries are thorough, painstaking, and have a knack for precise records and clarity. They live hard, love hard, and play hard.', 'Aries have tunnel vision when working on a project which can make them seem selfish. They can become impatient with those who are not similar to themselves temperamentally and intellectually. The dedication to a project can become stubbornness, possessiveness, and can lead to a withdrawn and sullen attitude. Many Aries who do not feel acknowledged for their accomplishments become sarcastic and rude.')

var taurus = new zodiac('Taurus', 'img/taurus.png', 'April 20 - May 20', 'Venus', 'Tarus’s symbol is the bull because this sign’s characteristic is to be peaceful and methodical. This sign is often very deliberate in their actions, relaxed, and enjoys all of the sensual pleasures that abound in this dimension. Food, drink, sex, luxury, are all sought after by the typical taruean. Because this sign loves luxury they are willing to work hard to obtain it. They are slow to anger, but once disturbed it can be volatile. Taurus signs look for stability in their lives and in their partners and co-workers. Taurus people are not in a hurry, typically, and it can take them many years to decide what it is that they would like to do for a living, or where they’d like to go on vacation. Many of this sign prefer to live in the country as they are drawn to the earth and the natural world. Earth signs tend to have solid, reputable natures, which coincides with the Earth.', 'Taurus people almost always finish what they start. They are deliberate thinkers and when making decisions usually make the right one. Taurus are generally adaptable, adjusting easily to new circumstances especially if there is the reward of luxury, comfort, or sensual reward. This sign loves to laugh and spend time with family.', 'Taurus can be stubborn and ‘bullish’ about ideas that they’ve adopted, which can also make them difficult to get along with when attempting to cooperate on a shared project. Taurus needs to be the leader and to be held in high esteem. If they are not, they refuse to work, often finding small ways to sabotage projects, relationships, or undermine authority that they deem unworthy of leadership.')

var gemini = new zodiac('Gemini','img/gemini.png', 'May 21 - June 20', 'Mercury', 'The Gemini symbol is that of a pair of twins. This is because this sign rarely likes to do anything alone. Gemini are never happier than when they are sharing ideas and concepts with someone else. Communication is a key element for this sign, so many of this sign go into occupations that include some communication in some large capacity. Curiosity is a key characteristic of this sign, and they are people persons. Gemini are great at parties because they can find almost anything to talk about with anyone. Gemini are adventurous by nature and so engage in traveling as often as they can as it affords them the opportunity to meet new people, experience new ideas, and to learn new concepts.', 'Gemini are great conversationalists, and are charming people. Interesting to speak with, Gemini know a little bit about a lot of things. They have a great sense of humor and are generally optimistic people. Gemini often make their own fun, despising boredom.', 'Gemini like to be the center of attention; always. When they perceive the situation to not be in their favor, they leave it. This can include relationships, careers, and friendships. Because of this need to be seen as important, Gemini will sometimes stretch the truth. When they are focused only on themselves they can be largely unsympathetic and rude. Male Gemini tend to change jobs often, and female Gemini change partners often due to boredom.')

var cancer = new zodiac('Cancer', 'img/gemini.png', 'June 21 - July 22', 'Moon', 'The crab symbolizes this sign for good reason. Just as the crab carries its own shell on its back, so too, does the typical cancerian…so to speak. The typical cancer person is all about home and family and is very dedicated and loyal to friends and family. Crabs often move sideways instead of moving in a straight line, and so will the person of this sign. Often, if it will avoid a fight, or achieve the goal, then moving in alternative directions to arrive at the destination is typical. They tend to grasp and hold tightly those things that make them happy, and never let go. The key characteristic of this sign is that Cancer people need to be needed. They need to know that they matter to someone and that they are secure in that love. Brave, courageous, protective, all describe the best possible traits of this sign. Shy, reserved, brooding, and moody, do not serve the cancer person well, but may surface if their needs are not being met.', 'Cancer have an offbeat sense of humor, often finding something humorous that others don’t. They are extremely good listeners and have a heart for the problems of others. In fact, many gravitate toward this sign because they intuitively know that a Cancer will understand. When a Cancer becomes your friend you can be sure that they are truly your friend and will not consider using someone to their own benefit. Cancer tend to be dependable and reliable. They will tell you anything you want to know about them without blinking an eye as they are drawn to honesty in others as well as themselves.', 'This sign can be moody, clingy, and often become incredibly insecure if they feel that they are about to lose the friendship or love of someone close to them. If the situation calls for it, they will lie, but often this dishonesty stems from a deep insecurity about being alone.')

var leo = new zodiac('Leo', 'img/leo.png', 'July 23 - August 22', 'Sun', 'The lion is the symbol for this sign because the lion embodies the best characteristics of the leo; proud, regal, relaxed, and in charge. Leo people know they are in charge, even when it may seem outwardly that they are not.', 'Leo tend to be honest and decent people, opting to do the right thing regardless of the situation. They love organization so that they can find their ‘things’. Leos love material goods and luxury and want those that they love to experience this wealth as well. Leo are generally accepting of everyone initially and make decent, lasting relationships.', 'Leo have a great sense of self-worth which can cross the line into arrogance. Leo can tend toward extravagance if they are not satisfied with what they have. Because they like to be in charge, they can often become smothering to their mates and friends, which may leave them alone "which Leo hates". Divorce and loss are devastating to this sign as they are all about the community and family.')

var virgo = new zodiac('Virgo', 'img/virgo.png', 'August 23 - Sept. 22', 'Mercury', 'The cool, calm, clarity that this sign exudes is why the symbol of the Maiden was chosen. Virgo people are mild mannered on the surface, but underneath there is a flurry of activity. Their minds are never quiet; always thinking, calculating, assessing. They loves making something out of nothing, nurturing and growing small things. They tend to be extremely detail oriented and particularly like producing something that is not only useful, but beautiful and skillful.', 'Virgo have a heart for their fellow man. They are kind, patient and love to laugh. They are not loud ‘look at me’ signs, but rather prefer to be the strong, silent type. They are creative thinkers and true family oriented people. Male Virgo, once they are committed to relationship never walk away unless there is a betrayal, and even then it isn’t written in stone. Female Virgo are dedicated parents, often parenting other children in the neighborhood.', 'Virgo are particularly attentive to health; theirs, yours, everyone’s, which can often lead to obsessive behaviors toward health hypochondria. They can also be judgmental and critical of those that they feel are not living up to their potential, or are going about a project in an inefficient way. Virgo are opinionated and have no problem sharing their opinions, even when they should not.')

var libra = new zodiac('Libra', 'img/libra.png', 'Sept. 23 - October 22', 'Venus', 'Libra people tend to need balance in their lives like no other sign of the zodiac, which makes the symbol of the scales particularly appropriate for this sign. Libra people need to keep a balance between work lives and recreational lives and an equal balance in their emotional and spiritual/physical lives. Because of this need Libra signs can sometimes seem wishy-washy when they are asked to make a decision. This is because they must ‘weigh’ all of their options. However, rest assured, that when a Libra makes up their mind the decision is likely to be the best win/win for all involved; benefiting the most people. This sign does not like to see people unhappy.', 'Libra all have a sense of fair play about them and become completely upset if they perceive that something is unfair or unjust. They are prone to talking for long periods of time about their favorite subjects. Generally the decisions that a Libra makes are the ones that will benefit the most people. Libra are often self-sacrificing for the good of the team or the family.', 'Because Libra take so long to make decisions it can be perceived as laziness, or absent- mindedness. Libra, because of their sense of justice and fair play, will often become argumentative to the exclusion of decorum or appropriateness. Libra don’t like to be in charge, but they like to have a say and to be heard.')

var scorpio = new zodiac('Scorpio', 'img/scorpio.png', 'October 23 - Nov. 21', 'Pluto', 'The symbol for Scorpio is the scorpion. This creature was chosen because it typifies many of the characteristics of this sign. The scorpio person is not necessarily aggressive on its own, unless provoked and in general would rather be contemplative. They crave alone time and often become extremely annoyed when they don’t get it. Scorpio people are great secret keepers and feel each emotion more intensely than other signs. Perhaps because of this they are able to be quite discerning when assisting people with their problems. They are able to cut to the bottom line and show others the best and the worst in their lives.', 'Scorpio exhibit extreme self-control in many areas, and as a result expect that of those around them. They are disciplined, protective and are very interested in others. They give of themselves but do expect the same in return. Scorpio males and females both need to be the leaders, and excel at problem solving and troubleshooting projects and situations.', 'Scorpio invented the term ‘vendetta’. Once a Scorpio is crossed, they don’t forget it. Female Scorpio are worse about this than they others, often going decades without making amends with friends and family. Scorpio also tend to be pessimistic, often seeing threats where there aren’t any, which can make them suspicious, stubborn and paranoid without cause.')

var sagittarius = new zodiac('Sagittarius', 'img/sagittarius.png', 'Nov. 22 - Dec. 21', 'Jupiter', 'The centaur is the symbol for this sign. In mythology, the centaur was half man and half horse, given to pursing pleasure. The centaur is shown with a bow, which he shoots. Wherever the arrow lands, the centaur follows, retrieves the arrow and shoots again. Those born under this sign will love travelling, discovering new things, meeting new people, and learning new things.', 'Sagittarians are highly intelligent and love to be around intelligent people. They enjoy learning new things, traveling to new places, and experiencing unique adventures. Creativity is at the core of who they are and Sagittarians are often creating and recreating their living situations, work situations, and human relationships. Sagittarians are spiritually inclined and are among the types that would travel to the Himalayas to commune with the monks, or take the book, Eat, Pray, Love and go to each spot mentioned in its pages to seek their own enlightenment.', 'Confining a Sagittarian and not allowing for ample space to roam will make this sign rude, and uncooperative. Sagittarians often come up with unrealistic, big plans, but lack the ability to follow through with them. This isn’t because they aren’t capable, but rather they can become sidetracked chasing another avenue of adventure or thought. Sagittarians are about the bigger picture and details often bog them down and bore them.')

var capricorn = new zodiac('Capricorn', 'img/capricorn.png', 'Dec. 22 - Jan. 19', 'Saturn', 'The mountain goat is the symbol for this sign because of the characteristic of the goat to climb higher and higher without losing his footing. Capricorn people are the type that are goal oriented and driven to succeed despite all odds. They will work long and hard hours toward a purposeful goal. Self-disciplined and successful, it is no wonder that some of the world’s greatest scientists, leaders, and teachers have been Capricorn.', 'Capricorns are the superheroes when It comes to making realistic, logical decisions. Their ability to cut through the red tape and see the bottom line is what makes them a real asset to any relationship or occupation where teamwork is valued. Capricorn are family oriented, but will keep their distance if the family is perceived to be violent, harmful, or unfulfilling. Capricorn have a dry sense of humor and their sarcastic wit is only appreciated by those who find humor everywhere. Highly intellectual, good with numbers and analysis, this sign is not often loud, but they are most definitely the muscle and the power behind the very successful machine.', 'Because they are so dedicated to the big picture and the minute details, they can seem dull to others, who don’t understand the active internal nature of the Capricorn. While seeming almost emotionless on the surface, the Capricorn’s mind is always running on overdrive. They can often seem selfish and stingy, keeping information to themselves, or strategically withholding information for their own gain. Often they can be the less imaginative of the signs and refuse to face the facts about a situation because it would signal that they were wrong about something "which they hate".')

var aquarius = new zodiac('Aquarius', 'img/aquarius.png', 'Jan. 20 - Feb. 18', 'Uranus', 'The man who carries the pitcher of water is the symbol for this sign. This is because Aquarians are often generous with their time and resources. For this reason this sign often find themselves in occupations where they are helping on some humanitarian level. They are interested and have a deep concern for the welfare of others. They never know a stranger and are generally loved by all around them. Aquarians never meet a stranger and often will go out of their way to meet with people that they’ve not heard from for years. Connection is at the core of this sign.', 'Aquarians are among the friendliest of the signs, making friends everywhere. They are often chosen among co-workers and family for special awards and honors because of their ability to network. Highly intelligent they are energetic and talented, often using their abilities to help others. Despite their extensive people skills, they often crave alone time to reflect and think about things. Meditation is recommended for this sign as it helps to maintain that sense of alone time, while at the same time a feeling of connectedness with something greater than themselves.', 'If this sign does not have alone time and time to do much desired reflection, they become dour, emotionless, and even are prone to depressive interludes. They can become highly resentful if they believe that their voice is not being truly heard or valued. Because they do self-reflect, this sign can become quite eccentric in some of the hobbies that they pursue, or activities they enjoy.')

var pisces = new zodiac('Pisces', 'img/pisces.png', 'Feb. 19 - March 20', 'Neptune', 'The fish is the symbol given to this sign, primarily because fish live in a secretive and mysterious place. Pisces tend to be daydreamers, often dreaming up brilliant ideas and plans which they are unable to facilitate themselves. They have a happy and vibrant inner life that few get to share or see. They are deeply caring about others and don’t like to see people become unhappy.', 'Pisces are empathetic people, often feeling badly for someone whose life is not going well. They feel the need to reach out to those who are less fortunate and will often find themselves involved in drama that they hadn’t intended. They are kind, caring individuals who feel everything deeply, even though you would not know it on the surface. They can be creative and imaginative when they believe that they have support to make those leaps.', 'Because they feel everything so intensely, this sign can often become a clinical worrier. They will worry that they are not worrying. This tendency to worry also leads to indecision on their part, fearing that if they make a decision that others disagree with that they will have upset someone. Pisces don’t like to hurt people’s feelings and as such become conflicted when they have to make decisions. They do not do well as leaders, but are impressive support personnel. Sometimes the have a lack of follow through due to this indecisiveness and require a gentle nudge from other signs to complete tasks on time.')

//=======================================================================
	

var findZodiac = function() {
	// hide the section
	var wrapper = document.getElementById('wrapper')
	wrapper.setAttribute('class' ,'hidden')

	// retriving data from user 
	var month = document.getElementById('month').value
	var day = document.getElementById('day').value
	var year = document.getElementById('year'). value

	// preparing the output 
	var heading = document.getElementById('outputHeading')
	var body = document.getElementById('outputBody')

	heading.setAttribute('class', 'outputHeading')

	// creating new elements
	var title = document.createElement('h1')
	var subTitle = document.createElement('h2')
	var subSubTitle =document.createElement('h4')
	var image = document.createElement('img')

	var pOne = document.createElement('p')
	var pTwo = document.createElement('p')
	var pThree = document.createElement('p')


	var colTwelve = document.createElement('div')
	var colFourA = document.createElement('div')
	var colFourB = document.createElement('div')
	var colFourC = document.createElement('div')
	var bodyWrapper = document.createElement('div')

	//stting bootstrap classes 
	colTwelve.setAttribute('class', 'col-xs-12')
	colFourA.setAttribute('class', 'col-xs-12')
	colFourB.setAttribute('class', 'col-xs-12')
	bodyWrapper.setAttribute('class', 'row')

	//spans for the paragraphs
	var upSpan = '<span class= "up">Upside: </span>'
	var downSpan = '<span class= "down">Downside: </span>'


	//prossing the program

	// if statments 
	if (month == 3 && day >= 21 || month == 4 && day <= 19) {

		horoscope = aries
	}
	else if(month == 4 && day >= 20 || month == 5 && day <= 20) {
		
		horoscope = taurus
	}
	else if(month == 5 && day >= 21 || month == 6 && day <= 20) {
		
		horoscope = gemini
	}
	else if(month == 6 && day >= 21 || month == 7 && day <= 22) {
		
		horoscope = cancer
	}
	else if(month == 7 && day >= 23 || month == 8 && day <= 22) {
		
		horoscope = leo
	}
	else if(month == 8 && day >= 23 || month == 9 && day <= 22) {
		
		horoscope = virgo
	}
	else if(month == 9 && day >= 23 || month == 10 && day <= 22) {
	
		horoscope = libra
	}
	else if(month == 10 && day >= 23 || month == 11 && day <= 21) {
	
		horoscope = scorpio
	}
	else if(month == 11 && day >= 22 || month == 12 && day <= 21) {

		horoscope = sagittarius
	}
	else if(month == 12 && day >= 22 || month == 1 && day <= 19) {
	
		horoscope = capricorn
	}
	else if(month == 1 && day >= 20 || month == 2 && day <= 18) {
	
		horoscope = aquarius
	}
	else if(month == 2 && day >= 19 || month == 3 && day <= 20) {
		
		horoscope = pisces
	}

	//Listing out the heading according to the horoscope = 
	title.innerHTML = horoscope.name
	subTitle.innerHTML = horoscope.period
	subSubTitle.innerHTML = 'Your planet: ' + horoscope.planet
	image.setAttribute('src', horoscope.sign)
		
	//Listing out the body according to the horoscope = 
	pOne.innerHTML = horoscope.infoOne
	pTwo.innerHTML = upSpan + horoscope.infoTwo
	pThree.innerHTML = downSpan + horoscope.infoThree

	//Appending child to heading
	heading.appendChild(title)
	heading.appendChild(subTitle)
	heading.appendChild(subSubTitle)
	heading.appendChild(image)
	//Appending child to cols before sending to body
	colTwelve.appendChild(pOne)
	colFourA.appendChild(pTwo)
	colFourB.appendChild(pThree)
	//Appending child to body
	body.appendChild(colTwelve)
	bodyWrapper.appendChild(colFourA)
	bodyWrapper.appendChild(colFourB)
	body.appendChild(bodyWrapper)




}// ending the function

var goBtn = document.getElementById('goBtn').addEventListener('click', findZodiac, false)
