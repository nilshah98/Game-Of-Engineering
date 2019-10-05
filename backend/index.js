// starting parameters (out of):
// time: Full
// all others: half

const singleTimeDecrement = -25, doubleTimeDecrement = -50;
const singleSkillDecrement = -10, doubleTimeDecrement = -20;
const singleSkillIncrement = 10, doubleSkillIncrement = 20;
const singleTimeIncrement = 25, doubleTimeIncrement = 50;

function netaSelector(parameters){
	let res = [];
	let decider = Math.random();
	let {social} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && social >= 20){
		socialResponse.effect = {social : 20};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Stand for CR';
	} else {
		socialResponse.effect = {social : 10};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Stand for CR';
	}
	res.push(socialResponse);
	res.push({
		text : 'Vote for a friend',
		effect : {social : 10},
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
	let {social} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && technical >= 20){
		socialResponse.effect = {technical : 20,time:-10};//Todo @Parshva
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
	let {social} = parameters;
	let socialResponse = {}
	if(decider >= 0.5 && sports >= 20){
		socialResponse.effect = {sports : 20,time: -10};//Todo @Parshva
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Go for the selection';
	} else {
		socialResponse.effect = {};
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

// TODO: add function
function resultSelector(parameters) {
	let res = [];
	let decider = Math.random();
	let {pointer, time} = parameters;
	let pointerResponse = {}
	if(decider >= 0.4 && pointer >= 55 && time >= 0) {
		pointerResponse.effect = {
			time: -50,
			social: -10,
			pointer: 20
		};
		pointerResponse.message = 'Congrats! Your efforts have payed off!! You have scored excellently';
		pointerResponse.text = 'Cover all the topics briefly';
	}
	else {
		pointerResponse.effect = {
			time: -50,
			social: -10,
			pointer: 10
		}
		pointerResponse.message = 'Congrats! Your efforts have payed off!!';
		pointerResponse.text = 'Cover all topics briefly'
	}
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
				}
			},
			{
				text: 'Enroll for course and work half-assed',
				effect: {
					technical: 10,
					time: -25
				}
			},
			{
				text: 'Enroll for another pocket friendly lighter course',
				effect: {
					technical: 10,
					time: -25
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
					time: -25,
					social: 10
				}
			},
			{
				text: 'Accept and work',
				effect: {
					social: 10
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
			social: 75,
		},
		question: 'Interviews for Juniors Positions at <cultural council> have begun, you might have a good shot at it',
		title: 'Time to be an insider',
		type: 0,
		options: socialCouncil
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
					time: 25,
				}
			},
			{
				text: 'No',
				effect: {
					time: -50,
					cultural: 20
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
					
				}
			},
			{
				text : ''
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
					pointer: -20,
					time: -25,
					management: 20
				}
			},
			{
				text: 'Complete work and also try to study',
				effect: {
					time: -50,
					management: 10
				}
			},
			{
				text: 'Complete work and go to sleep',
				effect: {
					time: -25,
					pointer: -20,
					management: 10
				}
			},
			{
				text: 'Study well and do some work',
				effect: {
					time: -25,
					pointer: 10,
					management: 10
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
					pointer : -20,
					time : -25,
					management : 20
				}
			},
			{
				text : 'Complete work and also try to study',
				effect : {
					time : -50,
					management : 10
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time : -25,
					pointer : -50,
					management : 10
				}
			},
			{
				text : 'Study well and do some work',
				effect : {
					time : -25,
					pointer : 10,
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
					technical: -10,
					time: 25,
					pointer: -10
				}
			},
			{
				text: 'Use it as a reference and make your own',
				effect: {
					time: -25
				}
			},
			{
				text: 'Make your own',
				effect: {
					time: -50,
					technical: 20,
					pointer: 10
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
	},
	{
		id : 21,
		requirement : {},
		type : 1,
		title : 'Let the world know a legend is in making',
		question : '<ACM ICPC> has been announced, it is one of the biggest contests that once could be a part of it',
		// TODO : ADD RANDOMIZER,
		options : netaSelector
	},
	{
		id : 22
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
					pointer : -20,
					time : -25,
					management : 20
				}
			},
			{
				text : 'Complete work and also try to study',
				effect : {
					time : -50,
					management : 10
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time : -25,
					pointer : -50,
					management : 10
				}
			},
			{
				text : 'Study well and do some work',
				effect : {
					time : -25,
					pointer : 10,
				}
			}
		]
	},
	{}
];

// Mock format
// id
// isVacation
// reqiurement order: social, time, pointer, skills: {technical, cultural, management, sports}, whichCouncil
// question
// title
// type (0 => static, 1 => dynamic [responsive] )
// options: [{text, effect, message}, ...]
export default cards;