import siteSettings from './documents/siteSettings';
import richText from './arrays/richText';
import person from './documents/person';
import page from './documents/page';
import navigation from './documents/navigation';
import navigationItem from './objects/navItem';
import link from './objects/link';
import event from './documents/event';
import figure from './objects/figure';
import meeting from './documents/meeting';
import meetingList from './documents/meetingList';
import state from './strings/state';
import dayOfWeek from './strings/dayOfWeek';
import timeOfDay from './strings/timeOfDay';
import morningOrNight from './strings/morningOrNight';

export const schemaTypes = [
	siteSettings,
	richText,
	person,
	page,
	navigation,
	navigationItem,
	link,
	event,
	figure,
	meeting,
	meetingList,
	state,
	dayOfWeek,
	timeOfDay,
	morningOrNight
];
