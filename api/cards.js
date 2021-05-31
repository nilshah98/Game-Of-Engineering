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
	if(decider >= 0.5 && social >= 30){
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
		effect : {social : singleSkillDecrement},
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
			social: singleSkillIncrement,
			whichCouncil: 'technical',
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
			management: doubleSkillIncrement,
			whichCouncil: 'social'
		};
		socialResponse.message = 'You got selected';
		socialResponse.text = 'Apply for the post';
	} else {
		socialResponse.effect = {};
		socialResponse.message = 'Better luck next time!!';
		socialResponse.text = 'Apply for the Post';
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
			time: doubleTimeDecrement,
			whichCouncil: 'sport'
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

function resultSelector(parameters) {
	let res = [];
	let decider = Math.random();
	let {pointer, time} = parameters;
	let pointerResponse = {}
	if(decider >= 0.4 && pointer >= 55 && time >= 20) {
		pointerResponse.effect = {
			social: singleSkillDecrement,
			pointer: doubleSkillIncrement,
		};
		pointerResponse.message = 'Congrats! Your efforts have payed off!! You have scored excellently';
		pointerResponse.text = 'Cover all the topics briefly';
	}
	else {
		pointerResponse.effect = {
			social: singleSkillDecrement,
			pointer: singleSkillIncrement,
		}
		pointerResponse.message = 'Congrats! Your efforts have payed off!!';
		pointerResponse.text = 'Cover all topics briefly';
	}
	res.push(pointerResponse);
	pointerResponse = {};
	decider = Math.random();
	if( decider >= 0.7 && pointer >= 50 ) {
		pointerResponse.effect = {
			pointer: singleSkillIncrement,
		}
		pointerResponse.message = 'Congrats! Your efforts have payed off!!',
		pointerResponse.text = 'Study only questions from previous papers'
	}
	else {
		pointerResponse.effect = {},
		pointerResponse.message = 'Consider studying not just for passing exams! You have scored okay',
		pointerResponse.text = 'Study only questions from previous papers'
	}
	res.push(pointerResponse);
	res.push({
		effect: {
			pointer: singleSkillDecrement
		},
		message: 'God only helps those who help themselves',
		text: 'Sleep and let god decide your fate'
	});
	return res;
};

function finalYearProjectSelector(parameters) {
	let res = [];
	let decider = Math.random();
	let response = {};
	if(decider>=0.5) {
		response.text = 'Propose and pursue project in unchartered territory and sincerely complete it',
		response.message = 'Successfully Implemented',
		response.effect = {
			pointer: doubleSkillIncrement,
			time: doubleTimeDecrement,
			technical: doubleSkillIncrement
		}
	}
	else {
		response.text = 'Propose and pursue project in unchartered territory and sincerely complete it',
		response.message = 'Unsuccessfully Implemented',
		response.effect = {
			pointer: doubleSkillDecrement,
			time: doubleTimeDecrement,
			technical: doubleSkillIncrement
		}
	}
	res.push(response);
	res.push({
		text: 'Propose a project which you are well familiar with and get it home easily',
		effect: {
			technical: singleSkillIncrement,
			time: singleTimeDecrement,
			pointer: singleSkillIncrement
		}
	});
	res.push({
		text: 'Pick a team with having a super excited and knowledge person who will do everything on your  behalf',
		effect: {
			technical: doubleSkillDecrement,
			pointer: doubleSkillIncrement
		}
	});

	return res;
}

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
				text: 'Attend workshop on programming in python',
				effect: {
					technical: doubleSkillIncrement
				}
			},
			{
				text: 'Go for basketball team selection',
				effect: {
					sports: doubleSkillIncrement
				}
			},
			{
				text: 'Take part in debate society',
				effect: {
            		cultural: doubleSkillIncrement,
          			social: singleSkillIncrement
        		}
      		},
      		{
        		text: 'Go home else trains will get crowded',
				effect: {
					social: singleSkillDecrement,
				}
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
						pointer : doubleSkillIncrement*2,
						time : singleTimeDecrement,
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
						time : singleTimeDecrement
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
				text : "Participate in Technical contest",
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
				text : 'Take part in Sports competition',
				effect : {
					sports : singleSkillIncrement,
					time : singleTimeDecrement
				}
			},
			{
				text : 'Relax at home and opt out of fest',
				effect : { social: singleSkillDecrement}
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
				effect : {
					time: doubleTimeDecrement
				}
			},
			{
				text : 'I am not a beach kind of person',
				effect : {
					social : singleSkillDecrement 
				}
			},
		]
	},
	{
		id: 8,
		requirement: {time: 40},
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
				effect : {
					time: singleTimeDecrement
				}
			},
			{
				text : "Is the huge angry green guy Thor ?",
				effect : {Social: doubleSkillDecrement}
			}
		]
	},
	{
		id: 10,
		requirement: {},
		question: 'There is a beach cleanup drive on Versova beach',
		title: 'Volunteer for Social Work! Paap dhulao soul bachao',
		type: 0,
		options: [
			{
				text: 'Accept and lead your team',
				effect: {
					Social: singleSkillIncrement,
					time: singleTimeDecrement
				}
			},
			{
				text: 'Accept and work',
				effect: {
					social: singleSkillIncrement
				}
			},
			{
				text: 'I\'ll try something else',
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
		whichCouncil: false,
		requirement: {
			social: 55,
			time: 75
		},
		question: 'Interviews for Juniors Positions at Cultural council have begun, you might have a good shot at it',
		title: 'Time to be an insider',
		type: 1,
		options: juniorSocialSelector
	},
	{
		id : 13,
		whichCouncil: false,
		requirement : {
			technical : 30,
			time : 75
		},
		title : 'Time to be an Insider',
		question : 'Interviews for Junior Positions at <Emfinity math club> have begun, you might have a good shot at it',
		type : 1,
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
					pointer: doubleSkillIncrement*2,
					time: singleTimeDecrement,
					management: singleSkillDecrement
				}
			},
			{
				text: 'Complete work and also try to study',
				effect: {
					time: doubleTimeDecrement,
					management: singleSkillIncrement,
					pointer : doubleSkillIncrement
				}
			},
			{
				text: 'Complete work and go to sleep',
				effect: {
					time: singleTimeDecrement,
					pointer: singleSkillDecrement,
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
					time: doubleTimeDecrement,
					management: singleSkillIncrement,
					pointer : doubleSkillIncrement
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time: singleTimeDecrement,
					pointer: singleSkillDecrement,
					management: singleSkillIncrement
				}
			},
			{
				text : 'Study well and do some work',
				effect : {
					time : singleTimeDecrement,
					pointer : singleSkillIncrement,
					management: singleSkillIncrement
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
					time: singleTimeDecrement,
					pointer : singleSkillIncrement
				}
			},
			{
				text: 'Make your own',
				effect: {
					time: doubleTimeDecrement,
					technical: doubleSkillIncrement,
					pointer: doubleSkillIncrement
				}
			}
		]
	},
	{
		id : 19,
		whichCouncil: false,
		requirement : {
			sports : 20,
		},
		question : 'Selections for <football> team have begun, you might have a good shot at it ',
		type : 1,
		title : 'Time to be an insider',
		options : juniorTeamSelector
	},
	{
		id : 20,
		title : 'Opportunity knocks at your door',
		type : 0,
		question : 'There is an opportunity to drive the entire marketing campaign for you college fest. You\'ll be the go-to person for all the decisions',
		requirement : {
			social: 30,
			management: 40
		},
		options : [
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
				}
			},
			{
				text : 'Take it in your own hands and get it done yourself',
				effect : {
					time: doubleTimeDecrement,
					technical: doubleSkillIncrement,
					pointer : doubleSkillIncrement
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
					time: singleTimeDecrement,
					pointer : singleSkillDecrement
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
					pointer : doubleSkillIncrement,
					time : singleTimeDecrement,
					sports : singleSkillDecrement
				}
			},
			{
				text : 'Complete work and also try to study',
				effect : {
					time: doubleTimeDecrement,
					sports: singleSkillIncrement,
					pointer : doubleSkillIncrement
				}
			},
			{
				text : 'Complete work and go to sleep',
				effect : {
					time: singleTimeDecrement,
					pointer: singleSkillDecrement,
					sports: singleSkillIncrement
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
		id : 25,
		requirement : {},
		question : 'From the snowy delights of Rohtang Pass to the soothing warmth of the surrounding thermal springs, there are several places to visit in Kullu Manali for nature lovers and thrill seekers. With its picturesque views of snow-clad mountains, river valleys, charming cafes and laidback vibe, this hill station in Himachal Pradesh is an immensely popular vacation spot with both domestic and foreign tourists.',
		title : 'Manali jaate hai',
		type : 0,
		options : [
			{
				text : 'You\'re in!!',
				effect : {}
			},
			{
				text : 'I\'ll try something else',
				effect : {
					time : doubleSkillIncrement,
					social : doubleSkillIncrement 
				}
			},
		]
	},
	{
		id : 26,
		requirement : {technical:60},
		question : 'You have enough skills and want to try for some industrial experience so you are trying to land an internship.',
		title : 'Internships',
		type : 0,
		options : [
			{
				text : 'Apply for internship',
				effect : {
					time : doubleTimeDecrement,
					technical : doubleSkillIncrement 
				}
			},
			{
				text : 'Raincheck on internship this time',
				effect : {
					time : doubleTimeDecrement,
					social : doubleSkillIncrement 
				}
			},
		]
	},
	{
		id: 27,
		requirement: {},
		question: `Hey Guys, Its Gaurav Sen! Your favourite tech Youtuber is starting a new course on System Designing. It's a 5 week course requiring daily commitment for an hour`,
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
		id: 28,
		requirement: {},
		question: 'Best out of Waste! This is a <beach cleanup drive on Verspva beach>',
		title: 'Teach In India Initiative',
		type: 0,
		options: [
			{
				text: 'Accept and lead your team',
				effect: {
					time: doubleTimeDecrement, 
					social: doubleSkillIncrement, 
				}
			},
			{
				text: 'I\'ll try something else',
				effect: {}
			}
		]
	},
	{
		id : 29,
		isVacation : false
	},
	{
		id: 30,
		whichCouncil : 'social',
		requirement: {},
		question: 'Apply for Head Positions at Cultural council you have been a part of, you might have a good shot at it ',
		title: 'With great power comes great responsibility',
		type: 0,
		options: [
			{
				text: 'Apply for the post',
				effect: {
					time: doubleTimeDecrement, 
					social: doubleSkillIncrement, 
				}
			},
			{
				text: 'Not Intrested',
				effect: {}
			}
		]
	},
	{
		id: 31,
		whichCouncil: 'technical',
		requirement: {technical: 50},
		question: 'Apply for Head Positions at Technical council you have been a part of, you might have a good shot at it ',
		title: 'With great power comes great responsibility',
		type: 0,
		options: [
			{
				text: 'Apply for the post',
				effect: {
					time: doubleTimeDecrement, 
					technical: doubleSkillIncrement, 
				}
			},
			{
				text: 'Not Intrested',
				effect: {}
			}
		]
	},
	{
		id : 32,
		reqiurement : {},
		title : 'Choices Chances and Changes',
		question : 'Many of Your friends have already decided what you want to pursue in your life [Job, CAT, GRE]',
		type : 0,
		options : [
			{
				text : 'Job',
				effect : {
					goal : 'job'
				}
			},
			{
				text : 'GRE/GATE',
				effect : {
					goal : 'gre'
				}
			},
			{
				text : 'CAT/GMAT',
				effect : {
					goal : 'cat'
				}
			},
			{
				text : 'Decide Later',
				effect : {}
			}
		]
	},
	{
		id: 33,
		requirement: {technical: 40, social: 10},
		question: 'Smart India Hackthon has been announced, it is one of the biggest Hackathon that one could be a part of it',
		title: 'Mere yuva bhaiya or beheno',
		type: 0,
		options: [
			{
				text: 'Apply for the hackathon',
				effect: {
					time: singleTimeDecrement, 
					technical: singleSkillIncrement, 
				}
			},
			{
				text: 'Not Intrested',
				effect: {}
			}
		]
	},
	{
		id: 34,
		requirement: {},
		question: 'Your College Provides an inter-disciplinary subject to choose from on which you\'ll be getting credits for',
		title: 'Time to expand your domain',
		type: 0,
		options: [
			{
				text: 'Choose a subject you are unaware of but is a lot of use',
				effect: {
					technical: singleSkillIncrement,
					time: doubleTimeDecrement,
					pointer: singleSkillIncrement
				}
			},
			{
				text: 'Choose a subject which won\'t be much of burden and completed easily but learning is less',
				effect: {
					time: singleTimeDecrement,
					pointer: doubleSkillIncrement,
					technical: singleSkillDecrement
				}
			}
		]
	},
	{
		id : 35,
		title : 'Time to get serious with life',
		question : 'Based on the choice made earlier or yet to make, start working forwards it specifically putting some hours for preparation',
		type : 0,
		options : [
			{
				text : 'Apply',
				effect : {
					time : doubleTimeDecrement,
					technical : doubleSkillIncrement,
				}
			},
			{
				text : 'Reject',
				effect : {
					time : singleTimeIncrement,
					technical : doubleSkillDecrement
				}
			}
		]
	},
	{
		id: 36,
		isVacation: true
	},
	{
		id : 37,
		requirement: {technical: 70},
		question: 'You have enough skills and want to try for some industrial experience so you are trying to land an internship',
		title: 'Internships',
		type: 0,
		options: [
			{
				text: 'Apply for internship in your skills',
				effect: {
					technical: singleSkillIncrement,
					time: singleTimeDecrement
				}
			},
			{
				text: 'Apply for internship in another skill',
				effect: {
					technical: doubleSkillIncrement,
					time: doubleTimeDecrement,
				}
			},
			{
				text: 'Opt us',
				effect: {}
			}
		]
	},
	{
		id : 38,
		title : 'GRE / GATE',
		question : 'You have decided to work on your master\'s application profile',
		type : 0,
		options : [
			{
				text : 'Work on your pointer, entrance exams',
				effect : {
					pointer : doubleSkillIncrement,
					time : doubleTimeDecrement,
					technical : singleSkillDecrement
				}
			},
			{
				text : 'Defer work till next year',
				effect : {
					technical : singleSkillIncrement,
					time : singleTimeDecrement
				}
			}
		]	
	},
    {
        id:39,
		title:'Placement',
		question: 'With companies like Morgan Stanley coming up, would you devote time to prepare for entrance',
        type : 0,
		options : [
			{
				text : 'Prepare Core Subjects, Give Mock Tests ',
				effect : {
					time : singleTimeDecrement,
					technical : singleSkillIncrement,
				}
			},
			{
				text : 'Just Chill',
				effect : {}
			}
		]
        
    },
    {
        id: 40,
        title : 'All of the above',
		question : 'You are willing to do all of the things together!!',
		type : 0,
		options : [
			{
				text : 'Yes!!',
				effect :  {
					social : -50,
					technical : -50,
					goal : undefined,
					management : -50,
					cultural : -50,
					sports : -50,
					time : -100,
					pointer : 0
				}
			}
		]
	},
	{
        id: 41,
        isVacation: false
	},
    {
		id: 42,
		requirement: {},
		question: 'You have N number of things to do, but BE project is as much important',
		title: 'Final Year Project',
		type: 1,
		options: finalYearProjectSelector
	},
	{
		id: 43,
        requirement: {},
        type : 0,
        title : 'Its Hammer time',
		question : 'Welcom to Day, today Is the Day we decide your fate',
		options : [
			{
				text : 'Lets get it done with',
				message: 'Congrats!! You got a score of 325!!!',
                effect : {
					time : singleTimeDecrement,
					technical : singleSkillIncrement,
				}
			},
		]

	},
	{
		id : 44,
		requirement : {},
		type : 0,
		title : 'Relax or Redemption',
		question : 'Now that you are done with attempting a shot at your goal. Relax and work on improving your pointer try some and prepare for something else focus on improving your pointer',
		options : [
			{
				text : 'Foreign country abhi door hai sahab',
				effect : {
					technical : singleSkillIncrement
				}
			},
			{
				text : 'Management karna mushkil hi nahi na mumkin hai',
				effort : {
					management : singleSkillIncrement
				}
			},
			{
				text : 'De de job de de, de de job de',
				effort : {
					technical : singleSkillIncrement,
				}
			}
		]
	},
	{
		id : 45,
		isGameOver : true
	}
];

window.cards = cards;

function updateStore(newParams,newQid,newCn, newIsCouncil){
	console.log(newParams,newQid,newCn, newIsCouncil)
	localStorage.setItem("params",JSON.stringify(newParams))
	localStorage.setItem("qid",String(newQid))
	localStorage.setItem("cn",String(newCn))
	localStorage.setItem("isCouncil",String(newIsCouncil))
}

function getStore(){
	let res = {};
	res.params = localStorage.getItem("params")
		? JSON.parse(localStorage.getItem("params"))
		:{
		social : 50,
		technical : 50,
		goal : undefined,
		management : 50,
		cultural : 50,
		sports : 50,
		time : 100,
		pointer : 50
	};
	res.qid = parseInt(localStorage.getItem("qid")) || 0;
	res.cn = parseInt(localStorage.getItem("cn")) || 0;
	res.isCouncil = localStorage.getItem("isCouncil") === "true" ? true : false;

	return res;
}