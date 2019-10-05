// starting parameters (out of):
// time: Full
// all others: half

const singleTimeDecrement = -25, doubleTimeDecrement = -50;
const singleSkillDecrement = -10, doubleSkillDecrement = -20;
const singleSkillIncrement = 10, doubleSkillIncrement = 20;
const singleTimeIncrement = 25, doubleTimeIncrement = 50;

function netaSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {social} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && social >= 20){
		socialResponse.effect = {social : doubleSkillIncrement};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Stand for CR';
	} else {
		socialResponse.effect = {social : singleSkillIncrement};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Stand for CR';
	}
	res.push(socialResponse);
	res.push({
		text : 'Vote for a friend',
		effect : {social : singleSkillIncrement},
	});
	res.push({
		text : 'Do not participate',
		effect : {},
	});
	return res
};

function juniorTechSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {technical} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && technical >= 20){
		socialResponse.effect = {
			technical : doubleSkillIncrement,
			time: doubleTimeDecrement,
			social: singleSkillIncrement
		};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Apply for the post';
	} else {
		socialResponse.effect = {};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Apply for the post';
	}
	res.push(socialResponse);
	res.push({
		text : 'Not intrested to apply',
		effect : {},
	});
	return res
};

function juniorSocialSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {social} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && social >= 20){
		socialResponse.effect = {
			social : doubleSkillIncrement,
			time: doubleTimeDecrement,
			cultural: doubleSkillIncrement,
			management: doubleSkillIncrement
		};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Apply for the post';
	} else {
		socialResponse.effect = {};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Apply for the post';
	}
	res.push(socialResponse);
	res.push({
		text : 'Not intrested to apply',
		effect : {},
	});
	return res
};

function juniorTeamSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {sports} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && sports >= 30){
		socialResponse.effect = {
			sports : doubleSkillIncrement,
			social: singleSkillIncrement,
			time: doubleTimeDecrement
		};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Go for the selection';
	} else {
		socialResponse.effect = {
			sports: singleSkillIncrement
		};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Go for the selection';
	}
	res.push(socialResponse);
	res.push({
		text : 'Not intrested to apply',
		effect : {},
	});
	return res
};

function icpcSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {technical} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && technical >= 20){
		socialResponse.effect = {
			technical : doubleSkillIncrement,
			time: doubleTimeDecrement
		};
		socialResponse.message = 'Congrats Your Team Qualified';
		socialResponse.text = 'Apply for ICPC';
	} else {
		socialResponse.effect = {};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Apply for ICPC';
	}
	res.push(socialResponse);
	res.push({
		text : 'Not intrested to apply',
		effect : {},
	});
	return res
};

// TODO: add function
function resultSelector(parameters) {
	let res = [];
	let decider = Math.random();
	let {pointer, time} = parameters;
	let pointerResponse = {}
	if(decider >= 0.4 && pointer >= 55 && time >= 20) {
		pointerResponse.effect = {
			social: -10,
			pointer: 20
		};
		pointerResponse.message = 'Congrats! Your efforts have payed off!! You have scored excellently';
		pointerResponse.text = 'Cover all the topics briefly';
	}
	else {
		pointerResponse.effect = {
			social: -10,
			pointer: 10
		}
		pointerResponse.message = 'Congrats! Your efforts have payed off!!';
		pointerResponse.text = 'Cover all topics briefly';
	}
	res.push(pointerResponse);
}

// TODO: socialCouncil also append whichCouncil field

const cards = [
    {
		id: 1,
		requirement: {},
		question : 'Class representative nomination time',
		title : 'Sabka neta kaisa ho!!',
		type : 1,
		options : netaSelector,
	},
	{
		id: 2,
		requirement: {},
		question: 'Choose from one of the available activities',
		title: 'Slot ek aur activity teen bahut na insaanfi hain',
		type: 0,
		options: [
			{
				text: 'Attend workshop on <programming in python>',
				effect: {
					technical: singleSkillIncrement
				}
			},
			{
				text: 'Go for <basketball> team selection',
				effect: {
					sports: singleSkillIncrement
				}
			},
			{
				text: 'Take part in debate society',
				effect: {
            		cultural: singleSkillIncrement,
          			social: singleSkillIncrement
        		}
      		},
      		{
        		text: 'Go home else trains will get crowded',
				effect: {}
      		}
		]
	},
  	{
    	id: 3,
			reqiurement : {},
			title : 'Testing times',
			question : 'Test schedule is out for next week but does that bother you?',
			type : 0,
			options : [
				{
					text : 'Prepare a schedule and study for test',
					effect : {
						pointer : doubleSkillIncrement,
						time : doubleTimeDecrement,
					}
				},
				{
					text : 'Complete online course on coursera',
					effect : {
						time : singleTimeDecrement,
						technical : singleSkillIncrement
					}
				},
				{
					text : 'Joaquin Phoenix as joker is just amazing',
					effect : {
						social : singleSkillIncrement,
						pointer : singleSkillDecrement
					}
				},
				{
					text : 'Go for publiity rounds of your college fest',
					effect : {
						pointer : singleSkillDecrement,
						social : singleSkillIncrement,
						time : doubleTimeDecrement
					}
				}
			]
  	},
  	{
    	id: 4,
		requirement: {},
		question: `Test is tomorrow you have missed out on time to prepare. It's not possible for you to complete the syllabus. You need to make a choice.`,
		title: 'Time does not wait for anyone',
		type: 1,
		options: resultSelector,
  	},
	{
		id : 5,
		requirement : {},
		question : 'It is time for the annual fest at your college These are loads of event that you can be a part of but you can be at only on a place',
		title : "Fest at college",
		type : 0,
		options : [
			{
				text : "participate in technical contest",
				effect : {
					technical : singleSkillIncrement,
					time : singleTimeDecrement
				}
			},
			{
				text : 'Volunteer for organising team',
				effect : {
					time : singleTimeDecrement,
					management : singleSkillIncrement
				}
			},
			{
				text : 'Take part in basketball competition',
				effect : {
					sports : singleSkillIncrement,
					time : singleTimeDecrement
				}
			},
			{
				text : 'Relax at home and opt out of fest',
				effect : {}
			}
		]
	},
	{
		id: 6,
		isVacation: true
	},
	{
		id : 7,
		requirement : {},
		question : 'Your friends are planning for a trip to Goa for 2 weeks. Singing, dancing and relaxing are the fun you want for life',
		title : 'Goa is on! Goa is on!',
		type : 0,
		options : [
			{
				text : 'You\'re in!!',
				effect : {}
			},
			{
				text : 'Zindagi humari jhand ba fir bhi ghamand ba',
				effect : {
					time : doubleTimeDecrement,
					social : doubleSkillIncrement 
				}
			},
		]
	},
	{
		id: 8,
		requirement: {},
		question: `Hey Guys, Its Siraj! Your favourite tech Youtuber is starting a new certified course machine learning. It's a 5 week course requiring daily commitment for an hour`,
		title: 'MOOCs',
		type: 0,
		options: [
			{
				text: 'Enroll for that course and dedicate yourself',
				effect: {
					technical: doubleSkillIncrement,
					time: doubleTimeDecrement
				}
			},
			{
				text: 'Enroll for course and work half-assed',
				effect: {
					technical: singleSkillIncrement,
					time: singleTimeDecrement
				}
			},
			{
				text: 'Enroll for another pocket friendly lighter course',
				effect: {
					technical: singleSkillIncrement,
					time: singleTimeDecrement
				}
			},
			{
				text: 'Reject the course',
				effect: {}
			}
		]
	},
	{
		id : 9,
		requirement : {},
		title : 'Netflix & Chill',
		question : 'You are satisifed with ypur life and wish to enjoy your time watching some movies and series on Netflix.',
		type : 0,
		options : [
			{
				text : "Sherlock, FRIENDS, The Big Bang Theory, Marvel Movie Marathon",
				effect : {}
			},
			{
				text : "Zindagi humari jhand ba fir bhi ghamand ba",
				effect : {}
			}
		]
	},
	{
		id: 10,
		requirement: {},
		question: 'Best out of Waste! This is a <beach cleanup drive on Verspva beach>',
		title: 'Volunteer for Social Work! Paap dhulao soul bachao',
		type: 0,
		options: [
			{
				text: 'Accept and lead your team',
				effect: {
					time: singleSkillIncrement,
					social: singleTimeDecrement
				}
			},
			{
				text: 'Accept and work',
				effect: {
					social: singleSkillIncrement
				}
			},
			{
				text: 'Zindagi humari jhand ba fir bhi ghamand ba',
				effect: {}
			}
		]
	},
	{
		id : 11,
		isVacation : false
	},
	{
		id : 12,
		requirement: {
			social: 55,
			time: 75
		},
		question: 'Interviews for Juniors Positions at <cultural council> have begun, you might have a good shot at it',
		title: 'Time to be an insider',
		type: 1,
		options: juniorSocialSelector
	},
	{
		id : 13,
		requirement : {
			technical : 30,
			time : 75
		},
		title : 'Time to be an Insider',
		question : 'Interviews for Junior Positions at <Emfinity math club> have begun, you might have a good shot at it',
		type : 1,
		// TODO : ADD RANDOMIZER
		options : juniorTechSelector
	},
	{
		id: 14,
		requirement: {},
		question: 'You come to a conclusion that your hobby of playing guitar is taking serious amount of time. Do you wish to divert your focus',
		title: 'Balidaan dena hoga',
		type: 0,
		options: [
			{
				text: 'Yes',
				effect: {
					time: singleTimeIncrement,
				}
			},
			{
				text: 'No',
				effect: {
					time: doubleTimeDecrement,
					cultural: doubleSkillIncrement
				}
			}
		]
	},
	{
		id : 15,
		requirement : {
			sports : 20,
		},
		title : 'Let the game begin',
		type : 0,
		question : 'It is now the time for the annual inter-department games. Unfortunately your departments team has pretty weak <football> team and rely on your skills to show them the way',
		options : [
			{
				text : 'Take a lead, form a team, train guys',
				effect : {
					time : doubleTimeDecrement,
					social : singleSkillIncrement,
					management : doubleSkillIncrement,
					sports : doubleSkillIncrement
				}
			},
			{
				text : 'Be a part of the team, play to the best of your ability',
				effect : {
					sports : singleSkillIncrement,
					time : singleTimeDecrement,
					social : singleSkillIncrement
				}
			},
			{
				text : 'Leave the team to loose on their own',
				effect : {
					management : doubleSkillDecrement
				}
			}
		]
	},
	{
		id: 16,
		requirement: {},
		whichCouncil: 'social',
		question: 'You have your test scheduled, but your <leader> has given you some paper work that needs to done',
		title: 'Duty First',
		options: [
			{
				text: 'Forsake work for studies',
				effect: {
					pointer: doubleSkillIncrement,
					time: singleTimeDecrement,
					management: singleSkillDecrement
				}
			},
			{
				text: 'Complete work and also try to study',
				effect: {
					time: doubleTimeDecrement,
					management: singleSkillIncrement
				}
			},
			{
				text: 'Complete work and go to sleep',
				effect: {
					time: singleTimeDecrement,
					pointer: doubleSkillDecrement,
					management: singleSkillIncrement
				}
			},
			{
				text: 'Study well and do some work',
				effect: {
					time: singleTimeDecrement,
					pointer: singleSkillIncrement,
					management: singleSkillIncrement
				}
			}
		]
	},
	{
		id : 17,
		requirement : {
			technical : 30,
		},
		whichCouncil : 'technical',
		question : 'You have your test scheduled, but your <secretory> has given you some paper work that needs to done ',
		type : 0,
		title : 'Duty first',
		options : [
			{
				text : 'Forsake work for studies',
				effect : {
					pointer : doubleSkillIncrement,
					time : singleTimeDecrement,
					management : singleSkillDecrement
				}
			},
			{
				text : 'Complete work and also try to study',
				effect : {
					time : doubleTimeDecrement,
					management : singleSkillIncrement
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time : singleTimeDecrement,
					pointer : doubleSkillDecrement,
					management : singleSkillIncrement
				}
			},
			{
				text : 'Study well and do some work',
				effect : {
					time : singleTimeDecrement,
					pointer : singleSkillIncrement,
				}
			}
		]
	},
	{
		id : 18,
		requirement: {},
		question: 'You have deadline to submit your <core subject assignment> and you have got very kind seniors who shared their assignments with you',
		title: 'Tareek pe taarek',
		options: [
			{
				text: 'Copy',
				effect: {
					technical: singleSkillDecrement,
					time: singleTimeIncrement,
					pointer: singleSkillDecrement
				}
			},
			{
				text: 'Use it as a reference and make your own',
				effect: {
					time: singleTimeDecrement
				}
			},
			{
				text: 'Make your own',
				effect: {
					time: doubleTimeDecrement,
					technical: doubleSkillIncrement,
					pointer: singleSkillIncrement
				}
			}
		]
	},
	{
		id : 19,
		requirement : {
			sports : 20,
		},
		question : 'Selections for <football> team have begun, you might have a good shot at it ',
		type : 1,
		title : 'Time to be an insider',
		// options : [
		// 	{
		// 		text : 'Accept',
		// 		effect : {
		// 			pointer : -20,
		// 			time : -25,
		// 			management : 20
		// 		}
		// 	},
		// 	{
		// 		text : 'Reject',
		// 		effect : {
		// 			time : -50,
		// 			management : 10
		// 		}
		// 	},
		// ]
		// TODO : ADD RANDOMIZER
		options : juniorTeamSelector
	},
	{
		id : 20,
		title : 'Opportunity knocks at your door',
		type : 0,
		question : 'There is an opportunity to drive the entire marketing campaign for you college fest. You\'ll be the go-to person for all the decisions',
		requirement : {},
		options : [
			{
				text : 'Accept responsibilty and work hard on it',
				effect : {
					time : doubleTimeDecrement,
					management : doubleSkillIncrement
				}
			},
			{
				text : 'Accept responsibilty and work hard on it',
				effect : {
					time : singleTimeIncrement,
					management : singleSkillIncrement,
					social : singleSkillDecrement
				}
			},
			{
				text : 'Defer title to someone else',
				effect : {}
			}
		]
	},
	{
		id : 21,
		requirement : {},
		type : 1,
		title : 'Let the world know a legend is in making',
		question : '<ACM ICPC> has been announced, it is one of the biggest contests that once could be a part of it',
		// TODO : ADD RANDOMIZER,
		options : icpcSelector
	},
	{
		id : 22,
		type : 0,
		title : 'Mini-Project is not so mini',
		question : 'You have your mini project submission approaching. Your teammate though has been busy with other works and hasn\'t contributed anything as of now',
		requirement : {},
		options : [
			{
				text : 'Convince and pressurise the friend into contributing',
				effect : {
					social : singleSkillIncrement,
					time : singleTimeDecrement,
					technical : singleSkillIncrement,
					pointer : singleSkillDecrement
				}
			},
			{
				text : 'Take it in your own hands and get it done yourself',
				effect : {
					time: doubleTimeDecrement,
					technical: doubleSkillIncrement
				}
			},
			{
				text : 'Do justice to your part and leave the remaining part as it is',
				effect : {
					pointer : doubleSkillDecrement,
					technical: singleSkillIncrement
				}
			},
			{
				text : 'Use some ready made project and use the remaining time to study for approaching test',
				effect : {
					technical: doubleSkillDecrement,
					time: singleTimeDecrement
				}
			}
		]
	},
	{
		id : 23,
		requirement: {
			sports : 20
		},
		whichCouncil : 'sport',
		title : 'Duty First',
		question : 'You have your test scheduled, but your <captain> has given you some paper work that needs to done',
		options : [
			{
				text : 'Forsake work for studies',
				effect : {
					pointer : doubleSkillDecrement,
					time : singleTimeDecrement,
					sports : doubleSkillIncrement
				}
			},
			{
				text : 'Complete work and also try to study',
				effect : {
					time : doubleTimeDecrement,
					sports : singleSkillIncrement
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time : singleTimeDecrement,
					pointer : doubleSkillDecrement,
					sports : singleSkillIncrement
				}
			},
			{
				text : 'Study well and do some work',
				effect : {
					time : singleTimeDecrement,
					pointer : singleSkillIncrement,
					sports: singleSkillIncrement
				}
			}
		]
	},
	{
		id : 24,
		isVacation : true,
	},
	{
		id : 25
	}
];

// Mock format
// id
// isVacation
// reqiurement order: social, time, pointer, skills: {technical, cultural, management, sports}, whichCouncil
// question
// title
// type (0 => static, 1 => dynamic [responsive] )
// options: [{text, effect, message}, ...]
//export {cards};
